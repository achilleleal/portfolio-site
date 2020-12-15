import React from 'react'
import Image from '../components/image'

import Tailwind from '../images/svg/tailwind.svg'

import { AiFillGithub } from 'react-icons/ai'
import { SiTailwindcss } from 'react-icons/si'

export const techSkills = [
    {
        name: 'HTML',
        image: <Image filename="html.png"/>,
    },
    {
        name: 'CSS',
        image: <Image filename="css.png"/>,
    },
    {
        name: 'Sass',
        image: <Image filename="sass.png"/>,
    },
    {
        name: 'TailwindCSS',
        image: <SiTailwindcss fill="#06b6d4"/>,
    },
    {
        name: 'JS + Node',
        image: <Image filename="js.png"/>,
    },
    {
        name: 'React',
        image: <Image filename="react.png"/>,
    },
    {
        name: 'Gatsby',
        image: <Image filename="gatsby-icon.png"/>,
    },
    {
        name: 'Git + Github',
        image: <AiFillGithub fill='currentColor'/>,
    },
    {
        name: 'PostgreSQL',
        image: <Image filename="postgresql.png"/>,
    },
    {
        name: 'Heroku',
        image: <Image filename="heroku.png"/>,
    },
    {
        name: 'Firebase',
        image: <Image filename="firebase.png"/>,
    },
    {
        name: 'Python',
        image: <Image filename="python.png"/>,
    },    
];

export const softSkills = [
    'Motivated 💪',
    'Optimist 🙌',
    'Critical Thinker ⚙️',
    'Creative 🎨',
    'Resourceful 📚',
    'Responsible 📆',
    'Fluent Spanish 🇪🇸',
    'Fluent English 🇺🇸',
];