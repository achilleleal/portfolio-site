import React from 'react'
import './Card.scss'

export default function Card({title, content, display, children}) {

    if (children) {
        return (
            <section className="card">
                <div className="head">
                    <h1>{title}</h1>
                </div>
                <div>
                    {children}
                </div>
            </section>
        ) 
    } 
    
    return (
        <section className="card">
            <div className="head">
                <h1>{title}</h1>
            </div>
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
        </section>
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