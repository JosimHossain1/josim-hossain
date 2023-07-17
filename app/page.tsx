import About from "@/Components/About";
import { Blog } from "@/Components/Blog";
import Header from "@/Components/Header";
import Service from "@/Components/Service";
import WorkProcess from "@/Components/WorkProcess";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Service />
      <WorkProcess />
      <Blog />
    </main>
  );
}
