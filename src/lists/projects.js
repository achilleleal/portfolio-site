import React from 'react'
import Image from '../components/image'

export default [
    {
      name: 'ReactMart 🛒',
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
      name: 'Face Recognition App 🤖',
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
      name: "Conway's Game of Life 🔬",
      description: "The classic cellular automaton game, for the browser. It's pure JS DOM manipulation! This was really fun to build.",
      repo: '',
      demo: '',
      tech: [
          <Image filename="html.png"/>,
          <Image filename="css.png"/>,
          <Image filename="js.png"/>,
        ],
    },
  ]