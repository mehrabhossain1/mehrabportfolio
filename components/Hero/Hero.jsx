import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EyeOpenIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import SocialIcons from "../SocialIcons";
import MovingImage from "./MovingImage";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-full md:min-h-[82vh] px-10 flex flex-col gap-8 pt-5 md:pt-0 select-none md:flex-row-reverse md:px-24 items-center justify-between">
        {/* <HeroImage /> */}
        <MovingImage />
        <div className="w-full">
          <div className="flex flex-col gap-5 md:gap-6 basis-1/2">
            <div className="h-fit">
              <h1 className="font-mono text-xl font-semibold tracking-wide md:text-2xl text-zinc-800/90 dark:text-slate-100">
                Welcome! I&apos;m
              </h1>
              <h1 className="text-5xl md:text-7xl font-extrabold font-[nunito] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-200 py-1">
                Mehrab Hossain
              </h1>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <div>
                <h3 className="text-2xl font-bold text-zinc-800/90 dark:text-slate-100">
                  I build web apps!
                </h3>
              </div>
              <div>
                <p className="text-base antialiased text-zinc-800/90 dark:text-slate-100">
                  I&apos;m a full-stack web developer based in Bangladesh,
                  specializing in cutting-edge web technologies as well as
                  pixel-perfect designs.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  className="w-40 py-6 text-base font-semibold rounded-l-full md:rounded-l-xl md:rounded-r-none dark:border-green-300 text-zinc-800/90 dark:text-slate-100"
                  asChild
                >
                  <Link href="/#contact">
                    <PaperPlaneIcon className="mr-2 size-4" />
                    Contact me
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-40 py-6 text-base font-semibold rounded-r-full md:rounded-r-xl md:rounded-l-none dark:border-green-300 text-zinc-800/90 dark:text-slate-100"
                  asChild
                >
                  <Link href="/resume.pdf">
                    <EyeOpenIcon className="mr-2 size-4" />
                    <span className="">Resume</span>
                  </Link>
                </Button>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
