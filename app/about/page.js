import React from 'react';
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
        <h1 className={styles.header}>About Me</h1>
        <div className={styles.content}>
        <article className={styles.aboutContent}>
        <p>
        My name is James and recently I made a career pivot into the world of web development. 
        Eager to cultivate my expertise, I decided to enroll in an intense three month boot camp offered by Hyperiondev. 
        Before I decided to study web development I had been busy trying to start a career as an audio engineer.
        I was unfortunate enough to have to study during covid, but I managed to graduate with a diploma in sound technology. 
        After I got retrenched from my first job after graduation, I decided that I actually wanted to try web development out, as I saw online that there seemed to be
        a high demand, and I thought I would find it interesting. 
        </p>

        <aside className={styles.aside}>
          <Image
          width={100}
          height={130}
          src="/profilePic.jpg" 
          alt="a profile picture of James Wallinder"
          className={styles.profilePic}
          />
          <h2>James Wallinder</h2>
          <h4>Junior Full Stack Web Developer</h4>
          <Link href="https://github.com/jwallinder99?tab=repositories">My Github</Link>
          <h5>Skills</h5>
          <div className={styles.skills}>
            <div className={styles.skill}>Javascript</div>
            <div className={styles.skill}>HTML</div>
            <div className={styles.skill}>CSS</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Bootstrap</div>
            <div className={styles.skill}>Material UI</div>
            <div className={styles.skill}>Git</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>MongoDB</div>
            <div className={styles.skill}>Node</div>
            <div className={styles.skill}>Express</div>
            <div className={styles.skill}>Redux</div>
            <div className={styles.skill}>MD Bootstrap</div>
          </div>
        </aside>
        <p>
        Through dedication, persistence and grit, I managed to acquire a myriad of skills, including proficiency in Javascript, React, and Next.js. 
        I believe these newfound skills position me as valuable asset to any team. 
        </p>
        
        <h2 className={styles.header}>My Work Experience </h2>
        <p>
        The last job I had was at an overdubbing studio where I was overdubbing local voice actors over international series. I had my job for close to a year before a series of
        unfortunate events led to the company having to shut down. I enjoyed my position as a recording engineer and was upset when I got retrenched from my position. I tried looking
        for more work but there are very limited oppertunities in the field at the moment.
        </p>
        <p>
          Before I worked as a recording engineer I had two part time jobs I took while studying at Cape Audio College. I worked as a bartender at a local restaurant, and I had a gig
          doing sound for weddings and djing. 
        </p>
        <h2 className={styles.header}>My Education</h2>
        <ul className={styles.education}>
          <li>Diploma, Cape Audio College</li>
          <li>American International School of Cape Town</li>
        </ul>
        </article>
        </div>
        </div> 
    </main>
  )
}


