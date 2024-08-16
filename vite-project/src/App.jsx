
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
        <Route path='/' element={ <Hero />} />
        <Route path='/' element={ <About />} />
        <Route path='/' element={ <Experience />} />
        <Route path='/' element={ <Projects />} />
        <Route path='/' element={ <Contact />} />
      </Routes>
      </BrowserRouter>
   
    
    
    
    
    
 
    </div>
 )     
}

export default App
