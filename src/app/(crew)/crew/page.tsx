'use client';

import CrewMemberImage from '@/components/CrewMemberImage';
import CrewMemberInfo from '@/components/CrewMemberInfo';
import Heading from '@/components/Heading';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const Crew = () => {
  const [active, setActive] = useState<string>('douglas-hurley');

  return (
    <section className='h-full p-6 text-white md:p-10 md:text-md lg:flex lg:flex-col lg:px-40 lg:py-12'>
      <Heading number='02' text='Meet your crew' />
      <Tabs
        defaultValue='douglas-hurley'
        value={active}
        className='h-full items-center lg:flex lg:gap-x-8'
      >
        <div className='mb-8'>
          <div className='mt-16 md:px-22 lg:px-0'>
            <CrewMemberInfo member={'douglas-hurley'} />
            <CrewMemberInfo member={'mark-shuttleworth'} />
            <CrewMemberInfo member={'victor-glover'} />
            <CrewMemberInfo member={'anousheh-ansari'} />
          </div>
          <TabsList className='flex gap-4 lg:justify-start'>
            <TabsTrigger
              value='douglas-hurley'
              className={`${active == 'douglas-hurley' ? 'bg-white' : 'bg-white/50'} h-2.5 w-2.5 rounded-full hover:bg-white`}
              onClick={() => setActive('douglas-hurley')}
            ></TabsTrigger>
            <TabsTrigger
              value='mark-shuttleworth'
              className={`${active == 'mark-shuttleworth' ? 'bg-white' : 'bg-white/50'} h-2.5 w-2.5 rounded-full hover:bg-white`}
              onClick={() => setActive('mark-shuttleworth')}
            ></TabsTrigger>
            <TabsTrigger
              value='victor-glover'
              className={`${active == 'victor-glover' ? 'bg-white' : 'bg-white/50'} h-2.5 w-2.5 rounded-full hover:bg-white`}
              onClick={() => setActive('victor-glover')}
            ></TabsTrigger>
            <TabsTrigger
              value='anousheh-ansari'
              className={`${active == 'anousheh-ansari' ? 'bg-white' : 'bg-white/50'} h-2.5 w-2.5 rounded-full hover:bg-white`}
              onClick={() => setActive('anousheh-ansari')}
            ></TabsTrigger>
          </TabsList>
        </div>
        <CrewMemberImage member='douglas-hurley' />
        <CrewMemberImage member='mark-shuttleworth' />
        <CrewMemberImage member='victor-glover' />
        <CrewMemberImage member='anousheh-ansari' />
      </Tabs>
    </section>
  );
};

export default Crew;
