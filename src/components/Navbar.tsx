import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <header className='fixed top-0 flex w-full items-center justify-between text-white md:gap-10 lg:mt-10 lg:gap-0'>
      <Logo />
      <span
        aria-hidden='true'
        className='relative z-10 -mr-8 ml-14 hidden h-px w-full bg-white/25 lg:flex'
      ></span>
      <NavMenu />
      <MobileNavMenu />
    </header>
  );
};

export default Navbar;
