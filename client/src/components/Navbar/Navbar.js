import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const handleClose = () => setClick(false)

  // const [ show, setShow] = useState(true)
  // const handleNav = () => {
  //   if (window.scrollY > 100) {
  //     setShow(false)
  //   } else {
  //     setShow(true)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleNav)
  //   return () => {
  //     window.removeEventListener('scroll', handleNav)
  //   }
  // }, [])

  //   className = { show && 'navSec'
  // }

  return (
    <div className='navSec'>
      <nav className='nav'>
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={325} className='navHome' onClick={handleClose}>
          <FontAwesomeIcon icon={faHome} size='2x' />
        </Link>
        <div className='navMenuIcons' onClick={handleClick}>
          {click ? (<FontAwesomeIcon icon={faTimes} size='2x' />) : (<FontAwesomeIcon icon={faBars} size='2x' />)}
        </div>
        <ul className={click ? 'navMenu open' : 'navMenu'}>
          <li className='navTab'>
            <Link to="about" spy={true} smooth={true} offset={-30} duration={300} onClick={handleClose} >About</Link>
          </li>
          <li className='navTab'>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={300} onClick={handleClose} >Projects</Link>
          </li>
          <li className='navTab'>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={300} onClick={handleClose} >Contact</Link>
          </li>
          <li className='navTab'>
            <Button onClick={handleClose} variant="outline-light link" href=''>
              {/* <a href="file:///Users/heewon/Downloads/Web%20Developer%20Resume.pdf" target='_blank' rel="noreferrer">Resume</a> */}
              Resume
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default Navbar