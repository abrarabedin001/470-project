'use client';

import React, { useEffect, useState } from 'react';
import PrimaryButton from './ui/PrimaryButton';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTop } from './ui/NavigationMenuTop';

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
    <div
      className={`w-full    py-3 fixed left-0 top-0  z-50 flex justify-center items-center transition-all duration-500 ease-in-out ${navColor}`}
    >
      <div className="w-full container max-w-[1440px] lg:px-5 hidden lg:grid grid-cols-2 lg:grid-cols-3 justify-center ">
        <a href="/" className="flex justify-start items-start ">
          <Image
            src="/main_logo.png"
            alt="clever-core"
            width={300}
            height={100}
            className="max-w-full h-auto min-w-[200px] max-height-[50px] max-width-[250px]"
          />
        </a>

        <div className="w-[501px] h-16 px-6 text-gray-700 justify-start items-center gap-6 hidden lg:inline-flex mr-16  ">
          <div className=" justify-start items-center gap-2.5 flex">
            <NavigationMenuTop />
          </div>
        </div>

        <div className="hidden w-full lg:flex justify-end h-full items-center">
          <PrimaryButton className="p-5 w-[180]">Login</PrimaryButton>
        </div>
        <HamburgerMenu />
      </div>
      <div className="w-full container pr-4 pl-4 flex items-center justify-between lg:hidden">
        <a href="/" className="flex justify-start items-center ">
          <Image
            src="/main_logo.png"
            alt="clever-core"
            width={300}
            height={100}
            className="max-w-full h-auto min-w-[200px] max-height-[50px]  max-width-[250px]"
          />
        </a>

        <HamburgerMenu />
      </div>
    </div>
  );
}
