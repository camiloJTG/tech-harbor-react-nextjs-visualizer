'use client';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';

const classNames = (...classes: any) => {
   return classes.filter(Boolean).join(' ');
};

const NavbarCommon = () => {
   return (
      <div className='min-h-full'>
         <Disclosure as='nav' className='bg-gray-800'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
               <div className='flex h-16 items-center justify-center'>
                  <div className='flex items-center'>
                     <div className='flex items-baseline m-0 p-0'>
                        <Link
                           href='/'
                           className={classNames(
                              'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                           )}
                        >
                           Languages
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </Disclosure>
      </div>
   );
};

export default NavbarCommon;
