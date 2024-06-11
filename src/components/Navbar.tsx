import Logo from './Logo';
import MobileNavMenu from './MobileNavMenu';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full p-6 text-white flex justify-between items-center">
      <Logo />
      <NavMenu />
      <MobileNavMenu />
    </header>
  );
};

export default Navbar;
