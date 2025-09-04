import React from 'react';
import Navbar from './Navbar';
import { motion, useSpring } from "framer-motion"

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar/>
      

      <div className="container text-center mx-auto py-60 px-6 md:px-20 lg:px-32 text-white">
        <h2 className=' text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
          <a href="#projects" className='bg-blue-400 py-3 px-6 rounded-full'>Projects</a>
          <a href="#contact">contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
