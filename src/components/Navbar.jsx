import React from 'react';
import icon from '../assets/react.svg';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <div className="w-full py-4 px-10 flex items-center justify-between bg-gray-200 dark:bg-gray-800">
      <div className="flex items-center gap-5">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Feed-Back App</h1>
        <img src={icon} alt="App Logo" className="w-8 h-8" />
      </div>
      <button
        onClick={toggleTheme}
        className=" text-black  py-2 px-5 rounded-lg text-2xl dark:text-white border border-gray-500"
      >
        {darkMode ? <MdSunny /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Navbar;
