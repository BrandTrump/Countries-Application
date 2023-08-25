"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={toggleTheme}
    >
      {currentTheme === "dark" ? (
        <>
          <SunIcon className="h-6 w-6" />
          <h2 className="text-md md:text-lg">Light Mode</h2>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6" />
          <h2 className="text-md md:text-lg">Dark Mode</h2>
        </>
      )}
    </div>
  );
}

export default DarkModeButton;
