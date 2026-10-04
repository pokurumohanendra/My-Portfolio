import { Link } from "react-router-dom";
import Section from "../ui/Section";
import RowItem from "../ui/RowItem";
import Badge from "../ui/Badge";
import { posts, readingMinutes, formatPostDate } from "../../data/posts";

export default function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      subtitle="Short notes on problems I've worked through in production."
    >
      <ul>
        {posts.map((post) => (
          <RowItem
            as="li"
            key={post.slug}
            meta={
              <>
                <p className="font-mono text-sm text-ink-2">{formatPostDate(post.date)}</p>
                <p className="text-sm text-ink-3 mt-1">{readingMinutes(post)} min read</p>
              </>
            }
          >
            <h3 className="text-2xl text-ink">
              <Link to={`/writing/${post.slug}`} className="hover:text-accent transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 text-ink-2 max-w-2xl">{post.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {post.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              <Link to={`/writing/${post.slug}`} className="link text-sm ml-2">
                Read →
              </Link>
            </div>
          </RowItem>
        ))}
      </ul>
    </Section>
  );
}
