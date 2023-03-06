// import React from 'react'
// import './footer.css'
// import {AiOutlineFacebook} from 'react-icons/ai'
// import {AiFillInstagram} from 'react-icons/ai'
// import {AiOutlineTwitter} from 'react-icons/ai'

// const footer = () => {
//   return (
//     <div>
//       <footer>
//         <a href='#' className='footer_logo'>Joseph</a>
//         <ul className='permalinks'>
//           <li><a href='#'>Home</a></li>
//           <li><a href='#about'>About</a></li>
//           <li><a href='#experience'>Experience</a></li>
//           <li><a href='#services'>services</a></li>
//           <li><a href='#portfolio'>Portfolio</a></li>
//           <li><a href='#testimonials'>Testimonials</a></li>
//           <li><a href='#contact'>Contact</a></li>
//         </ul>

//         <div className="footer_socials">
//           <a href='https://web.facebook.com/mulwa.joseph.754' target ='_blank'><AiOutlineFacebook/></a>
//           <a href='https://www.instagram.com/mulwa588/' target ='_blank'><AiFillInstagram/></a>
//           <a href='https://twitter.com/Joseeh254' target ='_blank' ><AiOutlineTwitter/> </a>
//         </div>

//         <div className="footer_copyright">
//           <small>&copy; Mulwa Joseph. All rights reserved</small>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default footer

import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href='#' className='footer_logo'>Joseph</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className="footer_socials">
          <a href='https://web.facebook.com/mulwa.joseph.754' target ='_blank' rel="noreferrer"><AiOutlineFacebook/></a>
          <a href='https://www.instagram.com/mulwa588/' target ='_blank' rel="noreferrer"><AiFillInstagram/></a>
          <a href='https://twitter.com/Joseeh254' target ='_blank' rel="noreferrer"><AiOutlineTwitter/> </a>
        </div>

        <div className="footer_copy">
          <small>&copy; Mulwa Joseph. All rights reserved</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer
