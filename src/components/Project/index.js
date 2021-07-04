import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <img
        src={project.image}
        alt={project.name}
        className="img-thumbnail mx-1"
        key={project.name}
      />
      <a href={project.appURL}>Visit the {project.name} App</a>
      <a href={project.githubURL}>Visit the {project.name} Source Code</a>
    </div>
  );
}

export default Project;
