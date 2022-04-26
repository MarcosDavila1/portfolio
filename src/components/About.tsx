import React from 'react'
import '../styles/about.css'
import perfil from '../images/perfil.webp'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className='containerAbout'>
      
      <div className='containerPerfil'>
        <Fade>
          <div className='cuadrado'></div>
          <img src={perfil} alt='perfil' className='imgPerfil' />
        </Fade>
      </div>

      <div className='containerContentAbout'>
        <Fade>
          <h1>About Me</h1>
          <p>
            Since I was a kid, I was into technology and games. 
            How fast the technolgies world changes is what 
            I liked the most and encouraged me to continue learning everyday in order 
            to be always up to date with the latest technologies, projects and news. 
          </p>
          <p>
            I developed all my skills at Henry Bootcamp and at Udemy. 
            I learned and upgraded my abilities in Javascript, React, Redux, NodeJs, 
            Express, GIT, Firebase, Socket.io, Css and plenty of other soft skills, 
            while I worked in different projects. 
            Also I have experience working with agile methodologies as Scrum.
            I am currently improving my competencies in Typescript and Amazon Web Services. 
          </p>
        </Fade>
        <div className='containerBtnAbout'>
          <Fade>
            <button><Link to='/contact'>Contact Me</Link></button>
            <button><a href='https://drive.google.com/file/d/1RKSlhSnhxHnxuTtXBYFsLP4oTmPajhmm/view?usp=sharing' target='_blank' rel='noreferrer'>Download CV</a></button>
          </Fade>
        </div>
      </div>

    </div>
  )
}

export default About