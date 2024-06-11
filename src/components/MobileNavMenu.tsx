import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent p-0">
          <img src="/shared/icon-hamburger.svg" alt="Hamburger icon" />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-none text-white bg-dark/15 backdrop-blur-[80px]">
        <div className="pl-2 pt-12 uppercase font-barlow-condensed">
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-x-3">
              <span className="font-bold tracking-[2.7px]">00</span>
              Home
            </li>
            <li className="flex items-center gap-x-3">
              <span className="font-bold tracking-[2.7px]">01</span>
              Destination
            </li>
            <li className="flex items-center gap-x-3">
              <span className="font-bold tracking-[2.7px]">02</span>Crew
            </li>
            <li className="flex items-center gap-x-3">
              <span className="font-bold tracking-[2.7px]">03</span>Technology
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
