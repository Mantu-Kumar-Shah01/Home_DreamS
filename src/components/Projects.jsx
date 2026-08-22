import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets, projectsData } from "../assets/assets"

const Projects = ({ onSelectProperty }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, projectsData.length - cardsToShow);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className='pt-8 pb-16 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden' id='projects'>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto max-w-7xl'>
        {/* Section Header & Slider Controls */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className='text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3'>
              Signature Portfolio
            </span>
            <h2 className='text-3xl sm:text-5xl font-bold text-white tracking-tight'>
              Featured <span className='underline decoration-blue-500 underline-offset-8 font-light text-slate-300'>Properties</span>
            </h2>
            <p className='text-slate-400 mt-3 text-sm sm:text-base max-w-lg'>
              Crafting Space, Building Legacies — Explore our handpicked luxury portfolio.
            </p>
          </motion.div>

          {/* Slider Arrow Controls */}
          <div className='flex items-center gap-3 self-end md:self-auto'>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              whileTap={{ scale: 0.92 }}
              onClick={prevProject} 
              aria-label='Previous Project' 
              className='p-3.5 rounded-full bg-slate-800/80 border border-slate-700 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md'
            >
              <img src={assets.left_arrow} alt="Previous" className='w-4 h-4 invert brightness-0' />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              whileTap={{ scale: 0.92 }}
              onClick={nextProject} 
              aria-label='Next Project' 
              className='p-3.5 rounded-full bg-slate-800/80 border border-slate-700 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md'
            >
              <img src={assets.right_arrow} alt="Next" className='w-4 h-4 invert brightness-0' />
            </motion.button>
          </div>
        </div>

        {/* Project Slider Viewport */}
        <div className='overflow-hidden rounded-3xl p-1'>
          <div
            className='flex transition-transform duration-500 ease-out gap-6'
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow + (cardsToShow > 1 ? 24 / cardsToShow : 0))}%)`
            }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative flex-shrink-0 group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col cursor-pointer'
                style={{
                  width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * (24 / cardsToShow)}px)`
                }}
                onClick={() => onSelectProperty && onSelectProperty(project)}
              >
                {/* Image Container with Zoom & Badge */}
                <div className='relative h-64 sm:h-72 overflow-hidden'>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent' />
                  
                  {/* Category Tag Badge */}
                  {project.tag && (
                    <span className='absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-md shadow-md'>
                      {project.tag}
                    </span>
                  )}

                  {/* Price Tag Overlay */}
                  <div className='absolute bottom-4 left-4'>
                    <p className='text-xs text-slate-300 uppercase tracking-wider font-medium'>Guide Price</p>
                    <p className='text-2xl font-bold text-white drop-shadow-md'>{project.price}</p>
                  </div>
                </div>

                {/* Property Details */}
                <div className='p-6 flex flex-col flex-1 justify-between'>
                  <div>
                    <h3 className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-slate-400 text-xs sm:text-sm flex items-center gap-1.5 mt-1'>
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                  </div>

                  {/* Property Specs Pill Grid */}
                  <div className='grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-center'>
                    <div className='bg-slate-800/60 rounded-lg py-1.5 px-2'>
                      <p className='text-xs text-slate-400 font-light'>Beds</p>
                      <p className='text-xs font-semibold text-slate-200'>{project.beds || "4 Beds"}</p>
                    </div>
                    <div className='bg-slate-800/60 rounded-lg py-1.5 px-2'>
                      <p className='text-xs text-slate-400 font-light'>Baths</p>
                      <p className='text-xs font-semibold text-slate-200'>{project.baths || "3 Baths"}</p>
                    </div>
                    <div className='bg-slate-800/60 rounded-lg py-1.5 px-2'>
                      <p className='text-xs text-slate-400 font-light'>Area</p>
                      <p className='text-xs font-semibold text-slate-200'>{project.sqft || "3,200 sqft"}</p>
                    </div>
                  </div>

                  {/* Inquire / View Details Action */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectProperty) onSelectProperty(project);
                    }}
                    className='mt-5 w-full text-center py-2.5 rounded-xl bg-slate-800 group-hover:bg-blue-600 text-slate-200 group-hover:text-white text-xs font-semibold transition-all duration-300 border border-slate-700 group-hover:border-blue-500 cursor-pointer'
                  >
                    View Architectural Details & Tour →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Indicators */}
        <div className='flex justify-center items-center gap-2 mt-8'>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


