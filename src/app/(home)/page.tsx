import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className='flex flex-col p-6 text-center text-white md:px-10 md:py-32 lg:h-full lg:flex-row lg:items-center lg:gap-8 lg:px-[165px] lg:text-left'>
      <div className='flex flex-col md:px-22 lg:flex-1 lg:justify-start lg:px-0'>
        <p className='font-barlow-condensed uppercase tracking-widest text-light md:text-lg'>
          So, you want to travel to
        </p>
        <h1 className='font-bellefair text-[80px] uppercase md:text-4xl'>
          Space
        </h1>
        <p className='px-2 text-[15px] leading-7 text-light lg:px-0 lg:pr-22'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className='flex w-full items-center justify-center py-[7.5rem] md:px-22 md:py-16 lg:flex-1 lg:justify-end lg:px-0 lg:py-8'>
        <Button className='h-36 w-36 rounded-full bg-white font-bellefair text-[18px] uppercase text-dark ring-[88px] ring-white/10 hover:bg-white focus:bg-white active:bg-white md:h-[272px] md:w-[272px] md:text-xl md:ring-0 md:hover:ring-[88px] md:focus:ring-[88px] md:active:ring-[88px]'>
          Explore
        </Button>
      </div>
    </section>
  );
}
