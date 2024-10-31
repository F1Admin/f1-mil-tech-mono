'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChevronDown from './Icons/ChevronDown';
import links from '../data/militaryLinks';
import baseLinks from '../data/baseLinks';
import { usePathname } from 'next/navigation';
import { getSiteSettings } from '@/sanity/sanity-military-utils';

const Header = () => {
  const [logo, setLogo] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (path: string) => pathname.includes(path);

  const toggleMenu = (menu: 'mobile' | 'base') => {
    if (menu === 'mobile') {
      setMobileMenuOpen(!mobileMenuOpen);
      setMenuOpen(false);
    } else {
      setMenuOpen(!menuOpen);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    getSiteSettings()
      .then((settings) => {
        if (isMounted) setLogo(settings.militaryLogo);
      })
      .catch((error) => console.error('Error fetching tech logo:', error));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header className="bg-black text-zinc-400 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-6 md:px-10">
        <Link href="/">
          {logo && (
            <Image
              src={logo}
              alt="Flight 1 Logo"
              width={485 / 2.2} // current logo is 485 x 76
              height={76 / 2.2}
              style={{ objectFit: 'contain' }}
              priority
            />
          )}
        </Link>
        <nav className="hidden space-x-8 lg:flex">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-xs uppercase hover:text-white ${isCurrent(path) ? 'text-white' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="hidden space-x-8 bg-neutral-800 px-4 py-4 lg:flex lg:px-10">
        {baseLinks.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={`text-xs hover:text-white ${isCurrent(path) && path !== '/' ? 'text-white' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-between bg-neutral-800 px-4 py-4 md:px-10 lg:hidden">
        <button
          onClick={() => toggleMenu('base')}
          className="text-xs uppercase text-zinc-400 hover:text-white focus:outline-none"
        >
          <div className="flex items-center gap-3">
            Military
            <ChevronDown
              transform={menuOpen ? 'rotate(-90deg)' : 'rotate(0deg)'}
            />
          </div>
        </button>
        <button
          className="flex flex-col items-center justify-center space-y-1"
          onClick={() => toggleMenu('mobile')}
        >
          <div className="h-1 w-8 bg-white" />
          <div className="h-1 w-8 bg-white" />
          <div className="h-1 w-8 bg-white" />
        </button>
      </div>
      {menuOpen && (
        <div className="bg-neutral-600 shadow-md lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {baseLinks
              .filter(({ label }) => label !== 'MILITARY')
              .map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className="text-xs text-zinc-200 hover:text-white"
                  onClick={() => toggleMenu('base')}
                >
                  {label}
                </Link>
              ))}
          </nav>
        </div>
      )}
      {mobileMenuOpen && (
        <div className="bg-neutral-600 lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="text-xs uppercase text-zinc-200 hover:text-white"
                onClick={() => toggleMenu('mobile')}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
