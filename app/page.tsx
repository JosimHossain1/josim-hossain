import About from "@/Components/About";
import Header from "@/Components/Header";
import Project from "@/Components/Project";

import Youtube from "@/Components/Youtube";
import Skill from "@/Components/skill";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skill/>
      <Project />
      <Youtube />
    </main>
  );
}
