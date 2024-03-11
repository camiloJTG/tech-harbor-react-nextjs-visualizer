import { Default2xxResponse, Default4xxResponse } from '@/interfaces';

const BASE_URL = process.env.NEXT_PUBLIC_TECH_HARBOR_API_BASE_URL;

export const getTools = async (
   id: string,
   limit: number = 10,
   offset: number = 1
) => {
   try {
      const params = new URLSearchParams({
         limit: limit.toString(),
         offset: offset.toString()
      });
      const resp = await fetch(`${BASE_URL}/tool/${id}?${params}`);
      if (!resp.ok) return (await resp.json()) as Default4xxResponse;
      const data: Default2xxResponse = await resp.json();
      return data;
   } catch (error: any) {
      throw new Error(error.message);
   }
};
