import Image from 'next/image'

import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'
import { Header, Layout, Footer } from '../components'

const title: string = 'Quinn Web Solutions';

const Home: NextPage = () => { 
  return (
    <Layout home={true} pageTitle={title}>
      <Header />
        


        
      <Footer />
    </Layout>
  )
}

export default Home
