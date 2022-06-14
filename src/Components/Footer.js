import React from 'react'
import ig from '../images/ig.png' 
import tw from '../images/tw.png' 
import gh from '../images/gh.png' 
import fb from '../images/fb.png' 
import li from '../images/li.png' 


const Footer = () => {
  return (
    <div className='footer'>
      <img src={tw} alt="Instagram logo" className= 'foo-img'/>
      <img src={fb} alt="Instagram logo" className= 'foo-img'/>
      <img src={ig} alt="Instagram logo" className= 'foo-img'/>
      <img src={li} alt="Instagram logo" className= 'foo-img'/>
      <img src={gh} alt="Instagram logo" className= 'foo-img'/>
    </div>
  )
}

export default Footer
