import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Intro.css'

const Intro = () => {
  return (
    <div className="introSec">
      <div className="introDiv">
        <h2>Hello, my name is</h2>
        <h1 className="iName">Remi Kim.</h1>
        {/* <h2>I'm a full-stack web developer with a baking and finance background.</h2> */}
        <div className="titlesDiv">
          <div className="titlesBox">
            <div className="title">Web Developer</div>
            <div className="title">Finance Background</div>
            <div className="title">Baker</div>
          </div>
        </div>
        <div className="iAcc">
          <FontAwesomeIcon icon={faGithub} size='lg' />
          <FontAwesomeIcon icon={faLinkedin} size='lg' />
          <FontAwesomeIcon icon={faInstagram} size='lg' /><FontAwesomeIcon icon={faFacebook} size='lg' />
        </div>
      </div>
    </div>
  );
}

export default Intro