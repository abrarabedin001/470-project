'use client'

import React, { useEffect, useState } from 'react'
import PrimaryButton from './ui/PrimaryButton'
import Link from 'next/link'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'
// import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuTop } from './ui/NavigationMenuTop'
import { MainNav } from '@/app/dashboard/components/main-nav'
import TeamSwitcher from '@/app/dashboard/components/team-switcher'
import { Search } from '@/app/dashboard/components/search'
import { UserNav } from '@/app/dashboard/components/user-nav'
import { ModeToggle } from './ModeToggle'
import { useUserStore } from '@/Store/userStore'
// import { useUserStore } from '@/app/stores/userStore'

export default function TopMenu() {
  let user = useUserStore((state) => state.user)
  const [navColor, setnavColor] = useState('bg-white')
  const listenScrollEvent = () => {
    window.scrollY <= 10 ? setnavColor('transparent') : setnavColor('bg-white')
  }
  useEffect(() => {
    window.scrollY == 0 ? setnavColor('transparent') : setnavColor('bg-white')
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])
  return (
    <div className="border-b w-full">
      <div className="flex h-16 items-center px-4">
        <a href="/" className="flex justify-start items-start ">
          <Image
            src="/main_logo.png"
            alt="bug_smasher"
            width={50}
            height={50}
            className=" h-auto w-[90px] "
          />
        </a>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle></ModeToggle>
          {user && <TeamSwitcher />}

          <UserNav />
        </div>
      </div>
    </div>
  )
}
