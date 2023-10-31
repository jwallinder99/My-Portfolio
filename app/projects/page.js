import React from 'react'
//import projects from json file
import projects from '../../projects.json'
import styles from './projects.module.css'
import Link from 'next/link'

export default function Projects() {
  //map projects to a div 
  return (
    <main>
      <div className={styles.projects}>
        {projects.map(project=> (
          <div key={project.id} className={styles.project}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.url} target="_blank">Github Link</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
