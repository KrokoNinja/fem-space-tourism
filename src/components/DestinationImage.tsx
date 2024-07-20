import { TabsContent } from './ui/tabs';

const DestinationImage = ({ destination }: { destination: string }) => {
  return (
    <TabsContent value={destination}>
      <div className='flex items-center justify-center px-22 py-7 md:mb-8'>
        <img
          className='md:h-[300px] md:w-[300px]'
          src={`/destination/image-${destination}.webp`}
          alt={`${destination} image`}
        />
      </div>
    </TabsContent>
  );
};

export default DestinationImage;
