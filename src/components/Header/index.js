import React from 'react';

function Header(props) {
  const {
    titles = [],
    setCurrentTitle,
    currentTitle,
  } = props;

  return (
    <nav className='col'>
      <ul className='row align-items-center'>
        {titles.map((title) => (
          <li className={`col-1 text-center ${currentTitle.name === title.name && 'navActive'}`} key={title.name}>
            <span onClick={() => {setCurrentTitle(title);}}>{title.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;


// <h2>
// <a data-testid="link" href="/">
//   Leah Sigrid Russell
// </a>
// </h2>