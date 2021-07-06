import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';

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
      // case 'Resume':
      //   return <Resume />;
      default:
        break;
    }
  };

  return (
    <div>
      <Nav
        titles={titles}
        setCurrentTitle={setCurrentTitle}
        currentTitle={currentTitle}
      ></Nav>
      <main>
        {currentPage(currentTitle)}
      </main>
    </div>
  );
}

export default App;

// GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 