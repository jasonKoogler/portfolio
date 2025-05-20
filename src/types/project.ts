export interface Technology {
    name: string;
    icon?: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    demoUrl?: string;
    repoUrl?: string;
  }
  
  export interface ProjectCardProps {
    project: Project;
  }