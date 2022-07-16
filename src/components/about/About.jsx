import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiServiceLine} from 'react-icons/ri'
import {VscSettingsGear} from 'react-icons/vsc'
import {FaGraduationCap} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get to know</h5> */}
      <h2>About me</h2>

      <div className="container about__container">
       
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div> 
        </div> */}
        

        <div className="about__content">
          <div className="about__cards">

          <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div> 
        </div>

          <article className='about__card'>
            {/* <FaAward className='about__icon'/> */}
            <VscSettingsGear className='about_icon'/>
            <h5>Technical skills</h5>
            <li>
            <small> React </small> <br></br>
            <small> Javascript </small><br></br>
            <small> HTML </small><br></br>
            <small> CSS </small><br></br>
            <small> Ruby </small><br></br>
            <small> SQL </small><br></br>
            </li>
            </article>

            
            <article className='about__card'>
            {/* <FaAward className='about__icon'/> */}
            <RiServiceLine className='about_icon'/>
            <h5>Experience</h5>
           
            <small> FORMSORT </small> <br></br>
            <small> FATIH INSTITUTE </small> <br></br>
            <small> IS 230 Q </small><br></br>
            <small> SUNNIPATH ACADEMY </small><br></br>
            
            </article>

           <article className='about__card'>
            <FaGraduationCap className='about__icon'/>
            <h5>Education</h5>
            <small> Flatiron School, SWE </small> <br></br>
            <small> Hunter College, MSEd </small> <br></br>
            <small> Fulbright Fellow </small> <br></br>
            <small> Barnard College, BA </small> <br></br>
            </article>


            {/* <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small> Many clients</small>
            </article> */}

            {/* <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 5 completed </small>
            </article> */}
            
           {/* <center><a href="#contact" className='btn'>Let's talk</a> </center>  */}
           
          </div>
        </div>

      </div>
    </section> 
  )
}

export default About

