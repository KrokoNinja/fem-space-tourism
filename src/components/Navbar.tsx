import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <header className='fixed top-0 flex w-full items-center justify-between p-6 text-white md:gap-10 md:p-0 md:pl-10 lg:gap-0'>
      <div className='relative flex flex-row items-center lg:w-[51%] lg:justify-between'>
        <Logo />
        <span className='absolute -right-10 hidden h-px w-full max-w-[76%] bg-white lg:block'></span>
      </div>
      <NavMenu />
      <MobileNavMenu />
    </header>
  );
};

export default Navbar;
