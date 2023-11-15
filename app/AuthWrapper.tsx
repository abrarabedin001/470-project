'use client'
import firebase from 'firebase/app'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/Store/userStore'
import { getUserCustomClaims, subscribeToAuthChanges } from '@/Database/auth'

interface WrapperProps {
  children: React.ReactNode
}
export default function AuthWrapper(props: WrapperProps) {
  const setUser = useUserStore((state) => state.setUser)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Subscribe to the authentication state changes
    let func = async () => {
      let abc = await getUserCustomClaims()
      console.log('token', abc)
    }

    // console.log('abc', abc)
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        // User is signed in
        console.log('should set user')
        setUser(user)
        func()
      } else {
        // User is signed out
        console.log('should set user null')
        setUser(null)
      }
      // Set loading to false once authentication state is determined
      setLoading(false)
    })
    // firebase
    //   .auth()
    //   .currentUser.getIdToken(/* forceRefresh */ true)
    //   .then(function (idToken) {
    //     // Send token to your backend via HTTPS
    //     // ...
    //   })
    //   .catch(function (error) {
    //     // Handle error
    //   })
    console.log('Unsubscribe', unsubscribe)

    // Unsubscribe from the authentication state changes when the component is unmounted
    return unsubscribe
  }, [])
  return props.children
}
