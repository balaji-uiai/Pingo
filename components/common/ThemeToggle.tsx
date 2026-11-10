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
        className={`w-9 h-9 rounded-full bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-[#F5F6FA] hover:bg-[#E5E7F0] dark:bg-[#171A2E] dark:hover:bg-[#292D45] border border-[#E5E7F0] dark:border-[#292D45] text-[#171B2E] dark:text-[#FFFFFF] transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Dark Mode (click for Light Mode)" : "Light Mode (click for Dark Mode)"}
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-[#20C5D8] transition-transform duration-300 rotate-0" />
      ) : (
        <Sun className="w-4 h-4 text-[#3984FF] transition-transform duration-300 rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;
