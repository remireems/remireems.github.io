import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const handleClose = () => setClick(false)

  return (
    <div className="navSec">
      <nav className='nav'>
        <a href="#intro" className='navHome'>
          <FontAwesomeIcon icon={faHome} size='2x' />
        </a>
        <div className='navMenuIcons' onClick={handleClick}>
          {click ? (<FontAwesomeIcon icon={faTimes} size='2x' />) : (<FontAwesomeIcon icon={faBars} size='2x' />)}
        </div>
        <ul className={click ? 'navMenu open' : 'navMenu'}>
          <li className='navTab'>
            <a href="#about" onClick={handleClose} >About</a>
          </li>
          <li className='navTab'>
            <a href="#projects" onClick={handleClose} >Projects</a>
          </li>
          <li className='navTab'>
            <a href="#contact" onClick={handleClose} >Contact</a>
          </li>
          <li className='navTab'>
            <Button onClick={handleClose} >Resume</Button>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default Navbar