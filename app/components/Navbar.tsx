'use client';
import Image from 'next/image';
import logo from '../Assets/j.png';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Previous Work', path: '/work' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='backdrop-blur-sm fixed w-full z-20 px-6 md:px-10 lg:px-20 xl:px-24'>
      <div className='flex items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center'>
          <Image
            src={logo}
            className='mr-3 h-12 w-12 rounded-full'
            alt='Logo'
          />
        </a>
        <div className='flex'>
          <button
            onClick={() => handleClick()}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 text-sm text-indigo-500 rounded-lg md:hidden bg-white focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            open ? ' hidden' : 'block'
          } w-full md:flex md:w-auto md:order-1`}
          id='navbar-sticky'
        >
          <ul
            className='flex flex-col 
          p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 transition-all items-center '
          >
            {menus.map((item, key) => (
              <Link
                key={key}
                href={item.path}
                className='block py-2 pl-3 pr-4 text-white md:p-0'
                aria-current='page'
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
