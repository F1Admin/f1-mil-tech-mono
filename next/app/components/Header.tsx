'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronDown from './Icons/ChevronDown';
import militaryLinks from '../data/militaryLinks';
import baseLinks from '../data/baseLinks';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="mx-auto py-5 px-10 flex justify-between items-center">
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
              className="text-gray-500 hover:text-gray-90 text-xs uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <nav className="hidden bg-slate-800 lg:flex px-10 py-3 space-x-8">
          {baseLinks.map((link, index) => (
            <Link
              key={index}
              href="/"
              className="text-gray-400 hover:text-white text-xs"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
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
                className="text-gray-400 hover:text-white"
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