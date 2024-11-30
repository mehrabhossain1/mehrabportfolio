"use client";
import React from "react";
import Logo from "@/components/ui/logo";
import ThemeButton from "../ThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-screen-xl mx-auto sticky z-50 h-24 transition -top-2 sm:h-28 dark:from-green-950/5 dark:via-green-950/5 dark:to-green-900/0">
      <div className="w-full px-8 pt-8 text-zinc-800/90 dark:text-zinc-100 md:px-20">
        <div className="flex items-center justify-between py-4 transition-all rounded-full backdrop-blur-lg bg-slate-200/30 dark:border-neutral-800 dark:bg-zinc-800/30 px-7">
          <Logo />
          <div className="">
            <ul className="hidden gap-6 font-medium md:flex">
              {[
                { href: "/", label: "Home" },
                // { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/blogs", label: "Blogs" },
              ].map(({ href, label }) => (
                <li key={href} className="group">
                  <Link
                    href={href}
                    className={`transition-all hover:text-green-500 ${
                      pathname === href
                        ? "text-green-500 underline underline-offset-4 font-semibold"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
