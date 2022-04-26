import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Fade } from "react-awesome-reveal";

import 'swiper/css';
import "swiper/css/navigation";
import '../styles/projects.css'

interface Props {
  projects: Array<{
    name: string,
    url: string,
    image: string,
  }>
}

function Projects({projects}: Props) {
  return (
    <Swiper
        preloadImages={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
    >

      {projects && projects.map((project, i) => (
        <SwiperSlide key={i} className='slideContent'>
          <div className='textContent'>
              <Fade>
                  <h1>{project.name}</h1>
                  <a href={project.url} target='_blank' className='linkVisit'>Visit</a>
              </Fade>
          </div>
          <img className='imgProject' src={project.image} alt='zooperTrivia'/>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  )
}

export default Projects