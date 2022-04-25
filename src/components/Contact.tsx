import React, { useState } from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface inputs {
    user_name: string,
    user_email: string,
    user_message: string
} 

function Contact() {

    const [input, setInput] = useState<inputs>({
        user_name: '',
        user_email: '',
        user_message: ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }
    

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        input.user_name === '' || input.user_email === '' || input.user_message === ''
            ? toast.error("All fields are required")
            : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.user_email)
                ? emailjs.sendForm('service_zi0n822', 'template_tqx8ram', e.currentTarget, 'rwvuPTyBOE1OgEzRP')
                    .then(res => (toast.success("Email sent successfully"), setInput({
                        user_name: '',
                        user_email: '',
                        user_message: ''}
                    )))
                    .catch(err => toast.error("Something went wrong"))
                : toast.error("Invalid email")
            
            
    }
    
  return (
    <div className='containerContact'>
        <div className='containerInfo'>
            <h2>Contact</h2>
            <h3>Phone</h3>
            <p>+549 3435451046</p>
            <h3>Email</h3>
            <p>marcos.duarte242@gmail.com</p>
            <h3>Location</h3>
            <p>Argentina</p>
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
            <form className='form' onSubmit={sendEmail}>
                <label>Name<span>*</span></label>
                <input placeholder='Your name' name='user_name' value={input.user_name} onChange={handleChange}/>

                <label>Email<span>*</span></label>
                <input placeholder='Your email' name='user_email' value={input.user_email} onChange={handleChange}/>

                <label>Message<span>*</span></label>
                <textarea rows={1} placeholder='Type your message here' name='user_message' value={input.user_message} onChange={handleChange}/>

                <button type='submit'>Send Message</button>
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Contact