import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Badge from "../components/ui/Badge";
import Seo from "../components/shared/Seo";
import { posts, readingMinutes, formatPostDate } from "../data/posts";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-2xl text-ink mt-12 mb-3">{block.text}</h2>;
    case "ul":
      return (
        <ul className="my-5 space-y-2 list-disc pl-5 marker:text-gold text-ink-2">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          tabIndex={0}
          aria-label={`${block.lang || "code"} example`}
          className="my-6 overflow-x-auto rounded-lg border border-line bg-surface-2 p-4 text-sm leading-relaxed font-mono text-ink"
        >
          <code>{block.text}</code>
        </pre>
      );
    default:
      return <p className="my-5 text-ink-2 leading-relaxed">{block.text}</p>;
  }
}

export default function PostDetail() {
  const { slug } = useParams();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!post) {
    return (
      <section className="min-h-[70vh] flex items-center">
        <Seo title="Post not found" />
        <div className="wrap py-32">
          <p className="eyebrow mb-4">Not found</p>
          <h1 className="text-4xl text-ink">That post doesn't exist</h1>
          <Link to="/#writing" className="btn btn-solid mt-8">
            <FaArrowLeft size={12} aria-hidden="true" /> Back to writing
          </Link>
        </div>
      </section>
    );
  }

  const next = posts[(index + 1) % posts.length];

  return (
    <article className="pt-28 pb-20 md:pt-36">
      <Seo title={post.title} description={post.summary} />
      <div className="wrap">
        <Link
          to="/#writing"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent transition-colors"
        >
          <FaArrowLeft size={11} aria-hidden="true" /> All writing
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow mb-3">
            {formatPostDate(post.date)} · {readingMinutes(post)} min read
          </p>
          <h1 className="text-4xl sm:text-5xl text-ink">{post.title}</h1>
          <p className="mt-5 text-xl text-ink-2 leading-relaxed">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </header>

        <div className="mt-12 max-w-2xl min-w-0">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {posts.length > 1 && (
          <nav
            aria-label="More writing"
            className="mt-20 pt-8 border-t border-line flex items-center justify-between gap-4"
          >
            <Link to="/#writing" className="link text-sm">
              Back to all writing
            </Link>
            <Link to={`/writing/${next.slug}`} className="text-right group">
              <span className="eyebrow block">Next post</span>
              <span className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
                {next.title} →
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}
