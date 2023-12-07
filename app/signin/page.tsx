'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
// import { toast } from 'react-toastify'
import { useUserStore } from '@/Store/userStore'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  signIn,
  signUpWithGoogle,
  resetPassword,
  checkEmailInDatabase,
} from '@/Database/auth'
import { ToastContainer, toast } from 'react-toastify'
import { createUser } from '@/Database/firestore/firebaseDb'
function Page(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetStatus, setResetStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [resetMessage, setResetMessage] = useState('')
  const router = useRouter()
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    // Attempt to sign in with provided email and password
    const { result, error } = await signIn(email, password)

    if (error) {
      if (error.code === 'auth/invalid-login-credentials') {
        setResetStatus('error')
        setResetMessage('Email is not registered or the password is incorrect.')
      } else {
        // result?.currentUser?.displayName
      }
      console.log(error)
      setTimeout(() => {
        setResetStatus('idle')
        setResetMessage('')
      }, 3000)
      return
    } else {
      // console.log('result', result)
      // router.push('/')
    }
    if (result?.user) {
      router.push('/')
    }
    //
  }

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    const { user, error } = await signUpWithGoogle()

    if (error) {
      // Display and log any sign-in errors
      console.log(error)
      return
    } else {
      createUser(user?.uid!, user?.displayName, user?.email!, '')
    }
    if (user) {
      console.log('user ase@')
    }

    console.log(user)

    router.push('/')
  }
  // Function to handle password reset
  const handleForgotPassword = async () => {
    if (!email) {
      setResetStatus('error')
      setResetMessage('Please enter your email first.')
      setTimeout(() => {
        setResetStatus('idle')
        setResetMessage('')
      }, 3000)
      return
    }
    try {
      setResetStatus('loading')
      const isEmailRegistered = await checkEmailInDatabase(email)
      console.log(isEmailRegistered)

      if (isEmailRegistered.result == 0) {
        setResetStatus('error')
        setResetMessage('Email not registered in the database.')

        // Automatically clear the error message after 3 seconds
        setTimeout(() => {
          setResetStatus('idle')
          setResetMessage('')
        }, 3000)

        return
      }

      // If email is registered, proceed with password reset
      const { result, error } = await resetPassword(email)

      if (error) {
        setResetStatus('error')
        setResetMessage('Failed to send, enter a valid Email Address.')
        console.error(error)
      } else {
        setResetStatus('success')
        setResetMessage('Check your Email for further instruction.')
        console.log(result)
      }
      setTimeout(() => {
        setResetStatus('idle')
        setResetMessage('')
      }, 3000)
    } catch (error) {
      setResetStatus('error')
      setResetMessage('Failed to send password reset email.')
      console.error(error)
    }
  }

  return (
    <div className="flex justify-center items-center container h-screen">
      <Card className="w-1/3">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Good to see you again
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button variant="outline" onClick={handleGoogleSignIn}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              try {
                signIn('guest@gmail.com', '123456789')
                router.push('/')
              } catch {
                console.log('error')
              }
            }}
          >
            <Icons.sun className="mr-2 h-4 w-4" />
            Use Guest Account
          </Button>
          <form onSubmit={handleForm} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or Continue With
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
              />
            </div>
            <Button disabled={!password} className="w-full">
              Sign In
            </Button>
          </form>
          <div className="text-center">
            <a
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 cursor-pointer hover:text-blue-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {resetStatus === 'success' && (
            <div className="text-green-500">{resetMessage}</div>
          )}
          {resetStatus === 'error' && (
            <div className="text-red-500">{resetMessage}</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
