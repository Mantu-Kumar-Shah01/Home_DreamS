import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { assets } from '../assets/assets'

// Reusable Increasing Animated Counter Component
const AnimatedCounter = ({ from = 0, to, duration = 2, decimals = 0, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = from + (to - from) * easeOutProgress;
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
};

const About = ({ onOpenTool }) => {
  const stats = [
    { target: 12, suffix: '+', label: 'Years of Excellence', sub: 'Pioneering luxury design' },
    { target: 150, suffix: '+', label: 'Projects Completed', sub: 'Across top global cities' },
    { target: 25, suffix: '+', label: 'Mn. Sq. Ft. Delivered', sub: 'Precision architectural craft' },
    { target: 30, suffix: '+', label: 'Ongoing Developments', sub: 'Setting future benchmarks' },
  ];

  return (
    <section className='relative pt-16 pb-10 px-6 md:px-14 lg:px-24 bg-slate-950 overflow-hidden' id="about">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto max-w-7xl relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3'>
            Our Heritage & Vision
          </span>
          <h2 className='text-3xl sm:text-5xl font-bold text-white tracking-tight'>
            About <span className='underline decoration-blue-500 underline-offset-8 font-light text-slate-300'>Our Brand</span>
          </h2>
          <p className='text-slate-400 mt-4 text-sm sm:text-base max-w-xl mx-auto'>
            Passionate About Properties, Dedicated to Your Vision
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* Transparent Brand Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='lg:col-span-5 relative flex items-center justify-center'
          >
            <img 
              src={assets.brand_img} 
              alt="Home Dreams Luxury Architecture" 
              className='w-full max-w-md h-auto object-contain drop-shadow-2xl' 
            />
          </motion.div>

          {/* Stats & Narrative Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='lg:col-span-7 flex flex-col justify-between'
          >
            {/* 4 Stats Grid with Increasing Numbers */}
            <div className='grid grid-cols-2 gap-4 sm:gap-6 mb-8'>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                  className='p-5 sm:p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-md transition-all duration-300'
                >
                  <p className='text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300'>
                    <AnimatedCounter to={stat.target} suffix={stat.suffix} duration={2} />
                  </p>
                  <p className='text-sm sm:text-base font-semibold text-slate-200 mt-1'>
                    {stat.label}
                  </p>
                  <p className='text-xs text-slate-400 mt-1 hidden sm:block'>
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Narrative text */}
            <div className='space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed'>
              <p>
                At <span className='text-white font-semibold'>Home Dreams</span>, we do not merely construct houses; we sculpt bespoke sanctuaries tailored to the nuances of modern, discerning lifestyles. Every property in our portfolio represents a harmonious blend of sustainable innovation, cutting-edge technology, and timeless aesthetics.
              </p>
              <p className='text-slate-400 text-xs sm:text-sm'>
                From private coastal villas to majestic city penthouses, our team guarantees transparent consultation, flawless advisory, and concierge-level service through every stage of your real estate journey.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className='mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4'>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-7 py-3 rounded-full shadow-lg shadow-blue-500/20 text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2'
              >
                Explore Our Portfolio
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>

              {onOpenTool && (
                <button
                  type="button"
                  onClick={() => onOpenTool('services')}
                  className='bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-5 py-3 rounded-full border border-slate-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-1.5'
                >
                  👑 Bespoke Client Services
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

