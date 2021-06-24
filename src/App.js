import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  const [projects] = useState([
    { name: 'wine-and-dine', description: '' },
    { name: 'masterTicket', description: '' },
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
          <Projects></Projects>
          <About></About>
        </main>
    </div>
  );
}

export default App;
