import Image from 'next/image';
import { TabsContent } from './ui/tabs';
import { AspectRatio } from './ui/aspect-ratio';

const CrewMemberImage = ({ member }: { member: string }) => {
  return (
    <TabsContent value={member} className='w-full'>
      <div className='flex items-end justify-center px-7 lg:px-0 lg:py-7'>
        <div className='w-[90%] max-w-[300px] md:max-w-[400px] lg:w-full lg:max-w-[700px]'>
          <AspectRatio ratio={514 / 700}>
            <Image
              src={`/crew/image-${member}.webp`}
              alt={`${member}-image`}
              width={514}
              height={700}
            />
          </AspectRatio>
        </div>
      </div>
    </TabsContent>
  );
};

export default CrewMemberImage;
