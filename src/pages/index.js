import React from "react"

import Particles from 'react-particles-js'

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
    <SEO title="Home" />
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
      <Particles params={particleParams} className="bg-particles"/>
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
    </div>
  )
}



const AboutMe = () => {
  return (
    <main id="about">
      <h1><Emoji icon='⚡️'/> Hello! My name is <span>Sebastián Leal</span><Emoji icon='⚡️'/></h1>
      <article className="about-me">
        <p>
          I'm a web developer from Venezuela. <br></br>
          I focus <span>primarily on the frontend</span>, but I also know <span>some backend</span> things.<br></br> 
          I graduated from highschool a few months ago, and I plan on studying computer science.<br></br>
          I've been developing for a while now, and love building interesting projects.<br></br>
          Also, I'm a <span>huge space geek</span> (is it too obvious?).<br></br>
        </p>
        <h2>I'm always looking for a good challenge to drive my skills to their limits</h2>
      </article>
      <div className="skills">
        <SkillCard title='Soft skills' content={softSkills} display='list'/>
        <SkillCard title='Tech skills' content={techSkills} display='grid'/>
      </div>
    </main>
    
  )
}



const Work = () => {
  return (
    <section id="works">
      <h1>Some of my work...</h1>
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
    </section>
  );
}

export default IndexPage
