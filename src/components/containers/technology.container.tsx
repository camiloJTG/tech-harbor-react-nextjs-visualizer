'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import CardCommon from '@/components/common/card.common';
import { findTechnologyByLanguage } from '@/services';
import { Language } from '@/interfaces';

const TechnologyContainer = () => {
   const [language, setLanguage] = useState<Language[]>([]);

   const router = useRouter();
   const params = useParams();

   const handleOnRedirectPage = (id: string) =>
      router.push(`technology/${id[0]}`);

   useEffect(() => {
      const fetchData = async () => {
         const { data } = await findTechnologyByLanguage(
            '98852eba-ab61-48fc-a42e-8ad6cef716c6'
         );
         setLanguage(data);
      };
      fetchData();
   }, [params]);

   return (
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10'>
            {language.map(({ id, name, logo_url, page_url }) => {
               return (
                  <CardCommon
                     key={id}
                     name={name}
                     logo={logo_url}
                     website={page_url}
                     button='Areas'
                     onRedirect={() => handleOnRedirectPage(id)}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default TechnologyContainer;
