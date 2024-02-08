import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoDocumentTextOutline, IoBriefcaseOutline } from "react-icons/io5";
import { Link } from 'react-scroll';
import './style.css';

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden">
      <div className='mx-auto bg-black/20 h-[96px] backdrop-blur-3xl rounded-full max-w-[460px] px-5 flex justify-around items-center text-2xl text-white/50'>
        <Link to='home' activeClass='active' smooth={true} spy={true}><AiOutlineHome /></Link>
        <Link to='about' activeClass='active' smooth={true} spy={true}><MdOutlinePersonOutline /></Link>
        <Link to='skills' activeClass='active' smooth={true} spy={true}><GoGraph /></Link>
        <Link to='projects' activeClass='active' smooth={true} spy={true}><IoDocumentTextOutline /></Link>
        <Link to='experience' activeClass='active' smooth={true} spy={true}><IoBriefcaseOutline /></Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true}><CiPhone /></Link>
        
        
        
        
        
      </div>
    </nav>
  );
}

export default Navbar;
