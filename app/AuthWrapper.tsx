'use client'

import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/Store/userStore'
import { getUserCustomClaims, subscribeToAuthChanges } from '@/Database/auth'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

interface WrapperProps {
  children: React.ReactNode
}
export default function AuthWrapper(props: WrapperProps) {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    const excludedRoutes = ['/forgotPassword', '/signin', '/signup', '/']

    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        setUser({ ...user, displayName: user.displayName || '' })
      } else {
        setUser(null)
        if (!excludedRoutes.includes(pathname)) {
          router.push('/signin')
        }
      }
      // Set loading to false once authentication state is determined
      setLoading(false)
    })

    // Unsubscribe from the authentication state changes when the component is unmounted
    return unsubscribe
  }, [pathname, router, setUser])
  if (loading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <Image
          className="relative z-20 w-[22%] pulse1-animation"
          src="/main_logo.png"
          alt="logo"
          width={2353}
          height={384}
        />
      </div>
    )
  }
  return props.children
}
