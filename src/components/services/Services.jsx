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
          <p>Add some writing</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>  
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>         
        </u1>
      </article>
      {/* END OF UI/UX */}
    
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div> 
        <u1 className='service__list'>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>  
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>         
        </u1>
      </article>

{/* End of Web development */}

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div> 
        <u1 className='service__list'>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>  
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Add some writing</p>
          </li>         
        </u1>
      </article>

    </div>
   </section>
  )
}

export default Services