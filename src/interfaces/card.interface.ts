import { MouseEventHandler } from 'react';

export interface CardProps {
   name: string;
   logo: string;
   button: string;
   website: string;
   onRedirect: () => void;
}
