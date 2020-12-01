import React from 'react'
import { Link } from 'gatsby'

import './NavBar.scss'

export default function NavBar() { 
    return (
    <header>
        <nav className="navbar">
            <NavLink to="/"><span>~/</span> SEBASTIÁN_LEAL</NavLink>
            <NavLink to="/page-2"><span>./</span>about</NavLink>
            <NavLink to="/works"><span>./</span>works</NavLink>
            <NavLink to="/contact"><span>./</span>contact</NavLink>
        </nav>
    </header>
    )
}


const NavLink = ({ to, children }) => 
    <Link to={to}>
        <h1>
            {children}
        </h1>
        <hr/>
    </Link>