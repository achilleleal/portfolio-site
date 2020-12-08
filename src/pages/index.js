import React from "react"

import Particles from 'react-particles-js'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Rocket from '../images/svg/rocket.svg'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroArea />
  </Layout>
)

const IntroArea = () => {

  const particleParams = {
    particles: {
      number: {
        value: 100
      },
      size: {
        value: 5
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        direction: 'left',
        out_mode: 'out',
        straight: true,
        speed: 5
      }
    }
  }

  return (
    <div className="intro-area">
      <Particles params={particleParams} className="bg-particles"/>
      <div className="intro">
        <div>
          <h1>The web developer <span>you need.</span></h1>
          <div className="traits">
            <h2>Looking for someone...</h2>
            <ul>
              <li>With <span>attention to detail?</span></li>
              <li>Who is a <span>team player?</span></li>
              <li>With <span>strong React skills?</span></li>
            </ul>
            <p>then</p>
            <h2><span>I'm your guy</span></h2>
          </div>
        </div>
        <div className="rocket-container">
            <Rocket />
        </div>
      </div>
    </div>
  )
}


export default IndexPage
