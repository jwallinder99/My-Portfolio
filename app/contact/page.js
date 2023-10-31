import React from 'react'
import styles from './contact.module.css'
import Link from 'next/link'

export default function contact() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.contact}>
        <Link href="mailto:jjpwallinder@gmail.com" target="_blank">Email Me at jjpwallinder@gmail.com</Link>
        </div>
      </div>
    </main>
  )
}
