import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ContactForm from '../ContactForm/ContactForm'
import './Contact.css'

const Contact = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="conSec">
      <div className="conDiv">
        <h1 className="conTitle">Reach Out</h1>
        <div className="conDes">
          <p className="conText">I am looking for opportunities to learn, gain experiences, and  improve my skills! Please reach out to me, I would love to get in touch with you. </p>
        </div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Get in Contact
          </Button>

          <Modal {...props} show={show} onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Get in contact by sending me an email!</Modal.Title>
            </Modal.Header>
            <Modal.Body><ContactForm /></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
    </div>
  )
}

export default Contact