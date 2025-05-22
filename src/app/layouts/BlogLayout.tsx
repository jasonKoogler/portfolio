import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router';

const BlogLayout: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <header className="mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-block mb-4 px-4 py-2 border border-[#33ff33] hover:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
        >
          &lt; BACK
        </button>
        <h1 className="text-2xl font-bold tracking-wider">BLOG POST</h1>
      </header>
      
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
      
      <footer className="mt-12 pt-4 border-t border-[#33ff33] text-center opacity-70">
        <div className="mb-4">
          <Link to="/blog" className="underline hover:text-white transition-colors">
            Back to all posts
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name - Made with a CRT Monitor</p>
      </footer>
    </>
  );
};

export default BlogLayout;
