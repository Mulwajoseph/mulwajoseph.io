import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/zurukenya1.png'
import IMG2 from '../../assets/zurukenya2.png'
import IMG3 from '../../assets/zurukenya3.png'
import IMG4 from '../../assets/laikipia-fix.png'
import IMG5 from '../../assets/project1.png'
import IMG6 from '../../assets/project3.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG1} alt="" />

          <h3>This is my Recently done Project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG2} alt="" />

          <h3>This is my recently done Project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG3} alt="" />

          <h3>This is my recently done Project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG4} alt="" />

          <h3>This is my ongoing project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG5} alt="" />

          <h3>This is my ongoing project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio-_item-image"></div>
          <img src={IMG6} alt="" />

          <h3>This is my ongoing Project</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn'>Github</a>
          <a href='https://github.com/Mulwajoseph/Zuru-Kenya-Website' className='btn btn-primary' target ='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio