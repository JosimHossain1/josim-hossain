import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from './ui/button';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 pb-16 flex justify-between items-center md:space-x-10 '>
        {/* Image Side */}
        <div className='flex-1'>
          <Image src='/about.png' width={550} height={550} alt='Josim Hawladar' className='mx-auto' />
        </div>

        {/* About Side */}
        <div className='flex-1 border-l-2 border-slate-800 pl-10'>
          <h1 className='text-xl  text-[#8E60F8] poppins-semibold my-4 text-center md:text-left'>
            ABOUT ME
          </h1>
          <p className='text-indigo-200 text-[15px] text-center md:text-left'>
            I am Josim Hawladar a front-end developer and Computer Science
            student at Daffodil Polytechnic Institute, who is excellent at
            creating efficient, scalable, and user-friendly front-end web
            solutions for your personal, or business. <br /> <br /> Basically I
            work on React JS, Next JS & Tailwind CSS also have strong knowledge
            front-end tools and a strong understanding of UI/UX principles. As a
            web designer, I responsible for creating visually appealing and
            user-friendly websites that align with your business identities.
            <br />
            <br />A visionary tech enthusiast, always trying to explore and
            adapt new technologies.
            <br />
            <br />
            You can call me - Josim
          </p>
          <Link href='/about'>
            <Button
              variant='outline'
              className='bg-transparent space-x-2 mt-5 text-indigo-400 border-indigo-400 hover:bg-slate-900 hover:text-indigo-400'
            >
              <FaExternalLinkAlt />
              <span>About More</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
