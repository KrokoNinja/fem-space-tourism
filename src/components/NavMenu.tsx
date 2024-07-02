'use client';
import { useState } from 'react';
import NavList from './NavList';

const NavMenu = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="hidden md:flex justify-end bg-white/5 w-full h-full pt-9 px-10">
      <NavList setOpen={setOpen} />
    </nav>
  );
};

export default NavMenu;
