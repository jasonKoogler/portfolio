import { Layout } from '@/shared/ui/Layout';
import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div className="bg-background">
      <Layout
        navbarSlot={<Navigation />}
        bottomSlot={<Footer />}
      >
        <Outlet />
      </Layout>
    </div>
  );
};

export default MainLayout;