import Image from 'next/image';

const DisplayCard = ({ name, logo }: { name: string; logo: string }) => {
   return (
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700'>
         <div className='flex flex-col items-center pb-10'>
            <Image
               src={logo}
               width={100}
               height={100}
               alt={name}
               className='py-5'
            />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white py-2'>
               {name}
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400 py-2'>
               Library components
            </span>
            <div className='flex mt-4 md:mt-6'>
               <div className='w-auto h-auto'>
                  <div className='flex-1 h-full'>
                     <div className='flex items-center justify-center flex-1 h-full p-2 bg-blue-800 text-white shadow rounded-lg'>
                        <div className='card-actions justify-end'>
                           <button className='btn btn-primary'>Buy Now</button>
                        </div>
                     </div>
                  </div>
               </div>

               <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Area
               </a>
               <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Technologies
               </a>
               <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Libraries
               </a>
            </div>
         </div>
      </div>
   );
};

export default DisplayCard;
