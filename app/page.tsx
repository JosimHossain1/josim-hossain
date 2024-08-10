
// import Gallery from '@/components/Gallery';

import About from "@/components/About";
import Activities from "@/components/Activities";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Youtube from "@/components/Youtube";

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Header />
      <About />
      <Skill />
      <Education />
      <Project />
      {/* <Gallery/> */}
      <Activities/>
      <Youtube />
    </main>
  );
}
