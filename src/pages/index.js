import React from "react"

import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';

import { techSkills, softSkills } from '../lists/skills'
import projects from '../lists/projects'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Rocket from '../images/svg/rocket.svg'
import { SkillCard, ProjectCard } from '../components/Card'
import Emoji from '../components/Emoji'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio"/>
    <IntroArea />
    <AboutMe />
    <Work />
  </Layout>
)

const IntroArea = () => {

  const particleParams = {
    particles: {
      number: {
        value: 250
      },
      color: {
        value: ['#1e2222', '#ffffff', '#00ebdf', '#00444d']
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
        speed: 5,
      }
    }
  }

  return (
    <div className="intro-area">
      <div className="particles-bg">
        <Particles params={particleParams} className="particles"/>
      </div>
      <Fade left>
      <div className="intro">
        <div>
          <h1>The web developer <span>you need.</span> <Emoji icon='⭐️'/></h1>
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
      </Fade>
    </div>
  )
}



const AboutMe = () => {
  return (
    <main id="about">
      <Fade bottom>
        <div className="title">
          <h1><Emoji icon='⚡️'/></h1><h1> Hello! My name is <span>Sebastián Leal</span></h1><h1><Emoji icon='⚡️'/></h1>
        </div>
      </Fade>
      <article className="about-me">
        <Fade bottom>
          <p>
            I'm a web developer from Venezuela. <br></br>
            I focus <span>primarily on the frontend</span>, but I also know <span>some backend</span> things.<br></br> 
            I graduated from highschool a few months ago, and I plan on studying computer science.<br></br>
            I've been developing for a while now, and love building interesting projects.<br></br>
            Also, I'm a <span>huge space geek</span> (is it too obvious?).<br></br>
          </p>
          <h2>I'm always looking for a good challenge to drive my skills to their limits</h2>
        </Fade>
      </article>
      <Fade clear>
        <div className="skills">
          <SkillCard title='Soft skills' content={softSkills} display='list'/>
          <SkillCard title='Tech skills' content={techSkills} display='grid'/>
        </div>
      </Fade>
    </main>
    
  )
}



const Work = () => {
  return (
    <section id="works">
      <Fade bottom>
        <h1>Some of my work...</h1>
      </Fade>
      <Fade clear>
        <main id="projects">
          {projects.map(project => 
            <ProjectCard 
              key={project.name}
              title={project.name} 
              description={project.description} 
              stack={project.stack}
              repo={project.repo}
              demo={project.demo}
              tech={project.tech}
            />
          )}
        </main>
      </Fade>
    </section>
  );
}

export default IndexPage
