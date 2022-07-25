import React from 'react'
import './portfolio.css'
import data from '../Data'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio1.jpg'
// import IMG3 from '../../assets/portfolio1.jpg'
// import IMG4 from '../../assets/portfolio1.jpg'


const Portfolio = () => { 

  return (
    <section id='portfolio'>
     
      <h2>Portfolio</h2> 
      <div className="container portfolio_container">
       {
        data.map(({id, title, github, demo}) => { 
          return (
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            {/* <img src={IMG1} alt="title" /> */}
          </div> 
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  )
}
 {/* <h5>My recent work</h5>  */}
export default Portfolio

// const data = [
//   { 
//     id: 1,
//     title: 'Sirat Digital Prints',
//     github: 'https://github.com/Nausheen701/sirat-app',
//     demo: 'Video Needed'
//   },

//   { 
//     id: 2,
//     title: 'Endangered Species Tracker',
//     github: 'https://github.com/Nausheen701/endangered-species-tracker-app',
//     demo: 'https://www.youtube.com/watch?v=riNNCUkGFq'
//   },

//   { 
//     id: 3,
//     title: 'Sirat Art Gallery',
//     github: 'https://github.com/Nausheen701/sirat-gallery-client-side',
//     demo: 'https://www.youtube.com/watch?v=riNNCUkGFq'
//   },

//   { 
//     id: 4,
//     title: 'Polyglot',
//     github: 'https://github.com/Nausheen701/learn-a-language',
//     demo: 'https://www.youtube.com/watch?v=R01bSkUo56s'
//   }
// ]