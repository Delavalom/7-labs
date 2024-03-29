import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '@components/HeroSection'
import AboutUs from '@components/AboutUs'
import Skills from '@components/Skills'
import Works from '@components/Works'
import TrustedBy from '@components/TrustedBy'
import ContactUs from '@components/ContactUs'
import Footer from '@components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head> 
        <title>7-Labs</title>
      </Head>

      <HeroSection />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
