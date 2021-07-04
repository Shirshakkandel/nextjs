import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shirshak List | Home</title>
        <meta name="keywords" content="shirshak" />
      </Head>

      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil temporibus pariatur nulla. Tempore minima dolor, eius corrupti asperiores
          praesentium. Fugiat inventore similique pariatur saepe! Commodi voluptate facilis repellat nostrum expedita?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam rem saepe animi, dicta necessitatibus soluta voluptatibus quam
          magni fuga fugit cupiditate in iusto facere? Adipisci laboriosam inventore accusantium earum?
        </p>

        <Link href="/ninjas/">
          <a className={styles.btn}>See Shirshak Listing</a>
        </Link>
      </div>
    </>
  )
}
