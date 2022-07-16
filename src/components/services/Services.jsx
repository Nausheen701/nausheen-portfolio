import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
   <section id='services'>
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div> 
        <u1 className='service__list'>
          <li>
          <BiCheck className='service__list-icon'/>
          </li>          
        </u1>
      </article>
    </div>
   </section>
  )
}

export default Services