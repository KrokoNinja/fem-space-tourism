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
  title: 'Crew',
  description: 'Meet the crew',
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
        className={`bg-crew-mobile bg-cover bg-no-repeat font-barlow md:bg-crew-tablet lg:h-screen lg:bg-crew-desktop`}
      >
        <Navbar />
        <main className='h-full overflow-hidden pt-22 lg:pt-36'>
          {children}
        </main>
      </body>
    </html>
  );
}
