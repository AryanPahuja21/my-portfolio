import React from 'react';
import Avatar from '../assets/avatar.png';

const Hero = () => {
  return (
    <div className='h-screen grid grid-cols-1 lg:grid-cols-2'>
      <img src={Avatar} alt="Avatar" className='mx-auto'/>
      <div className='mx-auto'>Hi. I am Aryan Pahuja.</div>
    </div>
  )
}

export default Hero
