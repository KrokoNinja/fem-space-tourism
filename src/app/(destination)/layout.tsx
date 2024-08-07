import type { Metadata } from 'next';
import { Barlow, Bellefair, Barlow_Condensed } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';

const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-barlow-condensed',
});

const bellefair = Bellefair({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-bellefair',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`}
    >
      <body
        className={`h-[100vh] bg-destination-mobile bg-cover bg-no-repeat font-barlow md:bg-destination-tablet lg:bg-destination-desktop`}
      >
        <Navbar />
        <main className='h-full pt-22 lg:mt-10'>{children}</main>
      </body>
    </html>
  );
}
