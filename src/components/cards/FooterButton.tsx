import {
   CodeBracketSquareIcon,
   VariableIcon,
   BriefcaseIcon,
   BuildingLibraryIcon,
   WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const FooterButton = () => {
   return (
      <div className='flex flex-wrap items-center justify-center mt-4 md:mt-6'>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1'>
            <VariableIcon className='block h-6 w-6' aria-hidden='true' />
         </button>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1'>
            <BriefcaseIcon className='block h-6 w-6' aria-hidden='true' />
         </button>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1'>
            <BuildingLibraryIcon className='block h-6 w-6' aria-hidden='true' />
         </button>
      </div>
   );
};

export default FooterButton;
