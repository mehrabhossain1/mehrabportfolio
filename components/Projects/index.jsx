import React from "react";
import SectionTitle from "../ui/sectionTitle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Projects = () => {
  return (
    <div className="w-full lg:px-24 px-10 min-h-screen py-16">
      <div className="pb-28 pt-10">
        <SectionTitle backgroundText="featured">featured projects</SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 w-full gap-8 md:px-12">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card
              key={i}
              className="bg-green-950/5 shadow-none border border-yellow-50/5 flex flex-col-reverse gap-0 cursor-pointer group hover:-translate-y-1 transition md:p-2 pb-2"
            >
              <CardHeader className="pt-3">
                <CardTitle>Eat Cake</CardTitle>
                <CardDescription>
                  Different categories handmade cake is available for sale.
                  Registered users will get dashboard access where manage their
                  orders and give review
                </CardDescription>
              </CardHeader>
              <CardContent className="py-4 flex justify-between items-center">
                <Avatar className="size-12 outline-neutral-800">
                  <Image
                    src="https://cdn.pixabay.com/photo/2021/07/19/23/45/birthday-6479307_960_720.png"
                    className="size-10 object-cover left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:scale-110 transition"
                    alt="avatar"
                    height={300}
                    width={300}
                    decoding="async"
                    fetchPriority="high"
                    blurDataURL="/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                    placeholder="blur"
                  />
                </Avatar>

                <Badge
                  variant="secondary"
                  className={
                    "py-2 px-3 bg-green-300/10 rounded-none rounded-tl-xl rounded-br-xl"
                  }
                >
                  Full Stack
                </Badge>
              </CardContent>
              <CardFooter className="pt-4 pb-3 -order-3">
                <Button variant="outline" className="" asChild>
                  <Link
                    href="/projects/eat-cake"
                    className="ml-auto dark:bg-transparent dark:text-zinc-50"
                  >
                    <ArrowRightIcon className="size-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Projects;
