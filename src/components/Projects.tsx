import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import appclima from '../images/appclima.png'
import blogcafe from '../images/blogcafe.png'
import countrys from '../images/countrys.png'
import ecommerce from '../images/ecommerce.png'
import taskapp from '../images/taskapp.png'
import tesla from '../images/tesla.png'
import zooper from '../images/zooper.png'

import 'swiper/css';
import '../styles/projects.css'

function Projects() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide tag='div'>
          <img className='imgProject' src={zooper} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={ecommerce} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={countrys} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={taskapp} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={tesla} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={appclima} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide>
          <img className='imgProject' src={blogcafe} alt='zooperTrivia'/>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Projects