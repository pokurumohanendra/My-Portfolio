const USERNAME = "pokurumohanendra";
const GITHUB_API_URL = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;
const JSON_HEADERS = { "Content-Type": "application/json; charset=utf-8" };

export default async () => {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "pokuru-mohanendra-portfolio",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    return new Response(await response.text(), {
      headers: {
        ...JSON_HEADERS,
        "Cache-Control": "public, max-age=300",
        "Netlify-CDN-Cache-Control": "public, durable, s-maxage=1800, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "GitHub activity is temporarily unavailable." }), {
      status: 502,
      headers: JSON_HEADERS,
    });
  }
};
