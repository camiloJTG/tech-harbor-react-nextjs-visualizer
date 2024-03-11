import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getLanguageList, getTools } from '@/clients';
import { Language, Tool } from '@/interfaces';

type EntityType = 'Language' | 'Tool';

export const useFetchData = (entity: EntityType) => {
   const params = useParams<{ id: string }>();
   const [data, setData] = useState<(Language | Tool)[]>([]);
   const [error, setError] = useState<Error | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [total, setTotal] = useState<number>(0);
   const [currentPage, setCurrentPage] = useState<number>(1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            let result = await getDataByEntity(entity, [params.id]);

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
   }, [entity, params]);

   return { data, error, loading, total, currentPage };
};

const getDataByEntity = async (entity: EntityType, args?: string[]) => {
   if (entity === 'Language') return await getLanguageList();
   if (entity === 'Tool') return await getTools(args![0]);
   throw new Error('Opt is invalid');
};
