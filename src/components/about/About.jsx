import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get to know</h5> */}
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 2 years </small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> Many clients</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 5 completed </small>
            </article>
            
            <p> A paragraph</p>
            <a href="#contact" className='btn'>Let's talk</a>
          </div>
        </div>

      </div>
    </section> 
  )
}

export default About

