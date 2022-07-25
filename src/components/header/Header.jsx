import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
// import GREEN from '../../assets/green.png'
// import CREAM from '../../assets/cream.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className="container header_container">
        {/* <h5>Hello I'm</h5> */}
        <h1>Nausheen Akhter</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA /> <br></br>
        <div className="abtMe"> <center><p> I am a software engineer with a background in education, writing, and visual arts.</p></center></div>
        <HeaderSocials/>

        <div className="me">
            <center><img src={ME} height='1200' width='auto' alt="me" /></center>   
        </div>
       
      
        <center><a href="contact" className='scroll__down'>Scroll Down</a> </center>
        
      </div>
    </header> 
  )
}

export default Header