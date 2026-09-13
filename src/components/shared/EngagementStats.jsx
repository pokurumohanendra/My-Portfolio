import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi2";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useEngagementStats } from "../../hooks/useEngagementStats";

function formatCount(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return `${n}`;
}

function StatCount({ value }) {
  return (
    <span className="relative inline-grid overflow-hidden text-sm font-semibold tabular-nums" style={{ color: "var(--text-primary)" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="col-start-1 row-start-1"
        >
          {formatCount(value)}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function EngagementStats() {
  const { stats, liked, loading, toggleLike, recordShare, enabled } = useEngagementStats();
  const [toast, setToast] = useState(null);

  if (!enabled) return null;

  const handleShare = async () => {
    const outcome = await recordShare();
    if (outcome === "copied") setToast("Link copied!");
    else if (outcome === "unsupported") setToast("Couldn't share — copy the URL manually");
    else return;
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: loading ? 0.6 : 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card fixed bottom-8 left-4 sm:left-8 z-50 flex items-center gap-1 sm:gap-2 rounded-2xl px-2.5 sm:px-3 py-2 shadow-lg"
      aria-label="Site engagement stats"
    >
      {/* Views */}
      <div className="flex items-center gap-1.5 px-1.5" title="Total views">
        <HiOutlineEye size={17} style={{ color: "var(--icon-default)" }} />
        <StatCount value={stats.views} />
      </div>

      <div className="w-px h-5" style={{ background: "var(--border-dark)" }} />

      {/* Likes */}
      <motion.button
        type="button"
        onClick={toggleLike}
        whileTap={{ scale: 0.85 }}
        className="icon-btn flex items-center gap-1.5 px-1.5 py-1 rounded-xl"
        aria-label={liked ? "Unlike this portfolio" : "Like this portfolio"}
        aria-pressed={liked}
      >
        <motion.span
          key={liked ? "liked" : "unliked"}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className="flex"
        >
          {liked ? (
            <FaHeart size={16} style={{ color: "#f43f5e" }} />
          ) : (
            <FaRegHeart size={16} style={{ color: "var(--icon-default)" }} />
          )}
        </motion.span>
        <StatCount value={stats.likes} />
      </motion.button>

      <div className="w-px h-5" style={{ background: "var(--border-dark)" }} />

      {/* Shares */}
      <div className="relative">
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.85 }}
          className="icon-btn flex items-center gap-1.5 px-1.5 py-1 rounded-xl"
          aria-label="Share this portfolio"
        >
          <FaShareAlt size={14} style={{ color: "var(--icon-default)" }} />
          <StatCount value={stats.shares} />
        </motion.button>

        <AnimatePresence>
          {toast && (
            <motion.span
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-11 left-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg"
              style={{ background: "var(--bg-dark-card)", color: "var(--text-primary)", border: "1px solid var(--border-dark)" }}
            >
              {toast}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
