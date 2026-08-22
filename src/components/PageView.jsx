import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Calculator from './Calculator'
import VirtualTour from './VirtualTour'
import Neighborhoods from './Neighborhoods'
import Services from './Services'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

const PageView = ({ page, onNavigate }) => {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSuiteExpanded, setMobileSuiteExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

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

  const pageComponents = {
    calculator: <Calculator onNavigate={onNavigate} />,
    virtualTour: <VirtualTour onNavigate={onNavigate} />,
    neighborhoods: <Neighborhoods onNavigate={onNavigate} />,
    services: <Services onNavigate={onNavigate} />,
    faq: <FAQ onNavigate={onNavigate} />,
    contact: <Contact onNavigate={onNavigate} />
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Sticky Fixed Navigation Bar for Dedicated Page */}
      <header className="fixed top-0 left-0 w-full z-50 glass-nav shadow-xl py-3.5 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-2xl">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-14 lg:px-24">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img src={assets.logo} alt="Home Dreams" className="h-8 md:h-9 w-auto" />
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Explore Suite dropdown on PageView */}
            <div
              className="relative hidden sm:block"
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

              {showToolsDropdown && (
                <div className="absolute top-full right-0 pt-2 w-80 z-50">
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
                          onNavigate(tool.id);
                        }}
                        className={`w-full flex items-center gap-3.5 p-2.5 rounded-2xl text-left transition-all cursor-pointer group ${
                          page === tool.id
                            ? 'bg-blue-600/20 border border-blue-500/40 text-white'
                            : 'hover:bg-slate-900/90 border border-transparent hover:border-slate-800 text-slate-200'
                        }`}
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
                        {page === tool.id ? (
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`hidden md:inline-flex text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-md transition-all cursor-pointer ${
                page === 'contact'
                  ? 'bg-blue-700 ring-2 ring-blue-400'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
              }`}
            >
              Contact Concierge
            </button>

            {/* Mobile Menu Button on PageView */}
            <button
              onClick={() => setShowMobileMenu(true)}
              aria-label="Open Suite Menu"
              className="sm:hidden p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white transition-all cursor-pointer flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer for Dedicated Page View */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl sm:hidden flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <img src={assets.logo} alt="Home Dreams" className="h-8 w-auto" />
            <button
              onClick={() => setShowMobileMenu(false)}
              className="p-2 rounded-full bg-slate-800 text-white border border-slate-700 cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="py-6 space-y-4">
            <button
              onClick={() => {
                setShowMobileMenu(false);
                onNavigate('home');
              }}
              className="w-full py-3 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-white font-semibold text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>← Return to Home Website</span>
            </button>

            {/* Expandable Explore Suite Accordion */}
            <div className="w-full">
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

              {mobileSuiteExpanded && (
                <div className="space-y-2.5 mt-3 overflow-hidden">
                  {tools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        setShowMobileMenu(false);
                        onNavigate(tool.id);
                      }}
                      className={`w-full p-3.5 rounded-2xl border flex items-center gap-3.5 text-left transition-all shadow-lg group cursor-pointer ${
                        page === tool.id
                          ? 'bg-gradient-to-r from-blue-600/25 to-indigo-600/25 border-blue-400 text-white'
                          : 'bg-gradient-to-r from-slate-900/90 to-slate-850/80 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50'
                      }`}
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
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setShowMobileMenu(false);
                onNavigate('contact');
              }}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-500/25 text-sm cursor-pointer"
            >
              Contact Concierge
            </button>
          </div>
        </div>
      )}

      {/* Main Dedicated Page Component View with top offset for fixed sticky header */}
      <main className="flex-1 pt-16">
        {pageComponents[page] || <Calculator />}
      </main>

      {/* Bottom Footer */}
      <Footer onOpenTool={(toolKey) => onNavigate(toolKey)} />
    </div>
  );
};

export default PageView;

