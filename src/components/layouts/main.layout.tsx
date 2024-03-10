import { ReactNode } from 'react';
import NavbarCommon from '@/components/common/navbar.common';

const MainLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div>
         <NavbarCommon />
         {children}
      </div>
   );
};

export default MainLayout;
