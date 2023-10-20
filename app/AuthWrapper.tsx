'use client'

import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/Controller/userStore'
import { subscribeToAuthChanges } from '@/Database/auth'

interface WrapperProps {
  children: React.ReactNode
}
export default function AuthWrapper(props: WrapperProps) {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        // User is signed in
        console.log("should set user")
        setUser(user)
      } else {
        // User is signed out
        console.log("should set user null")
        setUser(null)
      }
      // Set loading to false once authentication state is determined
      setLoading(false)
    })

    // Unsubscribe from the authentication state changes when the component is unmounted
    return unsubscribe
  }, [])
  return  props.children
}
