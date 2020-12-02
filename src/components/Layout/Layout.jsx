/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import NavBar from './NavBar'
import { ThemeBtn } from '../Buttons'
import Footer from './Footer'
import './Layout.scss'

const Layout = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : null}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />

        <div className="theme-btn-area">
          <ThemeBtn 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
          />
        </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
