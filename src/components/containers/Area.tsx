import Card from '@/components/cards/Card';
import { area } from '@/mocks';

const Area = () => {
   return (
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
            {area.map(({ id, logo, name }) => {
               return <Card key={id} name={name} logo={logo} />;
            })}
         </div>
      </div>
   );
};

export default Area;
