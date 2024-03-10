import { ApiResp } from '@/interfaces';

const BASE_URL = process.env.NEXT_PUBLIC_TECH_HARBOR_API_BASE_URL;

export const languageList = async () => {
   try {
      const resp = await fetch(`${BASE_URL}/language`);
      if (!resp.ok) return [];
      const data: ApiResp = await resp.json();
      return data;
   } catch (error: any) {
      return error.message;
   }
};

export const findTechnologyByLanguage = async (id: string) => {
   try {
      const resp = await fetch(`${BASE_URL}/tool/${id}`);
      if (!resp.ok) throw new Error('Error api error');
      const data: ApiResp = await resp.json();
      return data;
   } catch (error: any) {
      throw new Error(error.message);
   }
};
