import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio1.jpg'
// import IMG3 from '../../assets/portfolio1.jpg'
// import IMG4 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5> 
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt="" /> */}
          </div>
          <h3>Sirat Digital Prints</h3>
          <a href="https://github.com/Nausheen701/sirat-app" className='btn' target='_blank'>Github</a>
          <a href="www.youtube.com" className='btn btn-primary' target='_blank'>Video</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          {/* <img src={IMG2} alt="" /> */}
          </div>
          <h3>Endangered Species Tracker</h3>
          <a href="https://github.com/Nausheen701/endangered-species-tracker-app" className='btn' target='_blank'>Github</a>
          <a href="https://www.youtube.com/watch?v=riNNCUkGFqM" className='btn btn-primary' target='_blank'>Video</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          {/* <img src={IMG3} alt="" /> */}
          </div>
          <h3>Sirat Art Gallery</h3>
          <a href="https://github.com/Nausheen701/sirat-gallery-client-side" className='btn' target='_blank'>Github</a>
          <a href="https://www.youtube.com/watch?v=rFrkKAxYkEQ" className='btn btn-primary' target='_blank'>Video</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          {/* <img src={IMG4} alt="" /> */}
          </div>
          <h3>Polyglot</h3>
          <a href="https://github.com/Nausheen701/learn-a-language" className='btn' target='_blank'>Github</a>
          <a href="https://www.youtube.com/watch?v=R01bSkUo56s" className='btn btn-primary' target='_blank'>Video</a>
        </article>



      </div>
    
    
    </section>
  )
}

export default Portfolio