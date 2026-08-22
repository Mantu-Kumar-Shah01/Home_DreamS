import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { motion, useInView } from 'framer-motion';

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
      
      // Easing curve (easeOutExpo)
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

const Header = ({ onOpenTool }) => {
  return (
    <div
      className="relative min-h-screen lg:h-screen bg-cover bg-center overflow-hidden flex flex-col justify-between"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      {/* Dark Gradient Overlay for Maximum Legibility & Cinematic Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />

      {/* Top Navbar */}
      <Navbar onOpenTool={onOpenTool} />

      {/* Hero Content Section - Scaled cleanly to fit 100vh */}
      <div className="relative z-10 container mx-auto px-6 md:px-14 lg:px-24 flex-1 flex flex-col items-center justify-center text-center pt-24 sm:pt-28 pb-4 sm:pb-6">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs md:text-sm font-medium mb-3 sm:mb-4 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Premier Luxury Residences & Estates
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl tracking-tight leading-[1.12] mb-3 sm:mb-4"
        >
          Explore Homes That Fit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Dreams</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-6 sm:mb-8"
        >
          Discover curated architectural masterpieces, bespoke waterfront villas, and prime urban penthouses built for generational living.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-7 rounded-full shadow-lg shadow-blue-500/25 transition-all text-xs sm:text-sm md:text-base cursor-pointer"
          >
            Explore Projects
          </motion.a>
          
          <motion.button
            onClick={() => onOpenTool && onOpenTool('contact')}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.96 }}
            className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-7 rounded-full border border-white/30 backdrop-blur-md transition-all text-xs sm:text-sm md:text-base cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Feature Highlights Bar with Increasing Counter Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="relative z-10 container mx-auto px-6 md:px-14 lg:px-24 pb-4 sm:pb-6"
      >
        <div className="glass-card rounded-2xl p-3 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              <AnimatedCounter to={100} suffix="%" duration={2.2} />
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">Verified Titles</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              <AnimatedCounter from={0} to={2.5} decimals={1} prefix="$" suffix="B+" duration={2.2} />
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">Property Volume</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              <AnimatedCounter to={400} suffix="+" duration={2.4} />
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">Prime Locations</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              <AnimatedCounter to={24} suffix="/7" duration={2} />
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-0.5">Client Concierge</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;


