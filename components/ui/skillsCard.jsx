import React from "react";
import { Card, CardHeader } from "./card";

const SkillsCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <Card className="flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300  dark:bg-green-950/5 ring-1 ring-yellow-50/5 select-none group border-none backdrop-blur-lg">
      <span className="-mt-20 ml-6 bg-zinc-100 dark:bg-gradient-to-bl dark:from-green-500/60 dark:to-yellow-500/60 ring-yellow-50/5 rounded-xl rotate-45 duration-200 ring-1">
        <Icon
          className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200 text-black"
          aria-hidden="true"
        />
      </span>
      <CardHeader className="p-4 space-y-0 rounded-2xl w-full">
        <h6 className="text-lg font-semibold mb-1">{item.title}</h6>

        <h5
          className="text-zinc-400 dark:text-zinc-400 truncate"
          title={item.description}
        >
          {item.description}
        </h5>
        {/* </div>
            
        </div> */}
      </CardHeader>
    </Card>
  );
};

export default SkillsCard;
