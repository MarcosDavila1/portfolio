import React from 'react'
import '../styles/about.css'
import perfil from '../images/perfil.jpg'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse bibendum odio nisl, nec consectetur ante vulputate a. 
            Donec posuere ex porttitor porta auctor. Aliquam pharetra ac arcu sed sagittis. 
            Sed sapien mi, elementum sit amet finibus eu, tristique id erat. 
          </p>
          <p>
            Nam ipsum velit, sagittis at odio sit amet, congue dignissim justo. 
            Nulla mollis est non erat sodales, at sollicitudin ante sollicitudin. 
            Etiam maximus lobortis tortor. 
          </p>
        </Fade>
        <div className='containerBtnAbout'>
          <Fade>
            <button><Link to='/contact'>Contact Me</Link></button>
            <button><a href='https://drive.google.com/file/d/1RKSlhSnhxHnxuTtXBYFsLP4oTmPajhmm/view?usp=sharing' target='_blank'>Download CV</a></button>
          </Fade>
        </div>
      </div>

    </div>
  )
}

export default About