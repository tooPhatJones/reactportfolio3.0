import React from 'react';
import '../css/About.css';
import CardComponent from './CardComponent'
import react from '../Assets/skills/react2.svg'
import access from '../Assets/skills/access.gif'
import agile from '../Assets/skills/agile.png'
import angular from '../Assets/skills/angular82.png'
import asp from '../Assets/skills/asp.net.jfif'
import aws from '../Assets/skills/aws.jpg'
import bootstrap from '../Assets/skills/Bootstrap-Logo.png'
import csharp from '../Assets/skills/csharp.png'
import css from '../Assets/skills/CSS.3.svg'
import dapper from '../Assets/skills/dapper.png'
import git from '../Assets/skills/git2.jfif'
import html from '../Assets/skills/HTML5.png'
import java from '../Assets/skills/Java.png'
import javascript from '../Assets/skills/javascript-1.svg'
import jira from '../Assets/skills/jira.png'
import jquery from '../Assets/skills/jquery.png'
import mysql from '../Assets/skills/mysql.svg'
import node from '../Assets/skills/node.png'
import php from '../Assets/skills/php.png'
import postgress from '../Assets/skills/postgress.png'
import python from '../Assets/skills/python3.jpg'
import vue from '../Assets/skills/vue2.png'

function About(props) {
    var widthvar = '10rem'
    var heightvar = '100px'
    return (
        <div className="About">
            <CardComponent
                image={react}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="React"

            />
            <CardComponent
                image={access}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="MS Access"
            />
            <CardComponent
                image={agile}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="Agile"
            />
            <CardComponent
                image={angular}
                width={widthvar}
                height={heightvar}
                tooltip='6 months'
                title="Angular 8"
            />
            <CardComponent
                image={aws}
                width={widthvar}
                height={heightvar}
                tooltip='6 months'
                title="AWS"
            />
            <CardComponent
                image={bootstrap}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="Bootstrap"
            />
            <CardComponent
                image={csharp}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="C#"
            />
            <CardComponent
                image={asp}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="ASP.NET"
            />
            <CardComponent
                image={dapper}
                width={widthvar}
                height={heightvar}
                tooltip='1 year'
                title="Dapper"
            />
            <CardComponent
                image={css}
                width={widthvar}
                height={heightvar}
                tooltip='3 years'
                title="CSS3"
            />
            <CardComponent
                image={git}
                width={widthvar}
                height={heightvar}
                tooltip='3 years'
                title="Git"
            />
            <CardComponent
                image={html}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="HTML5"
            />
            <CardComponent
                image={java}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="Java"
            />
            <CardComponent
                image={javascript}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="Javascript"
            />
            <CardComponent
                image={node}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="NOdeJS"
            />
            <CardComponent
                image={jira}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="Jira"
            />
            <CardComponent
                image={jquery}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="jQuery"
            />
            <CardComponent
                image={mysql}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="MySQL"
            />
            <CardComponent
                image={php}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="PHP"
            />
            <CardComponent
                image={postgress}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="PostgreSQL" />
            <CardComponent
                image={python}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="Python3"
            />
            <CardComponent
                image={vue}
                width={widthvar}
                height={heightvar}
                tooltip=''
                title="VueJS"
            />
            
        </div>
    );
}

export default About;
