import React, { useState, useEffect } from 'react';

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

    const [body, setBody] = useState('');
    const [darkMode, setDarkMode] = useState(Boolean(body.className));

    useEffect(() => {
        setBody(document.querySelector('body'));
    }, [])

    const toggleDarkMode = () => {
        if (body) {
            body.classList.toggle('dark');
            setDarkMode(prev => !prev)
        }
    }

    return (
        <Button
          size={size}
          onClick={toggleDarkMode}
          className="themeBtn"
        >
            {darkMode ? <FiSun /> : <FaMoon />}
        </Button>
    );
}