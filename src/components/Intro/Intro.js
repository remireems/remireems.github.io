import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'
import './Intro.css'


const Intro = () => {
  return (
    <Container id='intro'>
      <div className="introDiv">
        <h2>Hello, my name is</h2>
        <h1 className="iName">Remi Kim.</h1>
        <div className="titlesDiv">
          <div className="titlesBox">
            <div className="title">Web Developer</div>
            <div className="title">Finance Background</div>
            <div className="title">Baker</div>
          </div>
        </div>
        <div className="iAcc mt-2">
          <a href="https://github.com/remireems" target='_blank' rel="noreferrer" className='iIcons'><FontAwesomeIcon className="me-3" icon={faGithub} size='2x' /></a>
          <a href="https://www.linkedin.com/in/remirems/" target='_blank' rel="noreferrer" className='iIcons'><FontAwesomeIcon className="me-3" icon={faLinkedin} size='2x' /></a>
          <a href="https://www.instagram.com/heeeewonkim/?hl=en" target='_blank' rel="noreferrer" className='iIcons'><FontAwesomeIcon className="me-3" icon={faInstagram} size='2x' /></a>      
        </div>
      </div>
    </Container>
  );
}

export default Intro