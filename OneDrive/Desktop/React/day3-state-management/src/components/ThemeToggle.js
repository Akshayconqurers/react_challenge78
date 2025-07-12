import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-200
        ${theme === 'light' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
        }
      `}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;