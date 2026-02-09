"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative flex h-9 w-16 items-center rounded-full p-1
        bg-[var(--toggle-bg)]
        shadow-inner
      "
    >
      {/* TOGGLE KNOB */}
      <motion.div
        initial={false}
        animate={{ x: theme === "dark" ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="
          flex h-7 w-7 items-center justify-center rounded-full
          bg-[var(--toggle-knob)]
          shadow-md
        "
      >
        {theme === "dark" ? (
          /* 🌙 MOON */
          <motion.svg
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-4 w-4 text-[var(--muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646
                 9.003 9.003 0 0012 21
                 a9.003 9.003 0 008.354-5.646z"
            />
          </motion.svg>
        ) : (
          /* ☀️ SUN */
          <motion.svg
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-4 w-4 text-[var(--accent)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3
                 m15.364 6.364l-.707-.707
                 M6.343 6.343l-.707-.707
                 m12.728 0l-.707.707
                 M6.343 17.657l-.707.707
                 M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </motion.svg>
        )}
      </motion.div>
    </motion.button>
  );
}
