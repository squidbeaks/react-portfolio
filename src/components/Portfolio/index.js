import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/projects/wine-and-dine.png';

function Portfolio(props) {
  const currentProject = {
    name: 'wine and dine',
    description: 'This application gives wine users the opportunity to learn about their favorite types of wine and what food they would pair with.'
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div>
        <img
          src={photo}
          alt="Wine and Dine Preview"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Portfolio;
