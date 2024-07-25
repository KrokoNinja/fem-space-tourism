import { TabsContent } from './ui/tabs';

const DestinationImage = ({ destination }: { destination: string }) => {
  return (
    <TabsContent value={destination}>
      <div className='flex items-center justify-center px-22 py-7 md:mb-8 lg:px-8 lg:py-32'>
        <img
          className='md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px]'
          src={`/destination/image-${destination}.webp`}
          alt={`${destination} image`}
        />
      </div>
    </TabsContent>
  );
};

export default DestinationImage;
