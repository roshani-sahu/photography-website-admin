import React from 'react'
import Header from '../components/landingpagecomp/Header'
import HeroSection from '../components/landingpagecomp/HeroSection'
import Service from '../components/landingpagecomp/Service'
import HowItWorks from '../components/landingpagecomp/HowItWorks'
import ForVisionaries from '../components/landingpagecomp/ForVisionaries'
import Testimonials from '../components/landingpagecomp/Testimonials'
import Footer from '../components/landingpagecomp/Footer'

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Service />
      <HowItWorks />
      <ForVisionaries />
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default LandingPage
