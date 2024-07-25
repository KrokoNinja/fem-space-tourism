import DestinationImage from '@/components/DestinationImage';
import DestinationInfo from '@/components/DestinationInfo';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <section className='p-6 text-white md:p-10 md:text-md lg:px-40 lg:py-12'>
      <div className='flex justify-center gap-6 font-barlow-condensed uppercase tracking-[2px] md:mb-6 md:justify-start lg:text-lg'>
        <span className='text-white/25'>01</span>
        Pick your destination
      </div>
      <div>
        <Tabs defaultValue='moon' className='lg:flex'>
          <div className='lg:flex lg:flex-1'>
            <DestinationImage destination='moon' />
            <DestinationImage destination='mars' />
            <DestinationImage destination='europa' />
            <DestinationImage destination='titan' />
          </div>
          <div className='lg:flex lg:flex-1 lg:flex-col lg:gap-y-10 lg:px-12 lg:py-32'>
            <TabsList>
              <TabsTrigger value='moon'>Moon</TabsTrigger>
              <TabsTrigger value='mars'>Mars</TabsTrigger>
              <TabsTrigger value='europa'>Europa</TabsTrigger>
              <TabsTrigger value='titan'>Titan</TabsTrigger>
            </TabsList>
            <DestinationInfo destination='moon' />
            <DestinationInfo destination='mars' />
            <DestinationInfo destination='europa' />
            <DestinationInfo destination='titan' />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
