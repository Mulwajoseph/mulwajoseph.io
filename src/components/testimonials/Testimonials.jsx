import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/JoyceKithumbi.jpg'
import AVTR2 from '../../assets/RhodaMuthangya.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
;


const data= [
  {
    avatar:AVTR1,
    name: 'oyce Kithumbi',
    review: 'He has been my partner since day one.Through the e application he made for my business,I have met 20x clients than before'
  },
  {
    avatar:AVTR2,
    name: 'Rhoda Muthangya',
    review: 'Thank you for digitizing my company'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials_container" 
       // install Swiper modules
       modules={[Pagination,Navigation]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src= {avatar} />
          </div>
          <h5 className='client-name'>J{name}</h5>
            <small className='client-review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials 