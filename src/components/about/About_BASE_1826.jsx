// import React from 'react'
// import './about.css'
// import ME from '../../assets/about.jpg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

// const About = () => {
//   return (
//     <section id='about'>
//       <h5>Get To Know</h5>
//       <h2>About Me</h2>


//     <div className="container about_container">
//       <div className="about_me">
//         <div className="about_me-image">
//           <img src={ME} alt="personal Photo" />
//         </div>

//       </div>
//       <div className="about_content">
//         <div className="about_cards">
//           <article className='about_card'>
//             <FaAward  className='about_icon'/>
//             <h5>Experience</h5>
//             <small> 1+ Years Learning Experience</small>
//           </article>
//           <article className='about_card'>
//             <FiUsers  className='about_icon'/>
//             <h5>Clients</h5>
//             <small>2 clients </small>
//           </article>
//           <article className='about_card'>
//             <VscFolderLibrary  className='about_icon'/>
//             <h5>Projects</h5>
//             <small> 20+ Completed Projects </small>
//           </article>
//         </div>
//         <p>
//         I am a talented and ethusiastic personnel with a great aptitude to work
//         in an environment which encourages me to succeed and grow
//         professionally where I can utilize my skills and knowledge.
//         appropriately
//         </p>
//         <a href='#contact' className='btn btn-primary'>Let's Talk</a>

//       </div>
//     </div>
//     </section>
//   )
// }

// export default About

import React from 'react';
import './about.css';
import ME from '../../assets/about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="photo of me" />
        </div>

      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward  className='about_icon'/>
            <h5>Experience</h5>
            <small> 1+ Years Learning Experience</small>
          </article>
          <article className='about_card'>
            <FiUsers  className='about_icon'/>
            <h5>Clients</h5>
            <small>2 clients </small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary  className='about_icon'/>
            <h5>Projects</h5>
            <small> 20+ Completed Projects </small>
          </article>
        </div>
        <p>
        I am a talented and ethusiastic personnel with a great aptitude to work
        in an environment which encourages me to succeed and grow
        professionally where I can utilize my skills and knowledge.
        appropriately
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}

export default About;
