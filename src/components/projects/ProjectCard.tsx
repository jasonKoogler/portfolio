interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        imageUrl: string;
        githubUrl: string;
        demoUrl?: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div key={project.id} className=" border border-primary p-5 hover:shadow-[0_0_12px_var(--color-primary-shadow)] transition-all">
            <div className="h-40 mb-4 bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="text-sm opacity-50">[Project Image: {project.title}]</div>
            </div>

            <h2 className="text-primary text-xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4 text-quaternary">{project.description}</p>

            <div className="mb-4">
                <h3 className="text-secondary text-sm opacity-70 mb-2">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-zinc-800 border border-primary">
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
                    className="inline-block px-4 py-2 border border-primary hover:shadow-[0_0_8px_var(--color-primary-shadow)] transition-all"
                >
                    GITHUB
                </a>
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 border border-primary hover:shadow-[0_0_8px_var(--color-primary-shadow)] transition-all"
                    >
                        LIVE DEMO
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;