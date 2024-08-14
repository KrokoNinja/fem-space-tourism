import { TECH_INFO } from '@/lib/tech-info';
import { TabsContent } from './ui/tabs';

const TechInfo = ({ value }: { value: string }) => {
  const info = TECH_INFO[value];

  return (
    <TabsContent
      value={value}
      className='flex flex-col gap-y-2 text-center md:px-28'
    >
      <h2 className='font-bellefair text-base uppercase text-white/50 md:text-[24px]'>
        The Terminology...
      </h2>
      <h1 className='font-bellefair text-[24px] uppercase md:text-[40px]'>
        {info.title}
      </h1>
      <p className='font-barlow text-[15px] text-light-blue'>
        {info.description}
      </p>
    </TabsContent>
  );
};

export default TechInfo;
