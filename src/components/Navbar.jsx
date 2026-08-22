import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from "../assets/assets"

const Navbar = ({ onOpenTool }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [mobileSuiteExpanded, setMobileSuiteExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const navLinks = [
    { title: 'Home', href: '#header' },
    { title: 'About', href: '#about' },
    { title: 'Properties', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  const tools = [
    {
      id: 'calculator',
      name: 'Mortgage Calculator',
      desc: 'Live loan, tax & ROI models',
      tag: 'Live ROI',
      color: 'from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
          <line x1="8" y1="6" x2="16" y2="6" strokeWidth="2" />
          <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'virtualTour',
      name: '3D Virtual Tours',
      desc: 'Spatial walkthroughs & twilight modes',
      tag: 'Interactive 3D',
      color: 'from-indigo-500/20 to-indigo-600/20 text-indigo-400 border-indigo-500/30',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      id: 'neighborhoods',
      name: 'Prime Neighborhoods',
      desc: 'Exclusive enclaves & city guides',
      tag: 'City Guides',
      color: 'from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/30',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'services',
      name: 'Private Client Services',
      desc: 'Confidential advisory & acquisitions',
      tag: 'VIP Concierge',
      color: 'from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'faq',
      name: 'Buyer & Investor FAQ',
      desc: 'Cross-border & escrow clarity',
      tag: 'Advisory Help',
      color: 'from-sky-500/20 to-sky-600/20 text-sky-400 border-sky-500/30',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center px-6 md:px-14 lg:px-24'>
        {/* Brand Logo */}
        <a href="#header" className='flex items-center gap-2 group'>
          <img 
            src={assets.logo} 
            alt="Home Dreams Logo" 
            className='h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105' 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => {
                if (link.href === '#contact') {
                  e.preventDefault();
                  if (onOpenTool) onOpenTool('contact');
                }
              }}
              className='text-slate-200 hover:text-blue-400 text-sm lg:text-base font-medium transition-colors duration-200 relative group py-1'
            >
              {link.title}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full' />
            </a>
          ))}

          {/* Tools & Services Dropdown Launcher with Hover & Click Support */}
          <div
            className="relative"
            onMouseEnter={() => setShowToolsDropdown(true)}
            onMouseLeave={() => setShowToolsDropdown(false)}
          >
            <button
              onClick={() => setShowToolsDropdown(!showToolsDropdown)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-slate-800/90 hover:bg-slate-800 text-blue-300 border border-slate-700/80 hover:border-blue-500/50 shadow-md transition-all cursor-pointer"
            >
              <span>Explore Suite</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${showToolsDropdown ? 'rotate-180 text-blue-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showToolsDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full right-0 pt-2 w-80 z-50"
                >
                  <div className="p-3 rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-2xl space-y-1.5">
                    <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-800/80 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Explore Suite Pages
                      </span>
                      <span className="text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                        Dedicated Pages
                      </span>
                    </div>

                    {tools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setShowToolsDropdown(false);
                          if (onOpenTool) onOpenTool(tool.id);
                        }}
                        className="w-full flex items-center gap-3.5 p-2.5 rounded-2xl text-left hover:bg-slate-900/90 border border-transparent hover:border-slate-800 text-slate-200 transition-all cursor-pointer group"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          {tool.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                            {tool.name}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {tool.desc}
                          </p>
                        </div>
                        <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Button */}
        <div className='hidden md:flex items-center gap-4'>
          <motion.button
            onClick={() => onOpenTool && onOpenTool('contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.96 }}
            className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-200 cursor-pointer inline-flex items-center justify-center'
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile Menu Button - Highly Visible Crisp SVG */}
        <button
          onClick={() => setShowMobileMenu(true)}
          aria-label="Open Navigation Menu"
          className='md:hidden p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white transition-all cursor-pointer focus:outline-none flex items-center justify-center'
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Animated Drawer Menu - Full Screen Overlay */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 w-screen h-screen min-h-screen z-[9999] bg-slate-950 flex flex-col overflow-y-auto'
          >
            {/* Top Bar inside Drawer */}
            <div className='flex justify-between items-center px-6 py-5 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl sticky top-0 z-10'>
              <img src={assets.logo} alt="Home Dreams" className='h-8 w-auto' />
              <button 
                onClick={() => setShowMobileMenu(false)}
                aria-label="Close Navigation Menu"
                className='p-2.5 rounded-full bg-slate-850 hover:bg-slate-800 text-white transition-colors cursor-pointer border border-slate-700 flex items-center justify-center'
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links & Content */}
            <div className='flex flex-col items-center justify-start flex-1 gap-4 p-6 bg-slate-950'>
              <div className="w-full max-w-sm flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    onClick={(e) => {
                      setShowMobileMenu(false);
                      if (link.href === '#contact') {
                        e.preventDefault();
                        if (onOpenTool) onOpenTool('contact');
                      }
                    }}
                    href={link.href}
                    className='w-full py-3 px-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 text-left text-base font-semibold text-slate-100 hover:text-blue-300 hover:bg-slate-900 transition-all block'
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Expandable Explore Suite Accordion with Enhanced Cards */}
              <div className="w-full max-w-sm">
                <button
                  type="button"
                  onClick={() => setMobileSuiteExpanded(!mobileSuiteExpanded)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between text-slate-200 hover:text-white transition-all cursor-pointer shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></div>
                    <span className="font-bold text-sm text-white">Explore Suite Pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
                    <span>{mobileSuiteExpanded ? 'Collapse' : 'Expand'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileSuiteExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {mobileSuiteExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-2.5 mt-3 overflow-hidden"
                    >
                      {tools.map((tool) => (
                        <motion.button
                          key={tool.id}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setShowMobileMenu(false);
                            if (onOpenTool) onOpenTool(tool.id);
                          }}
                          className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-850/80 border border-slate-800 hover:border-blue-500/50 flex items-center gap-3.5 text-left transition-all shadow-lg group cursor-pointer"
                        >
                          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${tool.color} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-inner`}>
                            {tool.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <p className="font-bold text-white text-xs group-hover:text-blue-300 transition-colors truncate">
                                {tool.name}
                              </p>
                              <span className="text-[9px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 flex-shrink-0">
                                {tool.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate">{tool.desc}</p>
                          </div>
                          <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  if (onOpenTool) onOpenTool('contact');
                }}
                className='mt-4 w-full max-w-sm text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-500/25 cursor-pointer text-sm flex items-center justify-center gap-2'
              >
                <span>Get in Touch with Concierge</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar




