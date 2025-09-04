import React, { useState ,useEffect} from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
  const [showmobilemenu, setshowmobilemenu] = useState(false);
  useEffect(() => {
    if(showmobilemenu)
    {
      document.body.style.overflow="hidden"
    }
    else
    {
      document.body.style.overflow="auto"
    }
    return ()=>  {
      document.body.style.overflow="auto"
    }
  }, [showmobilemenu])
  

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:py-20 lg:px-32 bg-transparent'>
        
        {/* Logo */}
        <img src={assets.logo_dark} alt="Logo" />
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white'>
          <li><a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#about" className='cursor-pointer hover:text-gray-400'>About</a></li>
          <li><a href="#projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
          <li><a href="#testimonial" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
        </ul>
        
        {/* Sign Up Button */}
        <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'>Sign Up</button>
        
        {/* Mobile Menu Icon */}
        <img 
          onClick={() => setshowmobilemenu(true)} 
          src={assets.menu_icon} 
          alt="Menu" 
          className='md:hidden w-7 cursor-pointer'
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showmobilemenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 bottom-0 bg-white transition-all overflow-hidden`}>
        <div className='flex justify-end p-6'>
          <img 
             onClick={() => setshowmobilemenu(false)} 
            src={assets.cross_icon} 
            alt="Close" 
            width={20} 
            className='cursor-pointer'
          />
        </div>

        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
          <li><a  onClick={() => setshowmobilemenu(false)}  href="#header" className='px-4 py-2 rounded-full inline-block'>Home</a></li>
          <li><a  onClick={() => setshowmobilemenu(false)}  href="#about" className='px-4 py-2 rounded-full inline-block'>About</a></li>
          <li><a  onClick={() => setshowmobilemenu(false)}  href="#projects" className='px-4 py-2 rounded-full inline-block'>Projects</a></li>
          <li><a  onClick={() => setshowmobilemenu(false)}  href="#testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonials</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

