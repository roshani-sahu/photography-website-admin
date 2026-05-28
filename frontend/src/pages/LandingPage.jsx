import React from 'react'
import { Toaster } from 'react-hot-toast'
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
      <Toaster position="top-right" toastOptions={{ style: { background: '#1c1530', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
      <div id="home"><HeroSection /></div>
      <div id="services"><Service /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="professionals"><ForVisionaries /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  )
}

export default LandingPage
