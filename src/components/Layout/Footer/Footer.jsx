import React from 'react';

import './Footer.scss';
import socialMedia from './socialMedia'

export default function Footer() {

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <footer id="footer">
            <div className="footer-container">
                <h3>Let's get in touch!</h3>
                <nav id="contacts">
                    {socialMedia.map(media => 
                        <MediaLink 
                          to={media.to}
                          icon={<media.icon/>}
                          key={`${media.icon}`}
                        />
                    )}
                </nav>
                <hr></hr>
                <h4>© Sebastián Leal.</h4>
                <p>{months[date.getMonth()]}, {date.getFullYear()}.</p>
            </div>
        </footer>
    )
}

const MediaLink = ({ to, icon }) =>
    <a href={to} target="_blank" rel="noreferrer">
        {icon}
    </a>
