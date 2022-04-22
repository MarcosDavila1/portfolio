import React from 'react'
import '../styles/leftSideBar.css'

function LeftSideBar() {
  return (
    <div className='containerLeftSideBar'>
      <a href='#'>
        <h1>MD</h1>
      </a>

      <div className='containerRedes'>   
        <a className='links' href='https://github.com/MarcosDavila1' target='_blank'>    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='github'/>
        </a> 
        <a className='links' href='https://www.linkedin.com/in/marcosdavila2/' target='_blank'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedin'/>   
        </a>
      </div>
    </div>
  )
}

export default LeftSideBar