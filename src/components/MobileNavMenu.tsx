'use client';
import { useState } from 'react';
import NavList from './NavList';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='m-6 bg-transparent md:hidden'>
          <img src='/shared/icon-hamburger.svg' alt='Hamburger icon' />
        </Button>
      </SheetTrigger>
      <SheetContent className='border-none bg-dark/15 text-white backdrop-blur-[80px]'>
        <div className='pl-2 pt-12 font-barlow-condensed uppercase'>
          <NavList setOpen={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
