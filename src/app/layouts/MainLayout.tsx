import { Layout } from '@/shared/ui/Layout';
import { LayoutFooter } from '@/shared/ui/LayoutFooter';
import { LayoutHeader } from '@/shared/ui/LayoutHeader';
import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '../../components/Navigation';

const MainLayout: React.FC = () => {
  return (
    <div className="">
      <Layout
        headerSlot={<LayoutHeader middleContentSlot={<Navigation />} />}
        bottomSlot={<LayoutFooter />}
      >
        <Outlet />
      </Layout>
    </div>
  );
};

export default MainLayout;