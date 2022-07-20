import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Go Up</a>

      <u1 className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Technical skills</a></li>
          <li><a href="#contact">Contact me</a></li>
      </u1>

      <div className="footer___socials"> 
      <a href="https://www.linkedin.com/in/nausheen-akhter-60b16b8a/"><BsLinkedin/></a>
      <a href="https://github.com/Nausheen701"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>
          {/* &copy; Nausheen Akhter Web developer. All rights reserved. */}
        </small>
      </div>
    </footer>
  )
}

export default Footer