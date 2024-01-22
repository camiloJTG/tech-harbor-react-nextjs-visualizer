import { ReactNode } from 'react';
import Header from '@/components/common/Navbar';

const Main = ({ children }: { children: ReactNode }) => {
   return (
      <div>
         <Header />
         {children}
      </div>
   );
};

export default Main;
