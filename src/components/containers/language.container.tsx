'use client';
import { useRouter } from 'next/navigation';
import CardCommon from '@/components/common/card.common';
import { languages } from '@/mocks';

const LanguageContainer = () => {
   const router = useRouter();
   const handleOnRedirectPage = (id: string[]) => router.push(`area/${id[0]}`);

   return (
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
            {languages.map(({ id, logo, name, url }) => {
               return (
                  <CardCommon
                     key={id}
                     name={name}
                     logo={logo}
                     website={url}
                     button='Areas'
                     onRedirect={() => handleOnRedirectPage([id])}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default LanguageContainer;
