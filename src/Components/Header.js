import React from 'react'
import image from '../images/dp.png' 
import button from '../images/Button.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={image} alt='profile pic'className='dp'/>
      <h3 className='header-name'>Joanah Doe</h3>
      <div className="header-text">
      Frontend Developer
        </div>
        <div className="header-site">
            joanahdoe.io
        </div>
        <img src={button} alt="mail-button" />
    </div>
  )
}

export default Header



