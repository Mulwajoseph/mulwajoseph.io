import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ep2t82', 'template_9yac6tr', form.current, 'qOs_taqKjsaQtZcfZ')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mulwajose.jm@gmail.com</h5>
            <a href='mailto:mulwajose.jm@gmail.com' target ="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Joseph Mukungi</h5>
            <a href='https://m/me/mulwa.joseph.754/' target ="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+254790558088' target ="_blank">Send a message</a>
          </article>
        </div>

        {/* contacts options */}
        <form ref= {form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="Message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className=' btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact