import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";

import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Announcement from "@/components/ui/announcement";

export default function Home() {
  return (
    <>
      {/* <Announcement /> */}
      <section className="w-full md:px-20">
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Footer />
      </section>
    </>
  );
}
