"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a balanced placeholder before mount
  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-300/80 dark:border-white/10 text-slate-700 hover:text-slate-950 dark:text-[#D5D0E5] dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Dark Mode (click for Light Mode)" : "Light Mode (click for Dark Mode)"}
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-violet-300 transition-transform duration-300 rotate-0" />
      ) : (
        <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;

