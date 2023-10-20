'use client';

import React, { useEffect, useState } from 'react';
import PrimaryButton from './ui/PrimaryButton';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';
// import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTop } from './ui/NavigationMenuTop';
import { MainNav } from '@/app/dashboard/components/main-nav';
import TeamSwitcher from '@/app/dashboard/components/team-switcher';
import { Search } from '@/app/dashboard/components/search';
import { UserNav } from '@/app/dashboard/components/user-nav';
import { ModeToggle } from './ModeToggle';

export default function TopMenu() {
  const [navColor, setnavColor] = useState('bg-white');
  const listenScrollEvent = () => {
    window.scrollY <= 10 ? setnavColor('transparent') : setnavColor('bg-white');
  };
  useEffect(() => {
    window.scrollY == 0 ? setnavColor('transparent') : setnavColor('bg-white');
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    // <div
    //   className={`w-full    py-3 fixed left-0 top-0  z-50 flex justify-center items-center transition-all duration-500 ease-in-out ${navColor}`}
    // >
      <div className="border-b w-full">
          <div className="flex h-16 items-center px-4">
          <a href="/" className="flex justify-start items-start ">
          <Image
            src="/main_logo.png"
            alt="clever-core"
            width={300}
            height={100}
            className="max-w-full h-auto min-w-[200px] max-height-[50px] max-width-[250px]"
          />
        </a>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
            <ModeToggle></ModeToggle>
            <TeamSwitcher />

              <Search />
              <UserNav />
            </div>
          </div>
        </div>
 
  );
}
