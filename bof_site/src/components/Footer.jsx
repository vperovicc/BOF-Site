import React from 'react'
import '../styles/Footer.css'
import Sven from '../assets/sven.svg'
import Instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='container_footer'>
        <img src={Sven} alt='Sven Footer Image'/>
        <div className='bottom_footer'>
            <a href='https://www.instagram.com/svenagiccoaching/?hl=en' target='_blank' rel="noopener noreferrer"><img src={Instagram} alt='Instagram'/></a>
            <p>Business of Fitness All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer