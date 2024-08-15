'use client';
import { useState } from 'react';
import NavList from './NavList';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Image from 'next/image';

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='m-2 bg-transparent md:hidden'>
          <Image
            src='/shared/icon-hamburger.svg'
            width={24}
            height={24}
            alt='Hamburger icon'
          />
        </Button>
      </SheetTrigger>
      <SheetContent className='custom-filter border-none bg-dark/15 text-white backdrop-blur-3xl'>
        <div className='ml-2 mt-12 font-barlow-condensed uppercase'>
          <NavList setOpen={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
