import Heading from '@/components/Heading';
import TechTabsTrigger from '@/components/TechTabsTrigger';
import { Tabs, TabsTrigger } from '@/components/ui/tabs';
import { TabsList } from '@radix-ui/react-tabs';

const Page = () => {
  return (
    <section className='p-6 text-white'>
      <Heading number='03' text='Space launch 101' />
      <Tabs defaultValue='1' className='mt-6'>
        <TabsList className='flex w-full justify-center gap-x-4'>
          <TechTabsTrigger value='1' />
          <TechTabsTrigger value='2' />
          <TechTabsTrigger value='3' />
        </TabsList>
      </Tabs>
    </section>
  );
};

export default Page;
