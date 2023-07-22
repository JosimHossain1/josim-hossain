import About from "@/Components/About";
import { Blog } from "@/Components/Blog";
import Header from "@/Components/Header";
import Project from "@/Components/Project";
import Service from "@/Components/Service";
import Youtube from "@/Components/Youtube";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Service />
      <Project />
      <Youtube />
      <Blog />
    </main>
  );
}
