import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../components/Navigation';
import RetroCRTTV from '../components/crt';

const MainLayout: React.FC = () => {
  return (
    <div className="bg-zinc-900 min-h-screen min-w-[70vw]">
      <div className='flex flex-col items-center justify-center'>

        <Navigation />
        <main className="min-h-[70vh]">
          <Outlet />
        </main>
        <RetroCRTTV />
        <footer className="mt-12 pt-4 border-t border-[#33ff33] text-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Jason Koogler - Made with a CRT Monitor</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;