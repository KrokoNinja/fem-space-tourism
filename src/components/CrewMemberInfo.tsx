import { CREW_MEMBER_INFO } from '@/lib/crew-member-info';
import { TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const CrewMemberInfo = ({ member }: { member: string }) => {
  const info = CREW_MEMBER_INFO[member];

  return (
    <TabsContent
      value={member}
      className='flex flex-col text-center lg:text-left'
    >
      <p className='font-bellefair text-base uppercase text-white/50 md:text-[24px] lg:text-xl'>
        {info.role}
      </p>
      <p className='mb-6 font-bellefair text-[24px] uppercase md:text-[40px] lg:text-2xl'>
        {info.name}
      </p>
      <p className='mb-12 text-sm text-light-blue'>{info.bio}</p>
    </TabsContent>
  );
};

export default CrewMemberInfo;
