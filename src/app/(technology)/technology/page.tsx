import Heading from '@/components/Heading';
import TechImage from '@/components/TechImage';
import TechInfo from '@/components/TechInfo';
import TechTabsTrigger from '@/components/TechTabsTrigger';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { TabsList } from '@radix-ui/react-tabs';
import Image from 'next/image';

const Page = () => {
  return (
    <section className='p-6 text-white md:p-10 lg:h-full lg:pb-12 lg:pl-40 lg:pr-0'>
      <Heading number='03' text='Space launch 101' />
      <Tabs
        defaultValue='launch-vehicle'
        className='mt-6 pt-16 lg:mt-0 lg:flex lg:h-full lg:items-center lg:pt-0'
      >
        <TechImage value='launch-vehicle' />
        <TechImage value='spaceport' />
        <TechImage value='space-capsule' />
        <TabsList className='mb-10 mt-8 flex w-full justify-center gap-x-4 lg:w-fit lg:flex-col lg:gap-x-0 lg:gap-y-4 lg:pr-16'>
          <TechTabsTrigger value='launch-vehicle' />
          <TechTabsTrigger value='spaceport' />
          <TechTabsTrigger value='space-capsule' />
        </TabsList>
        <TechInfo value='launch-vehicle' />
        <TechInfo value='spaceport' />
        <TechInfo value='space-capsule' />
      </Tabs>
    </section>
  );
};

export default Page;
