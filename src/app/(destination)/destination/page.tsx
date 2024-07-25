import DestinationImage from '@/components/DestinationImage';
import DestinationInfo from '@/components/DestinationInfo';
import Heading from '@/components/Heading';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <section className='p-6 text-white md:p-10 md:text-md lg:px-40 lg:py-12'>
      <Heading number='01' text='Choose your destination' />
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
