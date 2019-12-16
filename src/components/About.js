import React from 'react';
import '../css/About.css';
import CardComponent from './CardComponent'
import react from '../Assets/skills/react.png'

function About(props) {
    console.log('test')
    return (
        <div className="About">
            <CardComponent 
            image={react}
            width = '8rem'
            title="React"
            />
        </div>
    );
}

export default About;
