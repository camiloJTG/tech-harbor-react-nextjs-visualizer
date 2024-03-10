export interface ApiResp {
   data: Language[];
   total: number;
   currentPage: number;
}

export interface Language {
   id: string;
   name: string;
   logo_url: string;
   page_url: string;
   created_at: string;
   updated_at: string;
}
