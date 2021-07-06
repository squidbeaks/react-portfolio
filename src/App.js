import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [titles] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const currentPage = ({ name }) => {
    console.log(name)
    switch (name) {
      case 'About':
        return <About />
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />
      case 'Resume':
        return <Resume />;
      default:
        break;
    }
  };

  return (
    <div>
      <Header
        titles={titles}
        setCurrentTitle={setCurrentTitle}
        currentTitle={currentTitle}
      ></Header>
      <main>
        {currentPage(currentTitle)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
