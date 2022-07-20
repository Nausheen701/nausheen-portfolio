import React from 'react'
import './footer.css'

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
    </footer>
  )
}

export default Footer