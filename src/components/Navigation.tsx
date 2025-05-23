import React from 'react';
import { Link, useLocation } from 'react-router';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-background p-4 border-b border-[#33ff33]">
      <div className="flex gap-5">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
        >
          <span className="nav-link-text">HOME</span>
        </Link>
        <Link
          to="/blog"
          className={`nav-link ${location.pathname === '/blog' ? 'nav-link-active' : ''}`}
        >
          <span className="nav-link-text">BLOG</span>
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${location.pathname === '/projects' ? 'nav-link-active' : ''}`}
        >
          <span className="nav-link-text">PROJECTS</span>
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
        >
          <span className="nav-link-text">CONTACT</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;