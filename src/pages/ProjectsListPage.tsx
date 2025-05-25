import ProjectCard from '@/components/projects/ProjectCard';
import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

const ProjectsListPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'project1',
      title: 'CRT Portfolio',
      description: 'A retro-themed portfolio website with CRT monitor effects built using React and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      imageUrl: '/project1.jpg',
      githubUrl: 'https://github.com/yourusername/crt-portfolio',
      demoUrl: 'https://crt-portfolio.yourdomain.com'
    },
    {
      id: 'project2',
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current conditions and forecasts for any location.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      imageUrl: '/project2.jpg',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      demoUrl: 'https://weather.yourdomain.com'
    },
    {
      id: 'project3',
      title: 'Task Management API',
      description: 'A RESTful API for task management with authentication, task CRUD operations, and team collaboration features.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: '/project3.jpg',
      githubUrl: 'https://github.com/yourusername/task-api'
    }
  ]);

  return (
    <div className='flex flex-col  h-full w-full  p-6 overflow-y-scroll scrollbar-thin'>
      <div className='flex flex-col max-w-screen-lg mx-auto '>

        <h1 className="text-2xl text-primary mb-8 font-bold tracking-wider">PROJECTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsListPage;
