'use client';
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { NavbarLink } from '../Data/data';
import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#');

  const activeLink = (path: string, isMobile: boolean) => {
    setActive(path);
    setIsMobileMenuOpen(isMobile);
  };

  return (
    <motion.nav
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      className='fixed top-5 left-0 right-0 z-50 transition-all duration-300'
    >
      <div className='max-w-6xl backdrop-blur-2xl  rounded-full border border-slate-700  mx-auto px-6 py-1'>
        <div className='flex items-center justify-between'>
          <motion.a
            href='#'
            className='text-2xl font-bold text-primary hover:text-primary/80 transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src='/j.png'
              alt='logo'
              width={50}
              height={50}
              className='rounded-full border-1'
            />
          </motion.a>

          <div className='hidden md:flex items-center space-x-4'>
            {NavbarLink.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-2 text-sm font-medium text-secondary transition-colors rounded-full ${
                  active === link.href ? 'underline text-white pb-1' : ''
                }`}
                onClick={() => activeLink(link.href, false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className='flex items-center space-x-2'>
            <Link
              href='https://wa.me/8801303651288'
              target='_blank'
              className='bg-green-50 space-x-2 flex py-2 px-4 rounded-full'
            >
              <Image
                src='/whatsapp.svg'
                alt='whatsapp'
                width={16}
                height={16}
              />
              <span>WhatsAapp</span>
            </Link>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6 text-white' />
              ) : (
                <Menu className='h-6 w-6 text-white' />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background/95 backdrop-blur-lg border-t border-border  w-full mx-3'
          >
            <div className='px-6 py-4 space-y-2'>
              {NavbarLink.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`block px-4 py-3 text-xs font-medium text-white hover:text-foreground hover:bg-slate-700 rounded-full transition-colors ${
                    active === link.href ? 'bg-slate-700' : ''
                  }`}
                  onClick={() => activeLink(link.href, false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
