import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { siteConfig } from "../../config/site.config";
import { fadeInUp, fadeInDown, staggerContainer } from "../../animations/variants";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "MERN Stack Developer",
  "Problem Solver",
];

const TYPING_SPEED = 75;
const DELETING_SPEED = 40;
const HOLD_DURATION = 1800;

/**
 * useTypewriter — cycles through `words`, typing then deleting each one.
 * A single effect driven by (text, mode) avoids the multi-branch timer
 * logic that could desync and stall mid-word.
 */
function useTypewriter(words) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("typing");
  const wordIndex = useRef(0);

  useEffect(() => {
    const word = words[wordIndex.current % words.length];
    let timeoutId;

    if (mode === "typing") {
      if (text.length < word.length) {
        timeoutId = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          TYPING_SPEED,
        );
      } else {
        timeoutId = setTimeout(() => setMode("deleting"), HOLD_DURATION);
      }
    } else {
      if (text.length > 0) {
        timeoutId = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          DELETING_SPEED,
        );
      } else {
        wordIndex.current = (wordIndex.current + 1) % words.length;
        setMode("typing");
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, mode, words]);

  return text;
}

function TypewriterText({ words }) {
  const text = useTypewriter(words);

  return (
    <span className="gradient-text">
      {text}
      <span
        className="inline-block w-0.5 h-8 ml-1 align-middle animate-pulse"
        style={{ background: "var(--accent)" }}
      />
    </span>
  );
}

// Floating particle background
function ParticleBg() {
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      violet: i % 2 === 0,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 4,
    })),
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.violet
              ? "color-mix(in srgb, var(--primary) 50%, transparent)"
              : "color-mix(in srgb, var(--accent) 40%, transparent)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AvailabilityBadge() {
  if (!siteConfig.availableForWork) return null;

  return (
    <motion.div variants={fadeInDown} className="mb-8 flex justify-center">
      <span className="badge-pill inline-flex items-center gap-2 text-xs font-mono font-medium px-4 py-2 rounded-full border">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ background: "#22c55e" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "#22c55e" }}
          />
        </span>
        {siteConfig.availabilityMessage}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Ambient background effects */}
      <div className="bg-ambient-glow absolute inset-0 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "var(--glow-primary)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "var(--glow-primary)", filter: "blur(80px)" }}
      />

      <ParticleBg />

      {/* Grid overlay */}
      <div className="bg-grid-overlay absolute inset-0 pointer-events-none" />

      <div className="container-custom relative z-10 py-32 sm:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <AvailabilityBadge />

          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg font-medium mb-3 tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            Hi there, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {siteConfig.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 min-h-[2.75rem] sm:min-h-[3.25rem] md:min-h-[3.5rem] flex items-center justify-center"
          >
            <TypewriterText words={ROLES} />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "var(--text-secondary)" }}
          >
            {siteConfig.bio}
          </motion.p>

          {/* Primary actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-primary flex items-center justify-center gap-2 min-w-[10.5rem] px-7 py-3.5 rounded-xl font-semibold text-sm"
            >
              View Projects <FaArrowRight size={13} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={siteConfig.resumeUrl}
              download
              className="btn-outline flex items-center justify-center gap-2 min-w-[10.5rem] px-7 py-3.5 rounded-xl font-semibold text-sm border"
            >
              <FaDownload size={13} /> Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="btn-ghost flex items-center justify-center gap-2 min-w-[10.5rem] px-7 py-3.5 rounded-xl font-semibold text-sm border"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
