import FooterButton from '@/components/cards/FooterButton';
import CardContent from '@/components/cards/Content';
import { CardProps } from '@/interfaces';

const Card = ({ logo, name, url }: CardProps) => {
   return (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
         <div className='flex flex-col items-center pb-7'>
            <CardContent name={name} logo={logo} url={url} />
            <FooterButton />
         </div>
      </div>
   );
};

export default Card;
