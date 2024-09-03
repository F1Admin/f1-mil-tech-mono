'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChevronDown from './Icons/ChevronDown';
import militaryLinks from '../data/militaryLinks';
import baseLinks from '../data/baseLinks';
import { usePathname } from 'next/navigation';
import { getSiteSettings } from '@/sanity/sanity-utils';

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
      setLogo(logo.militaryLogo || ''); // Ensure logo is a string
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <header className="bg-black text-zinc-400 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-5 lg:px-11">
        {/* Logo */}
        <Link href="/military">
          {logo && (
            <Image
              src={logo}
              alt="Flight 1 Logo"
              width={225} // Adjust size as needed
              height={100}
              className="object-contain"
              priority
            />
          )}
        </Link>
        <nav className="hidden space-x-8 lg:flex">
          {militaryLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`text-xs uppercase hover:text-white ${isCurrent(link.path) && 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <nav className="hidden space-x-8 bg-neutral-800 p-4 px-10 lg:flex">
          {baseLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-xs hover:text-white ${pathname.includes(path) && path != '/' ? 'text-white' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile Menu Icon */}
      <div className="flex justify-between bg-neutral-800 py-4 lg:hidden">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileMenuOpen(false);
          }}
          className="px-4 text-xs uppercase text-zinc-400 hover:text-white focus:outline-none"
        >
          <div className="flex items-center gap-3">
            Military
            <ChevronDown
              transform={menuOpen ? 'rotate(-90deg)' : 'rotate(0deg)'}
            />
          </div>
        </button>
        <button
          className="flex flex-col items-center justify-center space-y-1 px-4"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMenuOpen(false);
          }}
        >
          <div className="h-1 w-8 bg-white" />
          <div className="h-1 w-8 bg-white" />
          <div className="h-1 w-8 bg-white" />
        </button>
      </div>
      {/* Mobile Base Menu */}
      {menuOpen && (
        <div className="bg-neutral-600 shadow-md lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {baseLinks
              .filter((link) => link.path !== '/military')
              .map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-xs text-zinc-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>
      )}
      {/* Mobile Military Menu */}
      {mobileMenuOpen && (
        <div className="bg-neutral-600 lg:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {militaryLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-xs uppercase text-zinc-200 hover:text-white"
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
