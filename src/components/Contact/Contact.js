import { Container } from 'react-bootstrap'
import ContactForm from '../ContactForm/ContactForm'
import './Contact.css'

const Contact = () => {

  return (
    <Container id='contact'>
      <div className="conDiv">
        <h1 className="conTitle">Reach Out</h1>
        <div className="conDes">
          <p className="conText">I am looking for opportunities to learn, gain experiences, and  improve my skills! Please reach out to me, I would love to get in touch with you. </p>
        </div>
        <div>
          <ContactForm />
        </div>       
      </div>
    </Container>
  )
}

export default Contact