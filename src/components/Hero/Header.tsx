'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from '@/assets/brand-logo.svg';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import SmNav from './SmNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    //? Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="mt-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={brandLogo} alt="brand logo" width={150} height={100} />
        </Link>
        <div className="hidden sm:block">
          <button className="px-4 py-2 text-lg font-semibold text-secondary border border-secondary  rounded-lg hover:text-white hover:bg-secondary transition-all duration-200 ease-in-out">
            ENQUIRE NOW
          </button>
        </div>
        <div className="sm:hidden">
          {isMenuOpen ? (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MdClose size={24} />
            </button>
          ) : (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MdMenu size={24} />
            </button>
          )}
          {isMenuOpen ? <SmNav /> : null}
        </div>
      </div>
    </header>
  );
}
