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
import pwa from '../Assets/skills/pwa.png'
import expressjs from '../Assets/skills/expressjs.png'
import ahk from '../Assets/skills/ahk.jfif'
import webpack from '../Assets/skills/webpack.png'
import typescript from '../Assets/skills/typescript.png'
import bable from '../Assets/skills/bable2.png'
import mugshot from '../Assets/mugshot.jpg'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormControl from 'react-bootstrap/FormControl'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
function About(props) {
    const [modalShow, setModalShow] = React.useState(false);
    var widthvar = '10rem'
    var heightvar = '100px'
    return (
        <div className="About">
            <div className='photoframe'>
                <Row>
                    <Col xl={5} >
                        <Image className='mugshot' src={mugshot} rounded />
                    </Col>
                    <Col xl={{ span: 6 }}>
                        <h1>
                            Hello!
                    </h1>
                        <p>
                            My Name is David.
                </p>
                        <p>I am a Full Stack Web developer in the SanFrancisco Bay area.</p>
                        <p>You can see all my skills below!</p>
                        <p>I deliver full service web solutions to help your business maximize productivity and performance online. When it comes to websites it’s not just about creating something great looking, it needs to deliver results for you. Using my skills across both front end and back end I will produce for you not only great presentations but also scalable and performant data management systems.</p>
                        <p>
                            Every website and business has different needs and faces unique challenges. I have a deep technology toolkit and extensive independent experience allowing me to quickly integrate with any existing web development team or even build a project for you from scratch. Check out some samples of my work.</p>
                    </Col>
                </Row>
            </div>

            <Container>
                <CardComponent
                    image={node}
                    width={widthvar}
                    height={heightvar}
                    tooltip='2 years'
                    title="NodeJS"
                />
                <CardComponent
                    image={javascript}
                    width={widthvar}
                    height={heightvar}
                    tooltip='3 years'
                    title="Javascript"
                />
                  <CardComponent
                    image={typescript}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="Typescript"
                />
                <CardComponent
                    image={css}
                    width={widthvar}
                    height={heightvar}
                    tooltip='3 years'
                    title="CSS3"
                />
                <CardComponent
                    image={html}
                    width={widthvar}
                    height={heightvar}
                    tooltip='3 years'
                    title="HTML5"
                />
                <CardComponent
                    image={react}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="
                    React"
                />
                <CardComponent
                    image={expressjs}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="ExpressJS"
                />
                 <CardComponent
                    image={webpack}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="Webpack"
                />
                <CardComponent
                    image={bable}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="BabelJS"
                />
                <CardComponent
                    image={angular}
                    width={widthvar}
                    height={heightvar}
                    tooltip='6 months'
                    title="Angular 8"
                />
                 <CardComponent
                    image={vue}
                    width={widthvar}
                    height={heightvar}
                    tooltip='6 months'
                    title="VueJS"
                />
                <CardComponent
                    image={pwa}
                    width={widthvar}
                    height={heightvar}
                    tooltip='2 years'
                    title="PWA"
                />
                <CardComponent
                    image={agile}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="Agile"
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
                    image={access}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="MS Access"
                />
                <CardComponent
                    image={ahk}
                    width={widthvar}
                    height={heightvar}
                    tooltip='2 years'
                    title="Auto Hot Key"
                />
                <CardComponent
                    image={git}
                    width={widthvar}
                    height={heightvar}
                    tooltip='3 years'
                    title="Git"
                />

                <CardComponent
                    image={java}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="Java"
                />


                <CardComponent
                    image={jira}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="Jira"
                />
                <CardComponent
                    image={jquery}
                    width={widthvar}
                    height={heightvar}
                    tooltip='3 years'
                    title="jQuery"
                />
                <CardComponent
                    image={mysql}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="MySQL"
                />
                <CardComponent
                    image={php}
                    width={widthvar}
                    height={heightvar}
                    tooltip='1 year'
                    title="PHP"
                />
                <CardComponent
                    image={postgress}
                    width={widthvar}
                    height={heightvar}
                    tooltip='6 months'
                    title="PostgreSQL" />
                <CardComponent
                    image={python}
                    width={widthvar}
                    height={heightvar}
                    tooltip='6 months'
                    title="Python3"
                />
               
            </Container>
            <Button className="contactbutton" variant="primary" onClick={() => setModalShow(true)}>
                Contact me!
      </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default About;
