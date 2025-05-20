import React from 'react';
import { Link, useLocation } from 'react-router';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="mb-8 pb-4 border-b border-[#33ff33]">
      <div className="flex gap-5">
        <Link 
          to="/" 
          className={`px-3 py-1 uppercase tracking-wider transition-all ${
            location.pathname === '/' 
              ? 'border border-[#33ff33] shadow-[0_0_8px_rgba(51,255,51,0.5)]' 
              : ''
          }`}
        >
          HOME
        </Link>
        <Link 
          to="/blog" 
          className={`px-3 py-1 uppercase tracking-wider transition-all ${
            location.pathname === '/blog' 
              ? 'border border-[#33ff33] shadow-[0_0_8px_rgba(51,255,51,0.5)]' 
              : ''
          }`}
        >
          BLOG
        </Link>
        <Link 
          to="/projects" 
          className={`px-3 py-1 uppercase tracking-wider transition-all ${
            location.pathname === '/projects' 
              ? 'border border-[#33ff33] shadow-[0_0_8px_rgba(51,255,51,0.5)]' 
              : ''
          }`}
        >
          PROJECTS
        </Link>
        <Link 
          to="/contact" 
          className={`px-3 py-1 uppercase tracking-wider transition-all ${
            location.pathname === '/contact' 
              ? 'border border-[#33ff33] shadow-[0_0_8px_rgba(51,255,51,0.5)]' 
              : ''
          }`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;