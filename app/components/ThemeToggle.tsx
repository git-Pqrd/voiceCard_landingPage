"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark" || (!savedTheme && prefersDark)
    );
  }, []);

  function setTheme(dark: boolean) {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <button
        aria-label="Toggle dark mode"
        className="theme-toggle-btn w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center border border-slate-200 dark:border-slate-700 dark:hidden hover:shadow-lg transition-all"
        type="button"
        onClick={() => setTheme(true)}
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
      <button
        aria-label="Toggle light mode"
        className="theme-toggle-btn w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 dark:bg-white shadow-md hidden dark:flex items-center justify-center border border-slate-700 dark:border-slate-200 hover:shadow-lg transition-all"
        type="button"
        onClick={() => setTheme(false)}
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-slate-200 dark:text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  );
}
