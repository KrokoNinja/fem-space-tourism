import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="flex flex-col p-6 md:px-10 md:py-32 text-white text-center h-full">
      <div className="md:px-22">
        <p className="font-barlow-condensed tracking-widest uppercase text-light md:text-lg">
          So, you want to travel to
        </p>
        <h1 className="font-bellefair text-[80px] uppercase md:text-4xl">
          Space
        </h1>
        <p className="text-light leading-7 text-[15px] px-2">
          Let´s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we´ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center items-center w-full py-[7.5rem] md:py-16 md:px-22">
        <Button className="h-36 md:h-[272px] w-36 md:w-[272px] md:text-xl rounded-full bg-white text-dark font-bellefair uppercase text-[18px] ring-[88px] ring-white/10 md:ring-0 md:hover:ring-[88px] md:active:ring-[88px] md:focus:ring-[88px] active:bg-white focus:bg-white hover:bg-white">
          Explore
        </Button>
      </div>
    </section>
  );
}
