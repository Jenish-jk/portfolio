
import styles from './App.module.css'
import { Hero } from "./components/Hero/Hero"
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <div className = {styles.App}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navbar />} />
        <Route path='/hero' element={ <Hero />} />
        <Route path='/about' element={ <About />} />
        <Route path='/experience' element={ <Experience />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
      </BrowserRouter>
   
    
    
    
    
    
 
    </div>
 )     
}

export default App
