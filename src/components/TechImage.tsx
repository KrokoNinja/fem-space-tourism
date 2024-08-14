import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { TabsContent } from './ui/tabs';

const TechImage = ({ value }: { value: string }) => {
  return (
    <TabsContent
      value={value}
      className='-ml-6 w-screen overflow-x-hidden overflow-y-hidden md:-ml-10 lg:order-3 lg:ml-0 lg:w-full'
    >
      <div className='h-full w-screen lg:hidden'>
        <AspectRatio ratio={768 / 310}>
          <Image
            src={`/technology/image-${value}-landscape.jpg`}
            width={768}
            height={310}
            alt={value}
            className='mx-auto lg:mx-0'
          />
        </AspectRatio>
      </div>
      <div className='hidden w-full max-w-[515px] lg:block'>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={`/technology/image-${value}-portrait.jpg`}
            width={515}
            height={515}
            alt={value}
          />
        </AspectRatio>
      </div>
    </TabsContent>
  );
};

export default TechImage;
