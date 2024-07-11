import { TabsContent } from './ui/tabs';

const DestinationImage = ({ destination }: { destination: string }) => {
  return (
    <TabsContent value={destination}>
      <div className='px-22 py-7'>
        <img
          src={`/destination/image-${destination}.webp`}
          alt={`${destination} image`}
        />
      </div>
    </TabsContent>
  );
};

export default DestinationImage;
