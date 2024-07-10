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
    <ul className='flex flex-col gap-8 md:flex-row md:gap-12'>
      <li>
        <Link
          href='/'
          onClick={() => setOpen(false)}
          className={cn('nav-item', {
            'active-nav-item': activePage === 'home',
          })}
        >
          <span className='navigation-number'>00</span>
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/destination'
          onClick={() => setOpen(false)}
          className={cn('nav-item', {
            'active-nav-item': activePage === 'destination',
          })}
        >
          <span className='navigation-number'>01</span>
          Destination
        </Link>
      </li>
      <li>
        <Link
          href='/crew'
          onClick={() => setOpen(false)}
          className={cn('nav-item', {
            'active-nav-item': activePage === 'crew',
          })}
        >
          <span className='navigation-number'>02</span>Crew
        </Link>
      </li>
      <li>
        <Link
          href='/technology'
          onClick={() => setOpen(false)}
          className={cn('nav-item', {
            'active-nav-item': activePage === 'tech',
          })}
        >
          <span className='navigation-number'>03</span>Technology
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
