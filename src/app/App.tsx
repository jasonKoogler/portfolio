import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import "./App.css";
import BlogLayout from './layouts/BlogLayout';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  return (
    <div className=' '>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
            <Route path="/blog/:slug" element={<BlogLayout />}>
              <Route index element={<BlogPostPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;