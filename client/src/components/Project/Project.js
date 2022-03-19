import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Card, Row, Col } from 'react-bootstrap'
import './Project.css'

const Project = ({ title, des, techs, link, ghLink }) => {

  const techList = techs.map((item) =>
    <li>{item}</li>
  )

  return (
    // <div className="pCard">
    //   <div className="pIcon">
    //     <a href={ghLink} target="_blank" rel="noreferrer" className="ghIcon">
    //       <FontAwesomeIcon icon={faGithub} size='lg'/>
    //     </a>
    //   </div>
    //   <h2>
    //     <a href={link} target="_blank" rel="noreferrer" className="ghIcon">
    //       {title}
    //     </a>
    //   </h2>
    //   <div className="pDes">
    //     <p>{des}</p>
    //   </div>
    //   <ul className="pTechLi">
    //     {techList}
    //   </ul>
    // </div>
    // <div>
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
    //  </div>

    // <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 1 }).map((_, idx) => (
    //     <Col>
    //       <Card style={{ width: '18rem' }}>
    //         <Card.Body>
    //           <Card.Title>{title}</Card.Title>
    //           <Card.Text>{des}</Card.Text>
    //           <ul className="pTechLi">
    //             {techList}

    //           </ul>
    //           <Card.Link href={link} target="_blank" ><FontAwesomeIcon icon={faLink} size='lg' /></Card.Link>
    //           <Card.Link href={ghLink} target="_blank"><FontAwesomeIcon icon={faGithub} size='lg' /></Card.Link>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  )
}

export default Project