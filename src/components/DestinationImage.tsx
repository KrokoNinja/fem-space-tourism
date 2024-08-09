import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { TabsContent } from './ui/tabs';

const DestinationImage = ({ destination }: { destination: string }) => {
  return (
    <TabsContent value={destination} className='lg:w-full'>
      <div className='mb-8 flex items-center justify-center px-22 py-7 lg:px-8 lg:py-32'>
        <div className='w-[90%] max-w-[175px] md:max-w-[300px] lg:max-w-[480px]'>
          <AspectRatio ratio={1 / 1}>
            <Image
              width={445}
              height={445}
              src={`/destination/image-${destination}.webp`}
              alt={`${destination} image`}
            />
          </AspectRatio>
        </div>
      </div>
    </TabsContent>
  );
};

export default DestinationImage;
