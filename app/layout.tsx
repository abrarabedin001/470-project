import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopMenu from '../components/TopMenu';
import Foot from '../components/Foot';
import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang="en" className="bg-white">
      {/* something to commit */}
      <ThemeProvider>
      <body className="  gradient-container  w-full flex flex-col justify-center items-center ">
        {/* <TopMenu /> */}
        {children}

        <Foot />
      </body>
      </ThemeProvider>
      
    </html>
  );
}