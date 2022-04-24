import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Fade } from "react-awesome-reveal";
import appclima from '../images/appclima.png'
import blogcafe from '../images/blogcafe.png'
import countrys from '../images/countrys.png'
import ecommerce from '../images/ecommerce.png'
import taskapp from '../images/taskapp.png'
import tesla from '../images/tesla.png'
import zooper from '../images/zooper.png'

import 'swiper/css';
import "swiper/css/navigation";
import '../styles/projects.css'

function Projects() {
  return (
    <Swiper
        preloadImages={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
    >
      <SwiperSlide className='slideContent'>
            <div className='textContent'>
                <Fade>
                    <h1>ZOOPER TRIVIA</h1>
                    <a href='https://www.zoopertrivia.com/' target='_blank' className='linkVisit'>Visit</a>
                </Fade>
            </div>
            <img className='imgProject' src={zooper} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
            <div className='textContent'>
                <Fade>
                    <h1>FAST TASKS</h1>
                    <a href='https://fasttasks.netlify.app/' target='_blank' className='linkVisit'>Visit</a>
                </Fade>
            </div>
            <img className='imgProject' src={taskapp} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
          <div className='textContent'>
              <Fade>
                <h1>ECOMMERCE</h1>
                <a href='https://github.com/MarcosDavila1/productspage' target='_blank' className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={ecommerce} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
          <div className='textContent'>
              <Fade>
                <h1>COUNTRY APP</h1>
                <a href='https://github.com/MarcosDavila1/PI-Country' target='_blank' className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={countrys} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
          <div className='textContent'>
              <Fade>
                <h1>TESLA</h1>
                <a href='https://github.com/MarcosDavila1/Tesla-Page' target='_blank' className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={tesla} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
          <div className='textContent'>
              <Fade>
                <h1>WEATHER APP</h1>
                <a href='https://github.com/MarcosDavila1/App-Clima' target='_blank' className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={appclima} alt='zooperTrivia'/>
      </SwiperSlide>

      <SwiperSlide className='slideContent'>
          <div className='textContent'>
              <Fade>
                <h1>BLOG CAFE</h1>
                <a href='https://github.com/MarcosDavila1' target={'_blank'} className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={blogcafe} alt='zooperTrivia'/>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Projects