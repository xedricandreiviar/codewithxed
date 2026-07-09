"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      className={cn(
        "pixel-btn flex items-center gap-1 px-3 py-1 font-body text-lg transition-colors",
        isDark
          ? "bg-bg-social text-mana-blue hover:bg-mana-blue hover:text-text-dark"
          : "bg-bg-social text-gold hover:bg-gold hover:text-text-dark"
      )}
    >
      {isDark ? "🌙 Night" : "☀️ Day"}
    </button>
  );
}
