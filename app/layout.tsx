import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopMenu from '../components/TopMenu';
import Foot from '../components/Foot';
import { ThemeProvider } from '@/components/theme-provider';
import TeamSwitcher from './dashboard/components/team-switcher';
import { UserNav } from './dashboard/components/user-nav';
import { MainNav } from './dashboard/components/main-nav';
import { Search } from './dashboard/components/search';
import AuthWrapper from './AuthWrapper';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CleverCore',
  description: 'Automate, Analyze, and Amplify your Communication Processes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     
      <ThemeProvider 
      attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
        <AuthWrapper>
          <body className="  gradient-container  w-full flex flex-col justify-center items-center ">
            <TopMenu />
          
          {children}

            <Foot />
          </body>
        </AuthWrapper>
      
      </ThemeProvider>
      
    </html>
  );
}