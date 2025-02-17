import React from 'react';

import { useDarkMode } from "../components/useDarkMode"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);    
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Cup Players </h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        data-testid="darkmodetogglesetup"
        />
      </div>
    </nav>
  );
};

export default Navbar;