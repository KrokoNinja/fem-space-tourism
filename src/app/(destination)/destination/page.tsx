'use client';
import DestinationImage from '@/components/DestinationImage';
import DestinationInfo from '@/components/DestinationInfo';
import Heading from '@/components/Heading';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Page = () => {
  const [active, setActive] = useState('moon');

  return (
    <section className='p-6 text-white md:p-10 md:text-md lg:px-40 lg:py-0'>
      <Heading number='01' text='Choose your destination' />
      <div>
        <Tabs defaultValue='moon' className='lg:flex'>
          <div className='lg:flex lg:w-full lg:flex-1'>
            <DestinationImage destination='moon' />
            <DestinationImage destination='mars' />
            <DestinationImage destination='europa' />
            <DestinationImage destination='titan' />
          </div>
          <div className='lg:flex lg:flex-1 lg:flex-col lg:gap-y-10 lg:px-12 lg:py-32'>
            <TabsList className='gap-8 lg:justify-start'>
              <TabsTrigger
                value='moon'
                className={`border-b-[3px] border-transparent pb-4 ${active == 'moon' ? 'border-white' : 'hover:border-white/50'}`}
                onClick={() => setActive('moon')}
              >
                Moon
              </TabsTrigger>
              <TabsTrigger
                value='mars'
                className={`border-b-[3px] border-transparent pb-4 ${active == 'mars' ? 'border-white' : 'hover:border-white/50'}`}
                onClick={() => setActive('mars')}
              >
                Mars
              </TabsTrigger>
              <TabsTrigger
                value='europa'
                className={`border-b-[3px] border-transparent pb-4 ${active == 'europa' ? 'border-white' : 'hover:border-white/50'}`}
                onClick={() => setActive('europa')}
              >
                Europa
              </TabsTrigger>
              <TabsTrigger
                value='titan'
                className={`border-b-[3px] border-transparent pb-4 ${active == 'titan' ? 'border-white' : 'hover:border-white/50'}`}
                onClick={() => setActive('titan')}
              >
                Titan
              </TabsTrigger>
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
