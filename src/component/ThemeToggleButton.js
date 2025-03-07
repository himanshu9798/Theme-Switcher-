

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>    <style>
    {`
      @keyframes scaleAnimation {
        0% {
          transform: scale(1);
          background: linear-gradient(45deg, #ff6ec7, #ffbc00);  // Initial gradient
        }
        25% {
          transform: scale(1.05);
          background: linear-gradient(45deg, #ff6ec7, #00bfff);  // Change gradient color
        }
        50% {
          transform: scale(1.1);
          background: linear-gradient(45deg, #ffbc00, #00ff7f);  // Change gradient color
        }
        75% {
          transform: scale(1.05);
          background: linear-gradient(45deg, #ff6ec7, #ffbc00);  // Back to original gradient
        }
        100% {
          transform: scale(1);
          background: linear-gradient(45deg, #ff6ec7, #ffbc00);  // End with original gradient
        }
      }

      .animated {
        animation: scaleAnimation 2s infinite;
      }
    `}
  </style>
    <button  
    style={{
        marginRight:"15%",
        width:"200px",
        height:"80px",
        border:"none",
        borderRadius:"10px",
        outline:"none",
        fontSize:"20px",
        fontWeight:"800",
        transform:"scale(1.1)"

      
    }}
     className="animated"
     onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
    </div>
  );
};

export default ThemeToggleButton;
