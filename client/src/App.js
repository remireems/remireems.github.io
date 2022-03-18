import About from './components/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

import 'bootstrap/dist/css/bootstrap.min.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
