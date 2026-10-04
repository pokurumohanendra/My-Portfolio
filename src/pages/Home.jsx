import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/shared/Seo";
import Hero from "../components/sections/Hero";
import { ProjectFilterProvider } from "../context/ProjectFilterContext";

// Below-the-fold sections are code-split. Order matches data/navigation.js.
const About = lazy(() => import("../components/sections/About"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Education = lazy(() => import("../components/sections/Education"));
const Journey = lazy(() => import("../components/sections/Journey"));
const Writing = lazy(() => import("../components/sections/Writing"));
const Contact = lazy(() => import("../components/sections/Contact"));

const lazySections = [
  { id: "about", Component: About },
  { id: "experience", Component: Experience },
  { id: "projects", Component: Projects },
  { id: "skills", Component: Skills },
  { id: "education", Component: Education },
  { id: "journey", Component: Journey },
  { id: "writing", Component: Writing },
  { id: "contact", Component: Contact },
];

function SectionSkeleton() {
  return <div className="section min-h-64" aria-hidden="true" />;
}

export default function Home() {
  const { hash } = useLocation();

  // Sections load lazily, so wait for the target to exist before scrolling
  // to a #hash (for example when arriving from a project page).
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    let tries = 0;
    let userMoved = false;
    const stop = () => {
      userMoved = true;
    };
    const events = ["wheel", "touchstart", "keydown"];
    events.forEach((e) => window.addEventListener(e, stop, { passive: true }));

    const settle = [];
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 30) {
        clearInterval(timer);
        el?.scrollIntoView();
        // Re-align a couple of times in case content above the target finishes loading.
        [400, 1000, 2000].forEach((ms) =>
          settle.push(
            setTimeout(() => {
              if (!userMoved) document.getElementById(id)?.scrollIntoView();
            }, ms),
          ),
        );
      }
    }, 100);

    return () => {
      clearInterval(timer);
      settle.forEach(clearTimeout);
      events.forEach((e) => window.removeEventListener(e, stop));
    };
  }, [hash]);

  return (
    <ProjectFilterProvider>
      <Seo />
      <Hero />
      {lazySections.map(({ id, Component }) => (
        <Suspense key={id} fallback={<SectionSkeleton />}>
          <Component />
        </Suspense>
      ))}
    </ProjectFilterProvider>
  );
}
