import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import GREEN from '../../assets/green.png'
import CREAM from '../../assets/cream.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nausheen Akhter</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
            <img src={CREAM} alt="cream" />
        </div>

        <a href="contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header