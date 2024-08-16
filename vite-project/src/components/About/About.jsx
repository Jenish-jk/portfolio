import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className = {styles.container} id='about'>
        <h2 className = {styles.title}>About</h2>
        <div className = {styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt="me with a laptop" className = {styles.aboutImage} />
            <ul className ={styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor" />
                    <div className = {styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend developer with experience in building responsive
                             and optimized sites</p>
                    </div>
                </li>

                <li className = {styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="server" />
                    <div className = {styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in developing fast and optimized backend-systems 
                            and API's</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="UI" />
                    <div className = {styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have created 
                            design systems</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About