import React, { useState,useEffect } from 'react'
import { assets, projectsData } from "../assets/assets"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow,setcardsToShow] = useState(1); // you can later make this dynamic
    useEffect(() => {
      const updateCardsToShow=()=>{

        if(window.innerWidth>=1024){
          setcardsToShow(projectsData.length)
        }
        else
          {
            setcardsToShow(1)
          }
        };
        updateCardsToShow();
        window.addEventListener('resize',updateCardsToShow)
        return ()=> window.removeEventListener('resize',updateCardsToShow)
    }, [])
    
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
  }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Complete</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Space, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className='flex justify-end mb-5 mx-5 mt-20 p-5 items-center'>
        <button onClick={prevProject} aria-label='Previous Project' className='p-3 px-5 mr-2 bg-gray-400 rounded cursor-pointer'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} aria-label='Next Project' className='p-3 px-5 mr-2 bg-gray-400 rounded cursor-pointer'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 text-center'>
                <div className='bg-white inline-block px-6 py-3 shadow-md'>
                  <h2 className='text-2 font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    <span>{project.price}</span> | <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects
