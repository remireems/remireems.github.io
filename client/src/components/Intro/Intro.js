import './Intro.css'

const Intro = () => {
  return (
    <div className="introSec">
      <div className="introDiv">
        <h2>Hello, my name is</h2>
        <h1 className="iName">Remi Kim.</h1>
        {/* <h2>I'm a full-stack web developer with a baking and finance background.</h2> */}
        <div className="titlesDiv">
          <div className="titlesBox">
            <div className="title">Web Developer</div>
            <div className="title">Finance Background</div>
            <div className="title">Baker</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro