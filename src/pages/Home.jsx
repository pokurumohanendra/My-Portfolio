import { Suspense, lazy } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/layout/BackToTop";
import Hero from "../components/sections/Hero";

// Lazy load below-fold sections for performance
const About = lazy(() => import("../components/sections/About"));
const Education = lazy(() => import("../components/sections/Education"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Journey = lazy(() => import("../components/sections/Journey"));
const Contact = lazy(() => import("../components/sections/Contact"));

function SectionSkeleton() {
  return (
    <div className="section-padding" style={{ background: "var(--bg-dark-surface)" }}>
      <div className="container-custom animate-pulse">
        <div className="h-8 w-48 rounded-xl mx-auto mb-4" style={{ background: "var(--bg-dark-card)" }} />
        <div className="h-4 w-72 rounded-xl mx-auto" style={{ background: "var(--bg-dark-card)" }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Journey />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
