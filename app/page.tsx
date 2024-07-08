import About from '@/components/About';
import Header from '@/components/Header';
import Project from '@/components/Project';

import Youtube from '@/components/Youtube';
import Skill from '@/components/Skill';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Header />
      <About />
      <Skill />
      <Education />
      <Project />
      <Youtube />
    </main>
  );
}
