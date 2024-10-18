import React from 'react'
import '../styles/Header.css'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='container_header'>
      <img src={Logo} alt='logo'/>
    </div>
  )
}
export default Header