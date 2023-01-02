import React from 'react'
import "./Footer.css"
import linkedIn from './icon-linkedin.png'
import github from './icon-github.png'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='wave' fill="#663333" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,282.7C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
        <div className="socialContainer">
          <a href="https://www.linkedin.com/in/shashi-bhushan-kumar-35b6401a8" className='iconSocial' target='_blank'><img src={linkedIn} alt="" /></a>
          <a href="https://github.com/Bhushan727" className='iconSocial' target='_blank'><img src={github} alt="" /></a>
        </div>
        <div className="container">
            <p className="copyright">
              © 2022 Shashi Bhushan Kumar
            </p>
        </div>

    </div>
  )
}

export default Footer