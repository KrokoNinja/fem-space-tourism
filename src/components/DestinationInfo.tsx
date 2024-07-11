import { DESTINATION_INFO } from '@/lib/destination-info';
import { TabsContent } from './ui/tabs';

const DestinationInfo = ({ destination }: { destination: string }) => {
  const destinationInformation = DESTINATION_INFO[destination];

  return (
    <TabsContent value={destination}>
      <div>
        <h2>{destinationInformation.name}</h2>
        <p>{destinationInformation.description}</p>
        <span aria-hidden='true'></span>
        <div>
          <div>
            <h3>Avg. Distance</h3>
            <p>{destinationInformation.distance}</p>
          </div>
          <div>
            <h3>Est. Travel Time</h3>
            <p>{destinationInformation.travel_time}</p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default DestinationInfo;
