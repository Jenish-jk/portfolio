import React , {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false);
   
  return (
    <section className={styles.navcontainer}>
        <nav className= {styles.navbar}>
        <div>
        <a className = {styles.title} href="/">
            Portfolio
        </a>
        </div>
        <div className = {styles.menu}>

            <img className={styles.menuBtn} src = {menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
            alt='menu-button' 
            onClick={() => setMenuOpen(!menuOpen)} />

            <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)} >
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
            </ul>
        </div>
    </nav>
    </section>
  )
}

export default Navbar;