import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '@/interfaces';

const CardCommon = ({ name, button, logo, website, onRedirect }: CardProps) => {
   return (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
         <div className='flex flex-col items-center pb-5'>
            <Link href={website} className='cursor-pointer'>
               <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt={name}
                  className='py-5'
               />
               <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white py-2 text-center'>
                  {name}
               </h5>
            </Link>
            <div className='flex flex-wrap items-center justify-center mt-4 md:mt-6'>
               <button
                  onClick={onRedirect}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1'
               >
                  {button}
               </button>
            </div>
         </div>
      </div>
   );
};

export default CardCommon;
