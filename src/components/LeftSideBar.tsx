import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/leftSideBar.css'

function LeftSideBar() {
  return (
    <div className='containerLeftSideBar'>
      <Link className='mdLogo' to='/'>MD</Link>

      <div className='containerRedes'>   
        <a className='links' href='https://github.com/MarcosDavila1' target='_blank' rel="noreferrer">    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github'/>
        </a> 
        <a className='links' href='https://www.linkedin.com/in/marcosdavila2/' target='_blank' rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedin'/>   
        </a>
      </div>
    </div>
  )
}

export default LeftSideBar