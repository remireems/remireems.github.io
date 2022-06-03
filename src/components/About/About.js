import { Container } from 'react-bootstrap'
import Remi from '../Image/Me.jpeg'
import './About.css'

const About = () => {
  return (
    <Container id='about'>
      <div className="aboutDes">
        <h1>About Me</h1>
        <p>Hello, my name is Remi Kim. I am a full stack web developer with a finance background and a certificate in full stack development from UC Irvine Extended Education. Detailed-oriented and passionate about developing applications to create better user web experiences. With each project, my goal is to ensure an impactful user experience and build apps that are an improvement of my prior projects. Always striving to create better user experiences for a company and users.</p>
        <p>My Skills:</p>
        <p>HTML, CSS, JavaScript, React, Node.js, MySQL, MongoDB</p>
      </div>
      <div className="aboutImg">
        <div className="aPicDiv">
          <img className="aPic" src={Remi} alt="profilePic" />
        </div>
      </div>
    </Container>
  )
}

export default About