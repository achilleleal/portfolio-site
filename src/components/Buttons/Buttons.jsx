import React, { useState } from 'react';

import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

import './Button.scss';

export default function Button({ children, onClick, type, className }) {
    return(
        <button 
          className={`btn ${className}`} 
          onClick={onClick}
          type={type || 'button'}
        >
            {children}
        </button>
    )
}

export const ThemeBtn = ({size}) => {

    const body = document.querySelector('body');

    const [darkMode, setDarkMode] = useState(Boolean(body.className)); // false = light | true = dark

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
        body.classList.toggle('dark');
    }

    return (
        <Button
          size={size}
          onClick={toggleTheme}
          className="themeBtn"
        >
            {darkMode ? <FiSun /> : <FaMoon />}
        </Button>
    );
}