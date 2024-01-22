import Link from 'next/link';
import Image from 'next/image';
import { CardContentProps } from '@/interfaces';

const Content = ({ name, logo, url }: CardContentProps) => {
   return (
      <Link href={url!} className='cursor-pointer'>
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
   );
};

export default Content;
