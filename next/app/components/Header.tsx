'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChevronDown from './Icons/ChevronDown';
import militaryLinks from '../data/militaryLinks';
import baseLinks from '../data/baseLinks';
import { usePathname } from 'next/navigation';
import { getSiteSettings } from '@/sanity/sanity-utils';
import path from 'path';

const Header = () => {
  const [logo, setLogo] = useState('');
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // military subMenu highlighting
  const isCurrent = (path: string) => pathname.includes(path);

  useEffect(() => {
    const fetchData = async () => {
      const logo = await getSiteSettings();
      setLogo(logo.militaryLogo);
      setLoading(false);
    };
    fetchData();
  });

  return (
    <header className="bg-black shadow-md text-zinc-400">
      <div className="mx-auto px-4 py-[22px] lg:px-11 flex justify-between items-center">
        {/* Logo */}
        <Link href="/military">
          <Image
            src={logo}
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
      <div className="lg:hidden flex justify-between bg-zinc-900">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileMenuOpen(false);
          }}
          className="bg-zinc-900 text-zinc-200 hover:text-white focus:outline-none px-4 py-4 space-x-8 text-xs uppercase"
        >
          <div className="flex items-center">
            Military
            <ChevronDown
              transform={menuOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}
            />
          </div>
        </button>
        <button
          className="space-y-1 px-4 py-4 flex flex-col justify-center items-center"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMenuOpen(false);
          }}
        >
          <div className="w-8 h-1 bg-zinc-400" />
          <div className="w-8 h-1 bg-zinc-400" />
          <div className="w-8 h-1 bg-zinc-400" />
        </button>
      </div>
      {/* Mobile Base Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-600 shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {baseLinks
              .filter((link) => link.path !== '/military')
              .map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-zinc-200 text-xs hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>
      )}
      {/* Mobile Military Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-600">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {militaryLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-zinc-200 uppercase text-xs hover:text-white"
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
