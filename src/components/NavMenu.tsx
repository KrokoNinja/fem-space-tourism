'use client';
import { useState } from 'react';
import NavList from './NavList';

const NavMenu = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className='primary-navigation hidden h-full justify-end bg-white/5 px-10 pt-9 font-barlow-condensed uppercase backdrop-blur-3xl md:flex'>
      <NavList setOpen={setOpen} />
    </nav>
  );
};

export default NavMenu;
