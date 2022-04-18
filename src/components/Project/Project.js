import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import './Project.css'

const Project = ({ title, des, techs, link, ghLink }) => {

  const techList = techs.map((item) =>
    <li>{item}</li>
  )

  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{des}</Card.Text>
        <ul className="pTechLi">
          {techList}
        </ul>
        <Card.Link href={link} target="_blank" ><FontAwesomeIcon icon={faLink} size='lg' /></Card.Link>
        <Card.Link href={ghLink} target="_blank"><FontAwesomeIcon icon={faGithub} size='lg' /></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Project