import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container} >
        <div className={styles.text} >
            <h2>Contact</h2>
            <p>Feel Free To Reach Out!</p>
        </div>
        <ul className={styles.links} >
            <li className={styles.link} >
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:suresh04102016@gmail.com">Jenish@gmail.com</a>
            </li>

            <li className={styles.link} >
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIcon Icon" />
                <a href="https://www.linkedin.com/jenish">Linkedin.com/Jenish</a>
            </li>

            <li className={styles.link} >
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://www.github.com/Jenish">Github.com/Jenish</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact