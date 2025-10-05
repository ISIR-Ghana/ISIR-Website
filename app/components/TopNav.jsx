'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Projects',
        href: '/projects',
    },
    {
        label: 'Donate',
        href: '/donate',
    },
    {
        label: 'Contact',
        href: '/contact',
    }
  ]

  return (
    <nav className=" bg-white/80  border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="">
                 <Image
                    className="dark:invert"
                    src="/ISIR_logo.jpg"
                    alt="ISIR logo"
                    width={40}
                    height={10}
                    priority
                    />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index)=>(
                    <li key={index}>
                        <Link href={link.href} className={`text-sky-600 hover:underline hover:text-sky-700 px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href ? 'underline text-sky-700' : ''}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-sky-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {/* Overlay background */}
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Sliding menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-sky-950 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
           <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link, index)=>(
                    <li key={index}>
                        <Link href={link.href} onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}
