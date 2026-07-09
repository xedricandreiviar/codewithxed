"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SkillChipProps {
  label: string;
  className?: string;
}

const SKILL_LEVELS: Record<string, { level: number; xp: string }> = {
  HTML: { level: 9, xp: "90/100" },
  CSS: { level: 8, xp: "85/100" },
  JavaScript: { level: 8, xp: "80/100" },
  PHP: { level: 7, xp: "70/100" },
  SQL: { level: 7, xp: "72/100" },
  Python: { level: 5, xp: "50/100" },
  "Node.js": { level: 5, xp: "48/100" },
  "Tailwind CSS": { level: 8, xp: "82/100" },
  Java: { level: 4, xp: "40/100" },
};

export function SkillChip({ label, className }: SkillChipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const info = SKILL_LEVELS[label];

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        className={cn(
          "pixel-btn inline-flex items-center justify-center border-2 border-border bg-bg-primary px-3 py-2 font-body text-lg text-text-primary cursor-default",
          className
        )}
        whileHover={{
          scale: 1.1,
          borderColor: "var(--theme-accent)",
          color: "var(--theme-accent)",
          backgroundColor: "var(--theme-bg-social)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {label}
      </motion.span>

      {/* Tooltip - skill details */}
      {isHovered && info && (
        <motion.div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="pixel-border bg-bg-card px-3 py-2 text-center">
            <p className="font-display text-[6px] text-accent">LVL {info.level}</p>
            <div className="mt-1 h-2 w-20 border border-border bg-bg-primary">
              <div
                className="h-full bg-xp-green"
                style={{ width: `${info.level * 10}%` }}
              />
            </div>
            <p className="mt-1 font-body text-xs text-text-secondary">{info.xp} XP</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
