import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className='flex flex-1 overflow-hidden'>

        <Navigation />
        <main className="">
          <Outlet />
        </main>
        {/* <RetroCRTTV /> */}

      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;