// /src/components/Header.js

import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header>
      <h1 style={{textAlign:"center"}}>Theme Switcher App</h1>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
