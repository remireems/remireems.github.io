import Project from '../Project/Project'
import { prosData } from '../../projectData'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projectsSec" id='projects'>
      <div className="proTxt">
        <h1 className="proTitle">My Projects</h1>
      </div>
      <div>
        <div className="proCard">
          {prosData.map(item => (
            <Project key={item.id} title={item.title} des={item.description} techs={item.techs} link={item.link} ghLink={item.ghLink} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects