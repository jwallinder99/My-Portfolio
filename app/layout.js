import { Onest } from 'next/font/google'
import './globals.css'
import styles from './globals.css';
import Head from 'next/head'
//components
import Navbar from './components/Navbar'


const onest = Onest({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//layout component contains navbar to display navbar on every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="./globals.css" />
      </Head>
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>

    </html>
  )
}
