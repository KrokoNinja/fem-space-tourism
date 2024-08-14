import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { TabsContent } from './ui/tabs';

const TechImage = ({ value }: { value: string }) => {
  return (
    <TabsContent
      value={value}
      className='-ml-6 flex w-screen overflow-x-hidden overflow-y-hidden md:-ml-10'
    >
      <div className='h-full w-screen'>
        <AspectRatio ratio={768 / 310}>
          <Image
            src={`/technology/image-${value}-landscape.jpg`}
            width={768}
            height={310}
            alt={value}
            className='mx-auto'
          />
        </AspectRatio>
      </div>
    </TabsContent>
  );
};

export default TechImage;
