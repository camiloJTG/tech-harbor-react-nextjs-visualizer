export interface Default4xxResponse {
   message: string;
   error: string;
   statusCode: number;
}

export interface Default2xxResponse {
   data: Language[] | Tool[];
   total: number;
   currentPage: number;
}

export interface Language {
   id: string;
   name: string;
   page_url: string;
   logo_url: string;
   created_at: string;
   updated_at: string;
}

export interface Tool {
   id: string;
   name: string;
   logo_url: string;
   page_url: string;
   created_at: string;
   updated_at: string;
   label: Label;
}

export interface Label {
   id: string;
   name: string;
   enabled: boolean;
   created_at: string;
   updated_at: string;
}
