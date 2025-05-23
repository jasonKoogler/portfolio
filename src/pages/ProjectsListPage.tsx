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
    <div>
      <h1 className="text-2xl mb-8 font-bold tracking-wider">PROJECTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-[#33ff33] p-5 hover:shadow-[0_0_12px_rgba(51,255,51,0.3)] transition-all">
            <div className="h-40 mb-4 bg-zinc-800 flex items-center justify-center overflow-hidden">
              <div className="text-sm opacity-50">[Project Image: {project.title}]</div>
            </div>

            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>

            <div className="mb-4">
              <h3 className="text-sm opacity-70 mb-2">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 border border-[#33ff33]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-[#33ff33] hover:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
              >
                GITHUB
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-[#33ff33] hover:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
                >
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListPage;
