import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nausheen-akhter-60b16b8a/" target="_blank"><BsLinkedin/></a> 
        <a href="https://github.com/Nausheen701" target="_blank"><FaGithub/></a> 
        {/* <a href="https://www.facebook.com/nausheen.akhter.165/" target="_blank"></a>  */}
        </div>

  )
}

export default HeaderSocials