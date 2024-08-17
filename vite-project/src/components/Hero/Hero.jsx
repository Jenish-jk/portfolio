import React from 'react'
import { getImageUrl }from "../../utils"
import styles from "./Hero.module.css"


export const Hero = () => {
  return (
    <section className={styles.mainContainer}>
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jenish</h1>
        <p className={styles.description}>I'm A Full Stack Developer. Reach Out If You Like To Learn More.</p>
        <a href="mailto:suresh04102016@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/me.jpg")} alt="Him" className = {styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    </section>
  )
}

export default Hero