import About from '@/Components/About';
import Header from '@/Components/Header';
import Project from '@/Components/Project';

import Youtube from '@/Components/Youtube';
import Skill from '@/Components/Skill';

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Header />
      <About />
      <Skill />
      <Project />
      <Youtube />
    </main>
  );
}
