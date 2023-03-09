import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Desighn</h3>
          </div>
          <ul className='service_list'>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Brand and desighn systems for Developent</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Desighn of high fidelity system prototypes</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Desighn of Mobile and Web User Interface  </p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Software Redesighn</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Prototype Testing</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Front-end Development</p>
            </li>
          </ul>
        </article>



        <article className="service">
          <div className="service_head">
            <h3>Web Development and System Desighns</h3>
          </div>
          <ul className='service_list'>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Custom Website and Application Developments</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p>Web maintenance </p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Web Optimization  </p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Web Hosting</p>
            </li>
            <li>
              <HiCheck className='service_list-icon'/>
              <p> Trouble Shooting Services </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services