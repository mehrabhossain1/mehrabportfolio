import React from "react";
import SkillsCard from "../ui/skillsCard";
import SectionTitle from "../ui/sectionTitle";

const Skills = () => {
  return (
    <div className="px-10 py-16 flex flex-col md:gap-20 gap-10">
      <div className="mb-16">
        <SectionTitle backgroundText="Expertise">skills</SectionTitle>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-16 gap-8 gap-y-12">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="">
              <SkillsCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
