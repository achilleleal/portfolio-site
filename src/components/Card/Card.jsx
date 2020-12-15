import React from 'react'
import Button from '../Buttons'
import './Card.scss'

export default function Card({title, children, stack}) {

    const handleStack = () => {
        let icon = '📟';
        if (stack === 'fullstack') icon = '⚡️';
        if (stack === 'frontend') icon = '🔥';
        return `${icon}${stack.toUpperCase()}${icon}`
    }

    return (
        <section className="card">
            <header className="head">
                {stack && <p>{handleStack()}</p>}

                <h1>{title}</h1>
            </header>
            {children}
        </section>
    ) 
} 

export const SkillCard = ({title, content, display}) => {
        return (
            <Card title={title}>
                {display === 'grid' 
                ? 
                    <div className="content-grid">
                        {content.map(item =>
                            <ItemCard
                            name={item.name}
                            image={item.image}
                            key={item.name}
                            />
                        )}
                    </div>
                :
                    <div className="content-list">
                        <ul>
                            {content.map(item =>
                                <li><span>{item}</span></li>
                            )}
                        </ul>
                    </div>
                }
            </Card>
        )
    }

function ItemCard({name, image}) {
    return (
        <div className="item-card">
            <div>
                {image}
            </div>
            <p>{name}</p>
        </div>
    )
}

export const ProjectCard = ({title, description, stack, tech, repo, demo}) => {

    return (
        <Card title={title} stack={stack}>
            <div className="project-card">
                <article>
                    <p>{description}</p>
                </article>
                <h3 style={{textAlign: 'center'}}>Made with:</h3>
                <div className="project-tech">
                    {tech.map(item =>
                        <div className='tech-container' key={item.filename}>
                            {item}
                        </div>
                    )}
                </div>
                <nav>
                    {demo && 
                    <Button>
                        <a href={demo} target="_blank" rel="noreferrer">
                            View live  
                        </a>
                    </Button>
                    }

                    {repo &&
                    <Button>
                        <a href={repo} target="_blank" rel="noreferrer">
                            View repo  
                        </a>
                    </Button>
                    }
                </nav>
            </div>
        </Card>
    )
}