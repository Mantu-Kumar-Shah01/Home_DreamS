import React from 'react'
import { motion } from 'framer-motion'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <section className='py-16 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden' id='testimonials'>
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto max-w-7xl relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3'>
            Client Experiences
          </span>
          <h2 className='text-3xl sm:text-5xl font-bold text-white tracking-tight'>
            Customer <span className='underline decoration-blue-500 underline-offset-8 font-light text-slate-300'>Testimonials</span>
          </h2>
          <p className='text-slate-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
            Real stories from those who found their dream homes with us.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className='relative rounded-3xl p-8 bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 group'
            >
              {/* Decorative Quote mark */}
              <div className='text-5xl font-serif text-blue-500/20 absolute top-6 right-6 select-none group-hover:text-blue-500/40 transition-colors'>
                “
              </div>

              <div>
                {/* Rating Stars */}
                <div className='flex items-center gap-1 mb-6'>
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <img key={i} src={assets.star_icon} alt="Star" className='w-4 h-4' />
                  ))}
                  <span className='text-xs font-semibold text-amber-400 ml-2'>5.0 Rating</span>
                </div>

                {/* Review Text */}
                <p className='text-slate-300 text-sm sm:text-base leading-relaxed italic relative z-10'>
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className='flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80'>
                <div className='relative'>
                  <img
                    className='w-14 h-14 rounded-full object-cover border-2 border-blue-500/40'
                    src={testimonial.image}
                    alt={testimonial.alt || testimonial.name}
                  />
                  <div className='absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 border-2 border-slate-900'>
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className='text-base font-bold text-white group-hover:text-blue-400 transition-colors'>
                    {testimonial.name}
                  </h3>
                  <p className='text-xs text-slate-400'>
                    {testimonial.title} {testimonial.company ? `• ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

