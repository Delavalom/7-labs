import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/masthead'
import AboutUs from '../components/aboutus'
import Skills from '../components/skills'
import Works from '../components/works'
import TrustedBy from '../components/trustedby'
import ContactUs from '../components/contactus'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head> 
        <title>7-Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
