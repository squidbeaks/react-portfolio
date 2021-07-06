import React from 'react';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col justify-content-center'>
          <h2>Resume</h2>
          <a href={resume} download><p>Download my Resume</p></a>
        </div>
        <div className='col'>
          <h4 className='display-6 title'>Technologies</h4>
          <p>MERN Stack, Javascript, HTML5/CSS3, React, SQL, MongoDB, Git, Heroku, Github Pages, Express, Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
