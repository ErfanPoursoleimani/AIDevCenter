import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <MobileNavbar /> */}
      
      <main className="flex-1 relative">
        <Outlet />
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;