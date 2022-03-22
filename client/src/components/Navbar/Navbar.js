import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useState } from 'react'


import './Navbar.css'



const NavMenu = () => {

  return (
    <div className="navSec">
      {/* <Navbar bg="light" expand="lg" id='navStyle'>
        <Container id='navCont'>
          <Navbar.Brand href="/Intro">RK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Button>Resume</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <nav className='nav'>
        <a href="#intro" className='navHome'>
          <FontAwesomeIcon icon={faHome} size='2x' />
        </a>
        <FontAwesomeIcon icon={faBars} className='navMenuIcon' size='2x' />
        <ul className='navMenu'>
          <li className='navTab'>
            <a href="#about">About</a>
          </li>
          <li className='navTab'>
            <a href="#projects">Projects</a>
          </li>
          <li className='navTab'>
            <a href="#contact">Contact</a>
          </li>
          <li className='navTab'>
            <Button>Resume</Button>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default NavMenu