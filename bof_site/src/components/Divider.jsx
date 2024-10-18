import React from 'react'
import '../styles/Divider.css'

const Divider = ({subtitle,title}) => {
  return (
    <div className='container_divider'>
        <p className='subtitle'>{subtitle}</p>
        <p className='title'>{title}</p>
        <div className='line'/>
    </div>
  )
}

export default Divider