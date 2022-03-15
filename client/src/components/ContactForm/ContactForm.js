import { useRef, useState } from 'react'
import { Modal, Form, Row, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

const ContactForm = (props) => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const formRef = useRef()

  const handleSend = event => {
    event.preventDefault()

    emailjs.sendForm('service_loewtu5', 'template_jkih7i9',
      formRef.current, '9yab1r4ZWVrO1PBhw')
      .then((result) => {
        handleClose()
        alert('Email sent!')
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
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
        <Modal.Body>
          <Form ref={formRef} >
            <Row className="mb-3">
              <Form.Control type="text" placeholder="Name" name="userName" />
            </Row>
            <Row className="mb-3">
              <Form.Control type="text" placeholder="Email" name="userEmail" />
            </Row>
            <Row className="mb-3">
              <Form.Control type="text" placeholder="Subject" name="userSubject" />
            </Row>
            <Row className="mb-3">
              <Form.Control type="text" as="textarea" placeholder="Enter message" rows={3} name="userMessage" />
            </Row>
            <div className='contactBtns'>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                className='ms-2'
                variant="primary" onClick={handleSend}>
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ContactForm