import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    titles = [],
    setCurrentTitle,
    currentTitle,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTitle.name);
  }, [currentTitle]);

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          LSR
        </a>
      </h2>
      <nav>
        <ul>
          {titles.map((title) => (
              <li className={`mx-1 ${
                currentTitle.name === title.name && 'navActive'
                }`} key={title.name}>
                <span
                  onClick={() => {
                    setCurrentTitle(title);
                  }}
                >
                  {capitalizeFirstLetter(title.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
