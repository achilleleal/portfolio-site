import React from 'react'
import Image from '../components/image'

import Tailwind from '../images/svg/tailwind.svg'

export default [
    {
      name: 'ReactMart',
      stack: 'fullstack',
      description: 'An ecommerce site with real time data thanks to Firebase. You can sign in with Google OAuth (handled by Firebase!) to leave reviews, publish and delete products. ',
      repo: 'https://github.com/achilleleal/ecommerce-site',
      demo: 'https://ecommerce-df1d0.web.app/',
      tech: [
          <Image filename="react.png"/>, 
          <Image filename="sass.png"/>, 
          <Image filename="firebase.png"/>
        ],
    },
    {
      name: 'Face Recognition App',
      stack: 'fullstack',
      description: "Put a link to an image in the input bar and it will try to find a face! Made using Clarifai's Face Detection API and deployed on Heroku.",
      repo: 'https://github.com/achilleleal/facerecognition-app',
      demo: 'https://facerecon-frontend.herokuapp.com',
      tech: [
          <Image filename="react.png"/>,
          <Image filename="css.png"/>,
          <Image filename="js.png"/>,
          <Image filename="postgresql.png"/>,
          <Image filename="heroku.png"/>,
      ],
    },
    {
      name: "Weather App",
      stack: 'fullstack',
      description: `Using OpenWeatherMap's API. Shows current weather and forecasts the next 5 days.`,
      repo: 'https://github.com/achilleleal/advent-of-code-2020',
      demo: 'achilleleal.github.io/weather-app/',
      tech: [
          <Image filename="react.png"/>, 
          <Image filename="css.png"/>,
          <Image filename="js.png"/>,
          <Tailwind />
        ],
    },
    {
      name: "Conway's Game of Life",
      stack: 'frontend',
      description: "The classic cellular automaton game, for the browser. It's pure JS DOM manipulation! This was really fun to build.",
      repo: 'https://github.com/achilleleal/Game-Of-Life-HTML',
      demo: 'https://achilleleal.github.io/Game-Of-Life-HTML/',
      tech: [
          <Image filename="html.png"/>,
          <Image filename="css.png"/>,
          <Image filename="js.png"/>,
        ],
    },
    {
      name: "Advent of Code 2020",
      stack: 'node',
      description: "A yearly challenge for testing problem solving and algorithmic skills. Some of them are pretty hard! You can check out my solutions in the repo.",
      repo: 'https://github.com/achilleleal/advent-of-code-2020',
      demo: '',
      tech: [
          <Image filename="js.png"/>,
        ],
    },
  ]