import React from 'react'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Skills />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    
    </>
    
  )
}

export default App