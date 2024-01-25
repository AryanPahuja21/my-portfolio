import React from 'react';
import Avatar from '../assets/avatar.png';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='h-screen grid grid-cols-1 lg:grid-cols-2 items-center'>
      <img src={Avatar} alt="Avatar" className='mx-auto'/>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl'>Hello,</h1>
        <h1 className='text-6xl'>I am</h1>
          <h1 className='text-6xl'>
          
          <ReactTyped
          className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500'
          strings={[
            "Aryan Pahuja",
            "A MERN Developer",
            "Smart",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          />
          </h1>
      </div>
    </div>
  )
}

export default Hero
