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
    <section className='p-6 text-white'>
      <Heading number='03' text='Space launch 101' />
      <Tabs defaultValue='1' className='mt-6 pt-16'>
        <TechImage value='launch-vehicle' />
        <TechImage value='spaceport' />
        <TechImage value='space-capsule' />
        <TabsList className='mb-10 mt-8 flex w-full justify-center gap-x-4'>
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
