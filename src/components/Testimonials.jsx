import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
const Testimonials = () => {
    return (
        <div className='container mx-auto my-10 lg:px-32 w-full overflow-hidden' id='testimonial' style={{ border: "none" }}>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who found Home wit Us</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img
                            className='w-20 h-20 rounded-full mx-auto mb-4'
                            src={testimonial.image}
                            alt={testimonial.alt}
                        />
                        <h2 className='text-lg font-semibold'>{testimonial.name}</h2>
                        <p className='text-sm text-gray-500 mb-2'>{testimonial.title}</p>
                        <div className='flex justify-center items-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                <img key={i} src={assets.star_icon} alt='star' />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
