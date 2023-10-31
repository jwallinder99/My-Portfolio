import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div class={styles.wrapper}>
      <div class={styles.typing}>
      Hello World, my name is James <br />
      </div>
      </div>
    </main>
    
  )
}
