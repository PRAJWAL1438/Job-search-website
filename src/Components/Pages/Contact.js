import React from 'react'
import './Contact.css'
import { FaFacebook, FaTwitter,FaLinkedin,FaYoutube,FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='Number'>
      <div className='Div'>
      <h1 className='Child'>Toll free number 080545456</h1>
      </div>
      <div className='Icons'>
      <FaFacebook size={90} />
      <FaTwitter size={90} />
      <FaLinkedin size={90} />
      <FaYoutube size={90}/>
      <FaInstagram size={90}/>
      </div>
    </div>
  )
}

export default Contact