import Link from 'next/link'
import React from 'react'

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navStyle}>
        <h1>James' Portfolio</h1>
        <div className={styles.linkStyle}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
  )
}
