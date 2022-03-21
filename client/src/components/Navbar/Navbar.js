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
        <a href="#intro">Home</a>
        <ul className='navLi'>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <Button>Resume</Button>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default NavMenu