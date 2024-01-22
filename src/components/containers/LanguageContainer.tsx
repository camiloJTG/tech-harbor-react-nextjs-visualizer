import { languages } from '@/mocks/language';
import DisplayCard from '@/components/common/DisplayCard';

const LanguageContainer = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
         {languages.map(({ id, logo, name, url }) => {
            return <DisplayCard key={id} logo={logo} name={name} url={url} />;
         })}
      </div>
   );
};

export default LanguageContainer;
