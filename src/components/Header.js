import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="Header">
            <ul>
                <li className="HeaderLi"><Link to='/About'>About</Link></li>
                <li className="HeaderLi"><Link to='/Portfoliopage'>Portfolio</Link></li>
                <li className="HeaderLi"><a
                    href="https://docs.google.com/document/d/1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo/edit" target='none'>  Resume</a></li>
                <li className="HeaderLi"><Link to='/blog'>Blog</Link></li>
            </ul>
        </div >
    );
}

export default Header;
