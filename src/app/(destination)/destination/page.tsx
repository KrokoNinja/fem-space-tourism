import DestinationImage from '@/components/DestinationImage';
import DestinationInfo from '@/components/DestinationInfo';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <section className='p-6 text-white'>
      <div className='flex justify-center gap-6 font-barlow-condensed uppercase tracking-[2px]'>
        <span className='text-white/25'>01</span>
        Pick your destination
      </div>
      <div>
        <Tabs defaultValue='moon'>
          <DestinationImage destination='moon' />
          <DestinationImage destination='mars' />
          <DestinationImage destination='europa' />
          <DestinationImage destination='titan' />
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
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
