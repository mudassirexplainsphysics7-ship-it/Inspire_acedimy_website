"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>
    );
}
