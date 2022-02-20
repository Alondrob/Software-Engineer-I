import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Navigator from '../components/Navigator'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Dream Vacation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Link href='/'>
        <Layout />
      </Link>
      <Navigator/>
       
    
     
    </div>
  )
}

export default Home
