import React from 'react';
import Avatar from '../assets/avatar.png';
import { ReactTyped } from "react-typed";
import Header from './Header';

const Hero = () => {
  return (
    <div className='h-screen' id='home'>
    <Header/>
    <div className='h-fit grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
      <img src={Avatar} alt="Avatar" className='mx-auto w-[50vw] lg:w-auto'/>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl lg:text-6xl mt-24 lg:mt-0'>Hello,</h1>
        <h1 className='text-5xl lg:text-6xl'>I am</h1>
          <h1 className='text-5xl lg:text-6xl'>
          
          <ReactTyped
          className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500'
          strings={[
            "Aryan Pahuja",
            "A MERN Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          />
          </h1>
      </div>
    </div>
    </div>
  )
}

export default Hero
