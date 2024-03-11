import { Default2xxResponse, Default4xxResponse, Language } from '@/interfaces';

const BASE_URL = process.env.NEXT_PUBLIC_TECH_HARBOR_API_BASE_URL;

export const getLanguageList = async (): Promise<
   Default2xxResponse | Default4xxResponse
> => {
   try {
      const resp = await fetch(`${BASE_URL}/language`);
      if (!resp.ok) return (await resp.json()) as Default4xxResponse;
      const data: Default2xxResponse = await resp.json();
      return data;
   } catch (error: any) {
      throw new Error(error.message);
   }
};
