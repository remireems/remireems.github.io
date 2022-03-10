import { Form, Row } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Control placeholder="Name" />
        </Row>
        <Row className="mb-3">
          <Form.Control placeholder="Email" />
        </Row>
        <Row className="mb-3">
          <Form.Control placeholder="Subject" />
        </Row>
        <Row className="mb-2">
          <Form.Control as="textarea" placeholder="Enter message" rows={3} />
        </Row>
      </Form>
    </div>
  )
}

export default ContactForm