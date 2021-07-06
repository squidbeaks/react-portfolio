import React from 'react';

const Project = ({ project }) => {
  return (
    <div className='project row my-2'>
      <h3>{project.name}</h3>
      <img
        src={project.image}
        alt={project.name}
        className="img-thumbnail mx-1"
        key={project.name}
      />
      <div className='flex-row align-self-center'>
        <a href={project.appURL}>{project.name} App</a>
        <p>|</p>
        <a href={project.githubURL}>{project.name} Source Code</a>
      </div>
    </div>
  );
}

export default Project;
