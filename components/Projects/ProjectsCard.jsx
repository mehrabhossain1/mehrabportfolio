import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProjectsCard = ({ item }) => {
  console.log(item);

  return (
    <Card className="bg-green-950/5 border shadow-none border-yellow-50/5 flex flex-col-reverse gap-0 cursor-pointer group hover:-translate-y-1 transition md:p-2 pb-2">
      <CardHeader className="pt-3">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        {/* <Avatar className=" outline-neutral-800"> */}
        <Image
          src={item.image}
          //   className="object-cover left-1/2 absolute -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:scale-110 transition"
          className="rounded-lg group-hover:scale-105 transition"
          alt="avatar"
          height={500}
          width={500}
          decoding="async"
          fetchPriority="high"
          blurDataURL="/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
          placeholder="blur"
        />
        {/* </Avatar> */}

        {/* <Badge
          variant="secondary"
          className={
            "py-2 px-3 bg-green-300/10 rounded-none rounded-tl-xl rounded-br-xl"
          }
        >
          {item.category}
        </Badge> */}
      </CardContent>
      <CardFooter className="pt-4 pb-3 -order-3">
        <Button variant="outline" className="" asChild>
          <Link
            href={item.liveLink}
            target="_blank"
            className="ml-auto dark:bg-transparent dark:text-zinc-50"
          >
            <ArrowRightIcon className="size-4 mr-2" />
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
