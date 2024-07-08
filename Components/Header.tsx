import { CiFacebook } from 'react-icons/ci';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { Button } from './ui/button';

function Header() {
  return (
    <section className='relative flex flex-col items-center justify-between md:py-36 pt-28 pb-10 px-10 bg-slate-900'>
      <Image
        src='/hero.svg'
        alt='Hero'
        width={1572}
        height={795}
        className='absolute -top-[98px] z-0' // Adjusted z-index
      />

      <div className='lg:flex justify-between items-center md:space-x-5 z-10'>
        {' '}
        {/* Added z-index */}
        <div className='flex lg:w-[55%]'>
          <div className='flex flex-col items-center justify-center mr-10'>
            <span className='w-5 h-5 rounded-full bg-[#8E60F8] block'></span>
            <span className='w-1 h-80 bg-gradient-to-b from-[#8E60F8] to-slate-900 block mt-[-5px]'></span>
          </div>
          <div>
            <h2 className='poppins-bold text-indigo-200 text-2xl md:text-3xl lg:leading-loose leading-normal tracking-tight text-left'>
              Hello, <br />
              <span className='lg:text-8xl text-6xl'>
                I am <span className='text-[#8E60F8]'> Josim</span>
              </span>
            </h2>

            <p className='text-lg text-indigo-200 my-5 md:text-left'>
              A Front-end web developer who is excellent at creating efficient,
              scalable, and user-friendly front-end web solutions.
            </p>

            <div className='flex mt-4 space-x-6 sm:mt-0 text-indigo-100'>
              <Link
                href='https://github.com/JosimHossain1'
                className='cursor-pointer'
              >
                <AiFillGithub className='hover:text-indigo-300 text-2xl ' />
              </Link>
              <a href='https://www.linkedin.com/in/josim40212/'>
                <AiOutlineLinkedin className='hover:text-blue-500 text-2xl' />
              </a>

              <a href='https://www.facebook.com/josim40212'>
                <CiFacebook className='hover:text-indigo-500 text-2xl ' />
              </a>
              <a href='https://www.facebook.com/josim40212'>
                <FaYoutube className='hover:text-red-500 text-2xl ' />
              </a>
            </div>
            <a
              href='https://drive.google.com/file/d/1Z9B_9IN6FxyZ5HSGOkmFy-YTcS5rVLpL/view'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                variant='outline'
                className='bg-transparent cursor-pointer space-x-2 mt-5 text-indigo-400 border-indigo-400 hover:bg-slate-900 hover:text-indigo-400'
              >
                <FaExternalLinkAlt />
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
        </div>
        <div className='from-[#8e60f81e] border-[#1b2c68d0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] lg:w-[45%] mt-10'>
          <div className='flex flex-row'>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
            <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
          </div>
          <div className='px-4 lg:px-8 py-5'>
            <div className='flex flex-row space-x-2'>
              <div className='h-3 w-3 rounded-full bg-red-400'></div>
              <div className='h-3 w-3 rounded-full bg-orange-400'></div>
              <div className='h-3 w-3 rounded-full bg-green-200'></div>
            </div>
          </div>
          <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8'>
            <code className='font-mono text-xs md:text-sm lg:text-base text-indigo-100'>
              <div>
                <span className='text-gray-500'>
                  {' '}
                  &lt;!--Basic Information---&gt;
                </span>
              </div>
              <div className='blink'>
                <span className='mr-2 text-pink-500'>const</span>
                <span className='mr-2 '>coder</span>
                <span className='mr-2 text-pink-500'>=</span>
                <span className='text-gray-400'>{'{'}</span>
              </div>
              <div>
                <span className='ml-4 lg:ml-8 mr-2'>name:</span>
                <span className='text-gray-400'>{`'`}</span>
                <span className='text-amber-300'>Josim Hawladar</span>
                <span className='text-gray-400'>{`',`}</span>
              </div>
              <div className='ml-4 lg:ml-8 mr-2'>
                <span>skills:</span>
                <span className='text-gray-400'>{`['`}</span>
                <span className='text-amber-300'>NextJS</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'> React</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>Tailwind CSS</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>JavaScript</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>ExpressJS</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>MongoDB</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>CSS</span>
                <span className='text-gray-400'>{"', '"}</span>
                <span className='text-amber-300'>HTML</span>
                <span className='text-gray-400'>{"'],"}</span>
              </div>
              <div>
                <span className='ml-4 lg:ml-8 mr-2'>hardWorker:</span>
                <span className='text-orange-400'>true</span>
                <span className='text-gray-400'>,</span>
              </div>
              <div>
                <span className='ml-4 lg:ml-8 mr-2'>quickLearner:</span>
                <span className='text-orange-400'>true</span>
                <span className='text-gray-400'>,</span>
              </div>
              <div>
                <span className='text-gray-400'>{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
