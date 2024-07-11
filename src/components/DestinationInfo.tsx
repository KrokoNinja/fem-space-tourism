import { DESTINATION_INFO } from '@/lib/destination-info';
import { TabsContent } from './ui/tabs';

const DestinationInfo = ({ destination }: { destination: string }) => {
  const destinationInformation = DESTINATION_INFO[destination];

  return (
    <TabsContent value={destination}>
      <div className='mt-6 flex flex-col justify-center text-center'>
        <h2 className='font-bellefair text-2xl uppercase'>
          {destinationInformation.name}
        </h2>
        <p className='text-light-blue mb-4'>
          {destinationInformation.description}
        </p>
        <span
          aria-hidden='true'
          className='mb-4 h-px w-full bg-white/25'
        ></span>
        <div className='flex flex-col uppercase'>
          <div className='mb-6 flex flex-col gap-3'>
            <h3 className='text-light-blue font-barlow-condensed'>
              Avg. Distance
            </h3>
            <p className='font-bellefair text-lg'>
              {destinationInformation.distance}
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-light-blue font-barlow-condensed'>
              Est. Travel Time
            </h3>
            <p className='font-bellefair text-lg'>
              {destinationInformation.travel_time}
            </p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default DestinationInfo;
