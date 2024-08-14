import { TabsTrigger } from './ui/tabs';

const TechTabsTrigger = ({ value }: { value: string }) => {
  return (
    <TabsTrigger
      value={value}
      className='border-px h-10 w-10 rounded-full border border-white/25 font-bellefair text-sm text-white data-[state=active]:bg-white data-[state=active]:text-dark md:h-14 md:w-14 md:text-[24px]'
    >
      {value === 'launch-vehicle' ? '1' : value === 'spaceport' ? '2' : '3'}
    </TabsTrigger>
  );
};

export default TechTabsTrigger;
