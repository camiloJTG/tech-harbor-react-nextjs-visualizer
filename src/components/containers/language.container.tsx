'use client';

import CardCommon from '@/components/common/card.common';
import { useFetchData } from '@/hooks';

const LanguageContainer = () => {
   const languagesList = useFetchData('Language');
   const { data, loading } = languagesList;

   if (loading) return;

   return (
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
            {data.map(({ id, name, logo_url, page_url }) => {
               return (
                  <CardCommon
                     key={id}
                     name={name}
                     logo={logo_url}
                     website={page_url}
                     button='Areas'
                     //onRedirect={() => handleOnRedirectPage(id)}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default LanguageContainer;
