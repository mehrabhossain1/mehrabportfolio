import SectionTitle from "../ui/sectionTitle";
import ProjectsCard from "./ProjectsCard";
import project1 from "@/public/project1.png";

const Projects = () => {
  return (
    <div className="w-full lg:px-24 px-10 min-h-screen py-16">
      <div className="pb-28 pt-10">
        <SectionTitle backgroundText="featured">featured projects</SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 w-full gap-8 md:px-12">
        {data.map((item) => (
          <ProjectsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Syndicate Travels",
    description:
      "Different categories handmade cake is available for sale. Registered users will get dashboard access where manage their orders and give review",
    image: project1,
    category: "HTML, CSS, JS",
    liveLink: "https://syndicatetravels.vercel.app",
  },
  {
    id: 2,
    title: "Eat Cake 2",
    description:
      "Different categories handmade cake is available for sale. Registered users will get dashboard access where manage their orders and give review",
    image: project1,
    category: "React",
    liveLink: "https://eat-cake-2.vercel.app",
  },
];

export default Projects;
