import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoDocumentTextOutline, IoBriefcaseOutline } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden">
      <div className='mx-auto bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 flex justify-around items-center text-2xl text-white/50'>
        <Link to='home'><AiOutlineHome /></Link>
        <Link to='about'><MdOutlinePersonOutline /></Link>
        <Link to='skills'><GoGraph /></Link>
        <Link to='projects'><IoDocumentTextOutline /></Link>
        <Link to='experience'><IoBriefcaseOutline /></Link>
        <Link to='contact'><CiPhone /></Link>
        
        
        
        
        
      </div>
    </nav>
  );
}

export default Navbar;
