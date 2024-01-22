import Image from 'next/image';
import Link from 'next/link';

import FooterButton from '@/components/cards/FooterButton';

const Card = ({
   name,
   logo,
   url
}: {
   name: string;
   logo: string;
   url: string;
}) => {
   return (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
         <div className='flex flex-col items-center pb-7'>
            <Link href={url} className='cursor-pointer'>
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

            <FooterButton />
         </div>
      </div>
   );
};

export default Card;
