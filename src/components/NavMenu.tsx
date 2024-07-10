'use client';
import { useState } from 'react';
import NavList from './NavList';

const NavMenu = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className='hidden h-full w-full justify-end bg-white/5 px-10 pt-9 font-barlow-condensed uppercase md:flex lg:max-w-[51%]'>
      <NavList setOpen={setOpen} />
    </nav>
  );
};

export default NavMenu;
