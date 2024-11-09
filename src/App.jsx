import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false); 
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}> 
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"> {/* Conditional bg color */}
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className='flex justify-center'>
        <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
