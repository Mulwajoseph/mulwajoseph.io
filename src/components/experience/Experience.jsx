import React from 'react'
import './experience.css'
import {BiBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>


      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article >
            <article className='experience_details'>
            <BiBadgeCheck  className='exprience_details-icon'/>
            <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Advanced Beginner</small>
            </div>

            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <article className='experience_details'>
              <BiBadgeCheck  className='exprience_details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck  className='exprience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>  Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon' />
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className='experience_details'>
              <BiBadgeCheck className='exprience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Advanced Beginner</small>
              </div>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience