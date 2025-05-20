import React from 'react';
import { Outlet } from 'react-router';
import CRTEffect from '../components/CRTEffect';
import Navigation from '../components/Navigation';

const MainLayout: React.FC = () => {
  return (
    <CRTEffect>
      <Navigation />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <footer className="mt-12 pt-4 border-t border-[#33ff33] text-center opacity-70">
        <p>&copy; {new Date().getFullYear()} Your Name - Made with a CRT Monitor</p>
      </footer>
    </CRTEffect>
  );
};

export default MainLayout;