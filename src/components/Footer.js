import React from 'react';
import '../css/Footer.css';
import instagram from '../Assets/instagramblack.png'
import facebook from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'
import leetcode from '../Assets/leetcode.png'
import github from '../Assets/github.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer(props) {
    return (
        <footer className='footer'>
                <Row>
                    <Col md={3} lg={1} >
                    <div className='copywrite' >© David Farley 2020</div>
                    </Col>
                    <Col md={6} lg={{offset: 1, span: 7}} >
                       
                        <a href='https://www.instagram.com/davidfarley71/' target='none'>  <img className='footerimg' src={instagram} alt="instagram link"></img></a>
                        <a href='https://leetcode.com/davidfarley71/' target='none'>  <img className='footerimg' src={leetcode} alt="leetcode link"></img></a>
                        <a href='https://www.linkedin.com/in/david-farley-221b21a6/' target='none'>  <img className='footerimg' src={linkedin} alt="linkedin link"></img></a>
                        <a href='https://github.com/davidfarley71' target='none'><img className='footerimg' src={github} alt="github link"></img></a>
                        <a href='https://www.facebook.com/gnarly.farley.7' target='none'><img className='footerimg' src={facebook} alt="facebook link"></img></a>
                    </Col>
                    <Col md={3} lg={ 3 }><a className='footerimg email' href="mailto:davidfarley7171@gmail.com">davidfarley7171@gmail.com</a>
                        <a className='footerimg links' href="tel:530-215-7781">530-215-7781</a></Col>
                </Row>
        </footer>
    );
}

export default Footer;
