import { useEffect, useState } from 'react';
import { getLanguageList } from '@/clients';
import { Language, Tool } from '@/interfaces';

type EntityType = 'Language' | 'Tool';

export const useFetchData = (entity: EntityType) => {
   const [data, setData] = useState<(Language | Tool)[]>([]);
   const [error, setError] = useState<Error | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [total, setTotal] = useState<number>(0);
   const [currentPage, setCurrentPage] = useState<number>(1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            let result = await getDataByEntity(entity);

            if ('data' in result) {
               const { currentPage, data, total } = result;
               setData(data);
               setTotal(total);
               setCurrentPage(currentPage);
            }
            setLoading(false);
         } catch (error: any) {
            setError(error);
            setLoading(false);
         }
      };
      fetchData();
   }, [entity]);

   return { data, error, loading, total, currentPage };
};

const getDataByEntity = async (entity: EntityType) => {
   if (entity === 'Language') return await getLanguageList();

   throw new Error('Opt is invalid');
};
