import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import './NavBar.scss'

export default function NavBar() { 

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 20 ){
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    
    const toTop = () => {
        window.scrollTo(0,0)
    }

    return (
    <header id="navigation" className={scrolled ? 'scrolled' : ''}>
        <nav className="navbar">
            <NavLink to="/" onClick={toTop}><span>~/</span> SEBASTIÁN_LEAL</NavLink>
            <NavLink to="#about"><span>./</span>about</NavLink>
            <NavLink to="#works"><span>./</span>works</NavLink>
            <NavLink to="#contacts"><span>./</span>contact</NavLink>
        </nav>
    </header>
    )
}


const NavLink = ({ to, children, onClick }) => 
    <Link to={to} onClick={onClick}>
        <h1>
            {children}
        </h1>
        {/* <hr/> */}
    </Link>