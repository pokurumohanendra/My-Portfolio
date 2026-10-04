// WRITING — short technical posts. Add a new object to publish a post.
//
// slug:    used in the URL (/writing/<slug>)
// date:    ISO date (YYYY-MM-DD)
// content: an array of blocks:
//   { type: "p", text }            paragraph
//   { type: "h2", text }           heading
//   { type: "ul", items: [...] }   bullet list
//   { type: "code", lang, text }   code sample

export const posts = [
  {
    slug: "tenant-isolation-in-a-shared-postgres-schema",
    title: "Keeping tenants apart in a shared PostgreSQL schema",
    date: "2026-10-04",
    summary:
      "How to guarantee one customer never sees another's rows when a single-tenant app becomes multi-tenant SaaS.",
    tags: ["PostgreSQL", "Multi-tenancy", "Security"],
    content: [
      {
        type: "p",
        text: "When a single-tenant application becomes a multi-tenant SaaS product, the first question is how to guarantee that one customer can never read or change another customer's data. In a shared schema the answer has three parts: every row carries a tenant id, the tenant is decided on the server, and the safe way to query is also the easy way. I ran into these concerns while contributing to a CRM migration that scoped access across 34 PostgreSQL tables.",
      },
      { type: "h2", text: "Put the tenant on every table" },
      {
        type: "p",
        text: "Add a non-null tenant column to every table that holds customer data, and index it together with the columns you filter and sort by. A tenant column that is missing from even one table is a hole.",
      },
      {
        type: "code",
        lang: "sql",
        text: "ALTER TABLE contacts\n  ADD COLUMN tenant_id uuid NOT NULL REFERENCES tenants (id);\n\nCREATE INDEX contacts_tenant_created_idx\n  ON contacts (tenant_id, created_at DESC);",
      },
      { type: "h2", text: "Never trust the request for the tenant" },
      {
        type: "p",
        text: "The tenant must come from the authenticated session, not from a header, query string or request body that a client can edit. Resolve it once, on the server, and pass it to every query as a parameter.",
      },
      {
        type: "code",
        lang: "js",
        text: "// tenantId comes from the verified session, never from req.body\nconst { tenantId } = req.auth;\n\nconst { rows } = await pool.query(\n  \"SELECT * FROM contacts WHERE tenant_id = $1 AND id = $2\",\n  [tenantId, req.params.id],\n);",
      },
      { type: "h2", text: "Make the safe path the easy path" },
      {
        type: "p",
        text: "If every developer has to remember the tenant filter, someone eventually forgets it. Wrap data access in helpers that require a tenant id and refuse to run without one. PostgreSQL's row-level security is a useful second layer: even a query that forgets its filter returns nothing for the wrong tenant.",
      },
      {
        type: "code",
        lang: "sql",
        text: "ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY tenant_isolation ON contacts\n  USING (tenant_id = current_setting('app.tenant_id')::uuid);",
      },
      { type: "h2", text: "Test the boundary, not just the happy path" },
      {
        type: "ul",
        items: [
          "Create two tenants and assert that reads, updates and deletes across them return nothing.",
          "Check joins and aggregate queries: a count or a report is a leak if it spans tenants.",
          "Cover background jobs and webhooks, which run outside a normal request and have no session to lean on.",
        ],
      },
      {
        type: "p",
        text: "Isolation bugs are quiet. Nothing crashes; the wrong rows simply appear. That is why the checks above belong in the test suite and in code review, not only in the design.",
      },
    ],
  },

  {
    slug: "handling-webhooks-safely",
    title: "Handling webhooks safely: signatures, idempotency and retries",
    date: "2026-10-04",
    summary:
      "Verify the sender, process each event once, and send replies at a pace the provider accepts.",
    tags: ["Node.js", "Webhooks", "Reliability"],
    content: [
      {
        type: "p",
        text: "A webhook endpoint is a public URL that anyone can call. Treating its requests as trustworthy is the most common mistake, followed closely by assuming each event arrives exactly once. Here are the three habits that cover most of the risk. They come from building messaging features on the WhatsApp Business Cloud API, but they apply to any provider.",
      },
      { type: "h2", text: "Verify the signature on the raw body" },
      {
        type: "p",
        text: "Providers such as the WhatsApp Business Cloud API sign each payload with an HMAC-SHA256 of the body and send it in a header (X-Hub-Signature-256). Compute the same HMAC yourself over the raw bytes, not the parsed JSON, and compare in constant time.",
      },
      {
        type: "code",
        lang: "js",
        text: "import crypto from \"node:crypto\";\n\nexport function verifySignature(rawBody, header, secret) {\n  const expected =\n    \"sha256=\" +\n    crypto.createHmac(\"sha256\", secret).update(rawBody).digest(\"hex\");\n\n  const a = Buffer.from(expected);\n  const b = Buffer.from(header ?? \"\");\n  return a.length === b.length && crypto.timingSafeEqual(a, b);\n}\n\n// Keep the body raw for this route so the bytes match what was signed.\napp.post(\n  \"/webhooks/whatsapp\",\n  express.raw({ type: \"application/json\" }),\n  handler,\n);",
      },
      { type: "h2", text: "Make processing idempotent" },
      {
        type: "p",
        text: "Providers retry when your server is slow or returns an error, so the same event can arrive more than once. Store each event id with a unique constraint and skip ids you have already handled. Acknowledge quickly with a 200 and do the heavy work after.",
      },
      {
        type: "code",
        lang: "sql",
        text: "CREATE TABLE webhook_events (\n  event_id   text PRIMARY KEY,\n  received_at timestamptz NOT NULL DEFAULT now()\n);\n\n-- Returns no row when the event was already processed.\nINSERT INTO webhook_events (event_id) VALUES ($1)\n  ON CONFLICT DO NOTHING RETURNING event_id;",
      },
      { type: "h2", text: "Pace and retry what you send" },
      {
        type: "p",
        text: "Sending a broadcast is the mirror image of receiving one. Providers rate-limit senders, so send at a steady pace, retry failures with exponential backoff, and honour a Retry-After header when you receive a 429.",
      },
      {
        type: "ul",
        items: [
          "Send in small batches with a short delay between them instead of all at once.",
          "Retry only errors that can succeed later (timeouts, 429, 5xx), not validation failures.",
          "Cap the number of attempts and record permanent failures so they can be reviewed.",
        ],
      },
    ],
  },
];

/** Whole minutes to read, at roughly 200 words per minute. */
export const readingMinutes = (post) => {
  const words = post.content
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const formatPostDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
