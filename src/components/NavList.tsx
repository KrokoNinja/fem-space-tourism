'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function NavList({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [activePage, setActivePage] = useState<
    'home' | 'destination' | 'crew' | 'tech'
  >('home');

  const path = usePathname();

  useEffect(() => {
    if (path.includes('destination')) {
      setActivePage('destination');
    } else if (path.includes('crew')) {
      setActivePage('crew');
    } else if (path.includes('technology')) {
      setActivePage('tech');
    } else {
      setActivePage('home');
    }
  }, [path]);

  return (
    <ul className="flex flex-col gap-8">
      <li
        className={cn('flex items-center gap-x-3', {
          'border-r-[3px]': activePage === 'home',
        })}>
        <Link href="/" onClick={() => setOpen(false)}>
          <span className="font-bold tracking-[2.7px]">00</span>
          Home
        </Link>
      </li>
      <li
        className={cn('flex items-center gap-x-3', {
          'border-r-[3px]': activePage === 'destination',
        })}>
        <Link href="/destination" onClick={() => setOpen(false)}>
          <span className="font-bold tracking-[2.7px]">01</span>
          Destination
        </Link>
      </li>
      <li
        className={cn('flex items-center gap-x-3', {
          'border-r-[3px]': activePage === 'crew',
        })}>
        <Link href="/crew" onClick={() => setOpen(false)}>
          <span className="font-bold tracking-[2.7px]">02</span>Crew
        </Link>
      </li>
      <li
        className={cn('flex items-center gap-x-3', {
          'border-r-[3px]': activePage === 'tech',
        })}>
        <Link href="/technology" onClick={() => setOpen(false)}>
          <span className="font-bold tracking-[2.7px]">03</span>Technology
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
