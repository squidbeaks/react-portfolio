import React  from 'react';
import Project from '../Project';
import winePhoto from '../../assets/projects/wine-and-dine.png';
import musicPhoto from '../../assets/projects/masterTicket.png';
import volleyballPhoto from '../../assets/projects/shorebreakers.png';

function Portfolio() {
  const projects = [
    {
      name: 'Wine and Dine',
      image: winePhoto,
      githubURL: 'https://github.com/UCB-Bootcamp/wine-and-dine',
      appURL: 'https://ucb-bootcamp.github.io/wine-and-dine/'
    },
    {
      name: 'masterTicket',
      image: musicPhoto,
      githubURL: 'https://github.com/UCB-Bootcamp/masterTicket',
      appURL: 'https://masterticket.herokuapp.com/'
    },
    {
      name: 'masterTicket2.0',
      image: musicPhoto,
      githubURL: 'https://github.com/UCB-Bootcamp/masterTicket2.0',
      appURL: 'https://masterticket2.herokuapp.com/'
    },
    {
      name: 'Shorebreakers',
      image: volleyballPhoto,
      githubURL: 'https://github.com/shorebreakers/shorebreakers',
      appURL: 'https://shorebreakers.github.io/shorebreakers/'
    },
    {
      name: 'Shorebreakers',
      image: volleyballPhoto,
      githubURL: 'https://github.com/shorebreakers/shorebreakers',
      appURL: 'https://shorebreakers.github.io/shorebreakers/'
    },
    {
      name: 'Shorebreakers',
      image: volleyballPhoto,
      githubURL: 'https://github.com/shorebreakers/shorebreakers',
      appURL: 'https://shorebreakers.github.io/shorebreakers/'
    },
  ];

  return (
    <section className='portfolio container'>
      <div class='row'>
        <h1 className='text-center display-3 title'>Projects</h1>
      </div>
      <div className="flex-row">
        {projects.map((project) => (
          <Project project = {project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
