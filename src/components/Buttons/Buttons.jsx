import React from 'react';

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

export const ThemeBtn = ({size, darkMode, setDarkMode}) => {

    return (
        <Button
          size={size}
          onClick={() => setDarkMode(prev => !prev)}
          className="themeBtn"
        >
            {darkMode ? <FiSun /> : <FaMoon />}
        </Button>
    );
}