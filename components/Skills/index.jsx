import React from "react";
import SkillsCard from "../ui/skillsCard";
import SectionTitle from "../ui/sectionTitle";
import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandTypescript,
  TbBrandTailwind,
} from "react-icons/tb";

const Skills = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-16 flex flex-col md:gap-20 gap-10">
      <div className="mb-16">
        <SectionTitle backgroundText="Expertise">skills</SectionTitle>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-16 gap-8 gap-y-12">
        {data.map((item) => (
          <SkillsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Next.JS",
    description: "React JS Framework",
    icon: TbBrandNextjs,
  },
  {
    id: 2,
    title: "Node.JS",
    description: "JavaScript runtime",
    icon: TbBrandNodejs,
  },
  {
    id: 3,
    title: "React.JS",
    description: "JavaScript library",
    icon: TbBrandReact,
  },
  {
    id: 4,
    title: "HTML",
    description: "HyperText Markup Language",
    icon: TbBrandHtml5,
  },
  {
    id: 5,
    title: "CSS",
    description: "Cascading Style Sheets",
    icon: TbBrandCss3,
  },
  {
    id: 6,
    title: "JavaScript",
    description: "Programming Language",
    icon: TbBrandJavascript,
  },
  {
    id: 9,
    title: "Typescript",
    description: "Superset of JavaScript",
    icon: TbBrandTypescript,
  },
  {
    id: 7,
    title: "Firebase",
    description: "Cloud Database",
    icon: TbBrandFirebase,
  },
  {
    id: 8,
    title: "MongoDB",
    description: "NoSQL Database",
    icon: TbBrandMongodb,
  },
  {
    id: 10,
    title: "TailwindCSS",
    description: "CSS Framework",
    icon: TbBrandTailwind,
  },
];

export default Skills;
