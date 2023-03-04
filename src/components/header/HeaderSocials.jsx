import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/mulwa-joseph-5b72a3208/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/Mulwajoseph' target="_blank"><BsGithub /></a>
        <a href='https:dribbble.com' target="_blank"><FaDribbbleSquare /></a>
    </div>
  )
} 

export default HeaderSocials