/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { IoIosHome } from 'react-icons/io';
// import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { MdGroups2 } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

// import Head from 'next/head';

export const Nav = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" shadow-sm bg-primary lg:backdrop-blur-lg  sticky top-0 z-50 py-1 md:py-2 lg:py-4"
      >
        {/* Mobile Nav with Animation */}
        <MobileNav handleOpen={handleOpen} isOpen={open} />
        <div className="px-4 max-w-7xl m-auto md:px-7 xl:px-8">
          <div className="py-2 flex items-center justify-between ">
            <Link href="/">
              <div className="prevent-select">
                <p className="font-bold text-[16px] md:text-2xl  text-maingreen">
                  OH-RES
                </p>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {/* Desktop Navigation Links */}
              <Link
                href="/"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all  duration-300"
              >
                <p
                  className={` ${
                    path === '/' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Home
                </p>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all duration-300"
              >
                {/* <MdGroups2
                  className={`text-lg ${
                    path === '/about' ? 'text-maingreen' : ''
                  }`}
                /> */}
                <p
                  className={`${
                    path === '/about' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  About
                </p>
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all duration-300"
              >
                {/* <FaCog
                  className={`${path === '/services' ? 'text-maingreen' : ''}`}
                /> */}
                <p
                  className={`${
                    path === '/services' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Solutions
                </p>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all duration-300"
              >
                {/* <IoIosMail
                  className={`text-lg ${
                    path === '/contact' ? 'text-maingreen' : ''
                  }`}
                /> */}
                <p
                  className={`${
                    path === '/contact' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Partners
                </p>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all duration-300"
              >
                {/* <IoIosMail
                  className={`text-lg ${
                    path === '/contact' ? 'text-maingreen' : ''
                  }`}
                /> */}
                <p
                  className={`${
                    path === '/contact' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Careers
                </p>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen transition-all duration-300"
              >
                {/* <IoIosMail
                  className={`text-lg ${
                    path === '/contact' ? 'text-maingreen' : ''
                  }`}
                /> */}
                <p
                  className={`${
                    path === '/contact' ? 'text-maingreen' : ''
                  } bg-no-repeat bg-bottom`}
                >
                  Contact
                </p>
              </Link>
            </nav>

            {/* Mobile Nav Toggle Button */}
            <div className="lg:hidden cursor-pointer" onClick={handleOpen}>
              {open ? (
                <IoIosClose className="w-8 h-8" />
              ) : (
                <RxHamburgerMenu className="border-2 border-maingreen  text-white rounded-full w-8 h-8 p-2" />
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
