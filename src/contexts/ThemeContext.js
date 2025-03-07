import React, { createContext, useState, useContext } from 'react';

// Create the context for theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme context provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');//it is default theme you can change

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
