import { Container } from 'react-bootstrap'
import Remi from '../Image/Me.jpeg'
import './About.css'

const About = () => {
  return (
    <Container id='about'>
      <div className="aboutDes">
        <h1>About Me</h1>
        <p>Hello, my name is Remi Kim. I am a full stack web developer with a finance background and a certificate in full stack development from UC Irvine Extended Education. Skills in JavaScript, Node.js, MySQL, MongoDB, and React.js. Detailed-oriented and passionate about developing applications to create better user web experiences. With each project, my goal is to ensure an impactful user experience and build apps that are an improvement of my prior projects. In my lastest project, I was in a team of six developing a fun and educational app that simulates cryptocurrency trading with fake money. It is a gateway for people who are new to crypto and are interested in coin trading. My role in the project was to create,style, and make the webpage mobile-friendly as a front-end developer. Always striving to create better user experiences for a company and users.</p>
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