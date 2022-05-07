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
            Nice to meet you! Mi name is Marcos, I'm from Argentina and I'm currently 
            studying Computer Science at Harvard University. Also I have a Diploma in 
            Software Development at Henry's Bootcamp.<br/>
            I have been developing in the area of Full Stack Web Development for 1 year, 
            with an specialization in the Javascript/Typescript libraries as 
            React - React Native - Nodejs. Also I have taken different courses about 
            the latest technologies in Udemy and Edx. 
          </p>
          <p>
            Currently, I'm working in the freelance market as a Full Stack Developer 
            while studying Computer Science at Harvard University.<br/>
            I'm available at DM for any doubts or proposal 
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