import React from 'react';
import { Outlet, useNavigate } from 'react-router';

const BlogLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>


      <main className="min-h-[50vh]">
        <Outlet />
      </main>


    </>
  );
};

export default BlogLayout;
