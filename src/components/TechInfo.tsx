import { TECH_INFO } from '@/lib/tech-info';
import { TabsContent } from './ui/tabs';

const TechInfo = ({ value }: { value: string }) => {
  const info = TECH_INFO[value];

  return (
    <TabsContent value={value} className='flex flex-col gap-y-2 text-center'>
      <h2 className='font-bellefair text-base uppercase text-white/50'>
        The Terminology...
      </h2>
      <h1 className='font-bellefair text-[24px] uppercase'>{info.title}</h1>
      <p className='font-barlow text-[15px] text-light-blue'>
        {info.description}
      </p>
    </TabsContent>
  );
};

export default TechInfo;
