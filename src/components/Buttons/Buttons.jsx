import React from 'react';
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

    const toggleTheme = () => document.querySelector('body').classList.toggle('dark')

    return (
        <Button
          size={size}
          onClick={toggleTheme}
          className="themeBtn"
        >
            Theme
        </Button>
    );
}