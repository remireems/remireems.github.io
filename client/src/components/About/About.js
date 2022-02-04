import Remi from '../Image/Me.jpeg'
import './About.css'

const About = () => {
  return (
    <div className='aboutSec'>
      <div className="aboutDes">
        <h1>About Me</h1>
        <p>Hello, my name is Remi Kim. Web development caught my interest in 2021. I was able to teach myself some basic code on building a website with the help of free online courses. It is  satisfying to see what I coded and created with my own effort. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente deserunt quis temporibus expedita, illo corrupti quae soluta laborum ipsam culpa maiores error numquam deleniti dolorum doloribus nesciunt. Possimus, et!</p>
        <p>My Skills:</p>
        <p>HTML, CSS, JavaScript, React</p>
        
      </div>
      <div className="aboutImg">
        <div className="aBgDiv"></div>
        <div className="aPicDiv">
          <img className="aPic" src={Remi} alt="profilePic" />
        </div>   
      </div>
    </div>
  )
}

export default About