import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full p-6 md:p-0 md:pl-10 md:gap-10 text-white flex justify-between items-center">
      <Logo />
      <NavMenu />
      <MobileNavMenu />
    </header>
  );
};

export default Navbar;
