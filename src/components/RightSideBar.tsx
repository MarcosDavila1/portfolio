import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/rightSideBar.css'

function RightSideBar() {
  return (
    <div className='containerRightSideBar'>
      <NavLink exact  className='paths' to={'/'} activeClassName='activePath'><h2>Home</h2></NavLink>
      <NavLink exact  className='paths' to={'/about'} activeClassName='activePath'><h2>About</h2></NavLink>
      <NavLink exact  className='paths' to={'/projects'} activeClassName='activePath'><h2>Projects</h2></NavLink>
      <NavLink exact  className='paths' to={'/skills'} activeClassName='activePath'><h2>Skills</h2></NavLink>
      <NavLink exact  className='paths' to={'/contact'} activeClassName='activePath'><h2>Contact</h2></NavLink>
    </div>
  )
}

export default RightSideBar