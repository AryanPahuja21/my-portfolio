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
        <h1 className='text-6xl lg:text-8xl mt-24 lg:mt-0 font-hero'>Welcome</h1>
          <h1 className='text-4xl lg:text-5xl'>
          
          <ReactTyped
          className='font-extrabold font-hero text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500'
          strings={[
            "I am Aryan Pahuja",
            "I am a MERN Developer",
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
