import Card from '@/components/cards/Card';
import { languages } from '@/mocks';

const Language = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
         {languages.map(({ id, logo, name, url }) => {
            return <Card key={id} name={name} logo={logo} url={url} />;
         })}
      </div>
   );
};

export default Language;
