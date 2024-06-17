'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from '@/assets/brand-logo.svg';
import menuIcon from '@/assets/menu.svg';
//! This is the exported svg icon from Figma
//! I use ReactIcons for the icons,but
//! There was not many places to icons, so I just used the exported icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Image src={menuIcon} alt="menu icon" width={30} height={30} />
        </div>
      </div>
    </header>
  );
}
