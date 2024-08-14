import { TECH_INFO } from '@/lib/tech-info';
import { TabsContent } from './ui/tabs';

const TechInfo = ({ value }: { value: string }) => {
  const info = TECH_INFO[value];

  return (
    <TabsContent
      value={value}
      className='text-center md:px-28 lg:px-0 lg:pr-8 lg:text-left'
    >
      <h2 className='pb-8 font-bellefair text-base uppercase text-white/50 md:text-[24px] lg:text-xl'>
        The Terminology...
      </h2>
      <h1 className='pb-8 font-bellefair text-[24px] uppercase md:text-[40px] lg:text-2xl'>
        {info.title}
      </h1>
      <p className='font-barlow text-[15px] text-light-blue'>
        {info.description}
      </p>
    </TabsContent>
  );
};

export default TechInfo;
