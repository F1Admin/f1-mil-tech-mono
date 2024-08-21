'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronDown from './Icons/ChevronDown';
import militaryLinks from '../data/militaryLinks';
import baseLinks from '../data/baseLinks';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // military subMenu highlighting
  const isCurrent = (path: string) => pathname.includes(path);

  return (
    <header className="bg-black shadow-md text-zinc-400">
      <div className="mx-auto py-[22px] px-11 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/Military_Logo.png"
            alt="Flight 1 Logo"
            width={225} // Adjust size as needed
            height={100}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {militaryLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`hover:text-white text-xs uppercase ${isCurrent(link.path) && 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <nav className="hidden bg-zinc-900 lg:flex px-10 py-4 space-x-8">
          {baseLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`hover:text-white text-xs ${pathname.includes(path) && path != '/' ? 'text-white' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-700 hover:text-zinc-900 focus:outline-none px-10 py-4 space-x-8"
        >
          <ChevronDown
            transform={menuOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {baseLinks.map((link, index) => (
              <Link
                key={index}
                href="/"
                className="text-zinc-400 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
