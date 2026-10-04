import Button from "../components/ui/Button";
import Seo from "../components/shared/Seo";
import { useSectionNav } from "../hooks/useSectionNav";

export default function NotFound() {
  const { goToTop } = useSectionNav();

  return (
    <section className="min-h-[70vh] flex items-center">
      <Seo title="Page not found" />
      <div className="wrap py-32">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="text-5xl sm:text-6xl text-ink">Page not found</h1>
        <p className="mt-4 text-ink-2 text-lg max-w-md">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button onClick={goToTop} className="mt-8">
          Back to the portfolio
        </Button>
      </div>
    </section>
  );
}
