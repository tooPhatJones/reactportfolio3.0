import React from 'react';
import '../css/Footer.css';
import Navbar from 'react-bootstrap/Navbar'
import instagram from '../Assets/instagramblack.png'
import facebook from '../Assets/facebook.png'
import linkedin from '../Assets/linkedin.png'
import leetcode from '../Assets/leetcode.png'
import github from '../Assets/github.png'


function Footer(props) {
    return (
        <footer className='footer'>
            <div className='copywrite'>© David Farley 2019</div>
            <a href='https://www.instagram.com/davidfarley71/' target='none'>  <img className='footerimg' src={instagram} ></img></a>
            <a href='https://leetcode.com/davidfarley71/' target='none'>  <img className='footerimg' src={leetcode} ></img></a>
            <a href='https://www.linkedin.com/in/david-farley-221b21a6/' target='none'>  <img className='footerimg' src={linkedin} ></img></a>
            <a href='https://github.com/davidfarley71' target='none'><img className='footerimg' src={github} ></img></a>
            <a href='https://www.facebook.com/gnarly.farley.7' target='none'><img className='footerimg' src={facebook} ></img></a>
            <a className='footerimg links'href="mailto:davidfarley7171@gmail.com">davidfarley7171@gmail.com</a>
            <a className='footerimg links' href="tel:530-215-7781">530-215-7781</a>
        </footer>
    );
}

export default Footer;
