
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './component/Header';
import './styles/App.css';  
import './styles/light-theme.css';  
import './styles/dark-theme.css';  

const ThemedApp = () => {
  const { theme } = useTheme();

  
  useEffect(() => {
    document.body.className = theme;  
  }, [theme]);  
  return (
    <div className="App">
      <Header style={{textAlign:"center"}} />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
