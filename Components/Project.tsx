import Image from 'next/image';
import { projectData } from '../Data/data';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
const Project = () => {
  return (
    <div className='px-4 text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
      <div className='text-center'>
        <h3 className='poppins-bold text-center text-3xl py-1 text-indigo-200 mx-auto'>
          Creative Portfolio
        </h3>
        <span className='block bg-indigo-500 h-1 w-[10%] mx-auto'></span>
        <p className='text-gray-400 w-2/3 mx-auto mt-3 px-32'>
          "Explore some of my most notable projects, showcasing my design and
          development skills through innovative and impactful solutions."
        </p>
      </div>
      <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-10'>
        {projectData.map((item, key) => (
          <div
            className='border-2 pb-4 overflow-hidde rounded'
            key={item.demoURL}
          >
            {/* Project Display Image */}
            <a href={item.demoURL}>
              <Image
                src={item.imageURL}
                alt={item.name}
                width={400}
                height={400}
              />
            </a>
            <p className='px-4 text-lg poppins-semibold my-2'>{item.name}</p>
            <div className='flex items-center justify-between px-4'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='text-indigo-200 hover:text-indigo-500  border border-indigo-200  hover:bg-indigo-100'>
                    Project Case Studies
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-6xl bg-indigo-200'>
                  <DialogHeader>
                    <DialogTitle>Project Case Studies</DialogTitle>
                  </DialogHeader>
                  <div className='flex items-center space-x-2'>
                    <h1>Hello</h1>
                  </div>
                  <DialogFooter className='sm:justify-start'>
                    <DialogClose asChild></DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Link href={item.demoURL} target='_blank'>
                <Button className='text-indigo-200 hover:text-indigo-500  border border-indigo-200  hover:bg-indigo-100'>
                  <FaExternalLinkAlt />{' '}
                  <span className='ml-2'>Live Preview</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center my-10'>
        <Button className='border border-indigo-400 text-indigo-400 animate-pulse'>
          <span className='mr-2'>View More Projects</span>{' '}
          <ArrowRight className='w-5' />
        </Button>
      </div>
    </div>
  );
};

export default Project;
