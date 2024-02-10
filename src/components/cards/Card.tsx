import CardContent from '@/components/cards/Content';
import { CardProps } from '@/interfaces';

const Card = ({ logo, name, url }: CardProps) => {
   return (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
         <div className='flex flex-col items-center pb-5'>
            <CardContent name={name} logo={logo} url={url} />
            <div className='flex flex-wrap items-center justify-center mt-4 md:mt-6'>
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1'>
                  Areas
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card;
