import { DESTINATION_INFO } from '@/lib/destination-info';
import { TabsContent } from './ui/tabs';

const DestinationInfo = ({ destination }: { destination: string }) => {
  const destinationInformation = DESTINATION_INFO[destination];

  return (
    <TabsContent value={destination}>
      <div className='mt-6 flex flex-col justify-center text-center md:mt-0 md:px-22 md:py-3'>
        <h2 className='font-bellefair text-2xl uppercase md:text-[80px]'>
          {destinationInformation.name}
        </h2>
        <p className='mb-4 text-sm text-light-blue md:mb-6'>
          {destinationInformation.description}
        </p>
        <span
          aria-hidden='true'
          className='mb-4 h-px w-full bg-white/25 md:mb-6'
        ></span>
        <div className='flex flex-col uppercase md:flex-row md:justify-around'>
          <div className='mb-6 flex flex-col gap-3'>
            <h3 className='font-barlow-condensed text-xs text-light-blue'>
              Avg. Distance
            </h3>
            <p className='font-bellefair text-lg'>
              {destinationInformation.distance}
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-barlow-condensed text-xs text-light-blue'>
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
