import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '../components/TopMenu'
import Foot from '../components/Foot'
import { ThemeProvider } from '@/components/theme-provider'
import TeamSwitcher from './dashboard/components/team-switcher'
import { UserNav } from './dashboard/components/user-nav'
import { MainNav } from './dashboard/components/main-nav'
import { Search } from './dashboard/components/search'
import AuthWrapper from './AuthWrapper'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from '@/components/ui/toaster'
export const metadata: Metadata = {
  title: 'TaskFlow',
  description: 'TaskFlow is a bug tracking tool for developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="  gradient-container  w-full flex flex-col justify-center items-center ">
        <AuthWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopMenu />

            {children}

            <Foot />
          </ThemeProvider>
        </AuthWrapper>
      </body>
    </html>
  )
}
