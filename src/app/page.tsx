import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="flex flex-col p-6 text-white text-center h-full">
      <p className="font-barlow-condensed tracking-widest uppercase text-light">
        So, you want to travel to
      </p>
      <h1 className="font-bellefair text-[80px] uppercase">Space</h1>
      <p className="text-light leading-7 text-[15px]">
        Let´s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we´ll give you a truly out of this world
        experience!
      </p>
      <div className="flex justify-center items-center w-full py-[7.5rem]">
        <Button className="h-36 w-36 rounded-full bg-white text-dark font-bellefair uppercase text-[18px]">
          Explore
        </Button>
      </div>
    </section>
  );
}
