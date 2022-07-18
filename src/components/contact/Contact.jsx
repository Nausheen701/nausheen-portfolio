import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      {/* <h5>Get in touch</h5> */}
      <h2>Contact Me</h2>

      <div className="container contact__container"> 
        <div className="contact__options"> 

          {/* <article className="contact__option">
            <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>nausheen701@gmail.com</h5>
          <a href="mailto: nausheen701@gmail.com">Send an email</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>+16463090871</h5>
          <a href="https://wa.me/16463090871" target='_blank'>Send a message</a>
          {/* <a href="https://api.whatsapp/send?phone+16463090871">Send a message</a> */}
          </article>
        
        </div>
    {/* END OF CONACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
        
    </section>
  )
}

export default Contact