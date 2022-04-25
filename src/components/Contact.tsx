import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='containerContact'>
        <div className='containerInfo'>
            <h2>Contact</h2>
            <h3>Phone</h3>
            <p>+549 3435451046</p>
            <h3>Email</h3>
            <p>marcos.duarte242@gmail.com</p>
            <h2>Others</h2>
            <h3>Languages</h3>
            <p>English - C1, Spanish - Fluent, Portuguese - Fluent</p>
            <h3>Tech Skills</h3>
            <p>
                React, Redux, Node, Express, Firebase, Javascript, 
                Typescript, MongoDB, PostgreSql, Sequelize, Css, Git
            </p>
            <h3></h3>
            <h3>Willing to Relocate</h3>
            <p>Yes</p>
        </div>

        <div className='containerForm'>
            <h2>Contact Form</h2>
            <form className='form'>
                <label>Name*</label>
                <input placeholder='Your name'/>

                <label>Email*</label>
                <input placeholder='Your email'/>

                <label>Message*</label>
                <textarea rows={1} placeholder='Type your message here'/>

                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact