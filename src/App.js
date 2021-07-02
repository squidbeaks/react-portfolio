import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'

function App() {
  const [projects] = useState([
    { name: 'Wine and Dine', description: '' },
    { name: 'masterTicket', description: '' },
    { name: 'masterTicket2.0', description: ''},
    { name: 'Shorebreakers', description: '' },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
        <Nav
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        ></Nav>
        <main>
          <Portfolio></Portfolio>
          <About></About>
        </main>
    </div>
  );
}

export default App;
