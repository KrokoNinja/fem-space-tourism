import DestinationInfo from '@/components/DestinationInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <section className='p-6 text-white'>
      <div>
        <span>01</span>
        Pick your destination
      </div>
      <div>
        <Tabs defaultValue='moon'>
          <TabsContent value='moon'>
            <div className='px-22 py-7'>
              <img src='/destination/image-moon.webp' alt='Moon Image' />
            </div>
          </TabsContent>
          <TabsContent value='mars'>
            <div className='px-22 py-7'>
              <img src='/destination/image-mars.webp' alt='Mars Image' />
            </div>
          </TabsContent>
          <TabsContent value='europa'>
            <div className='px-22 py-7'>
              <img src='/destination/image-europa.webp' alt='Europa Image' />
            </div>
          </TabsContent>
          <TabsContent value='titan'>
            <div className='px-22 py-7'>
              <img src='/destination/image-titan.webp' alt='Titan Image' />
            </div>
          </TabsContent>
          <TabsList>
            <TabsTrigger value='moon'>Moon</TabsTrigger>
            <TabsTrigger value='mars'>Mars</TabsTrigger>
            <TabsTrigger value='europa'>Europa</TabsTrigger>
            <TabsTrigger value='titan'>Titan</TabsTrigger>
          </TabsList>
          <DestinationInfo destination='moon' />
          <DestinationInfo destination='mars' />
          <DestinationInfo destination='europa' />
          <DestinationInfo destination='titan' />
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
