import './Project.css'

const Project = ({ title, des, techs, link, ghLink }) => {

  const techList = techs.map((item) =>
    <li>{item}</li>
  )

  return (
    <div className="pCard">
      <div className="pIcon">
        <a href={ghLink} target="_blank" rel="noreferrer" className="ghIcon">
          H
        </a>
      </div>
      <h2>
        <a href={link} target="_blank" rel="noreferrer" className="ghIcon">
          {title}
        </a>
      </h2>
      <div className="pDes">
        <p>{des}</p>
      </div>
      <ul className="pTechLi">
        {techList}
      </ul>
    </div>
  )
}

export default Project