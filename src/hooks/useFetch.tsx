import { useEffect, useState } from 'react';

export const useFetchData = () => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = () => {
         setIsLoading(true);
      };
   }, []);
};
