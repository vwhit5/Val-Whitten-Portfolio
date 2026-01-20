import React from 'react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onScroll: () => void;
  filter: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onScroll, filter }) => {
  return (
    <div className="projects-section" onScroll={onScroll}>
      <h2>Projects</h2>
      {projects
        .filter(project => project.category.includes(filter))
        .map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ProjectsSection;