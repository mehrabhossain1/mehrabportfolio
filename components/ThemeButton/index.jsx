"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="cursor-pointer transition-all">
      {resolvedTheme === "dark" ? (
        <SunIcon onClick={() => setTheme("light")} className="size-6" />
      ) : (
        <MoonIcon onClick={() => setTheme("dark")} className="size-6" />
      )}
    </div>
  );
};

export default ThemeButton;
