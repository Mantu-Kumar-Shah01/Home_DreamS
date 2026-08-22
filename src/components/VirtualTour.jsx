import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'

const VirtualTour = ({ onNavigate }) => {
  const [selectedScene, setSelectedScene] = useState('living'); // 'living' | 'terrace' | 'master' | 'pool'
  const [lightingMode, setLightingMode] = useState('twilight'); // 'day' | 'twilight'

  const scenes = [
    {
      id: 'living',
      title: 'Grand Living Hall & Atrium',
      sqft: '1,400 sq ft',
      highlight: '18-ft Double Height Ceilings & Floor-to-Ceiling Glazing',
      image: assets.project_img_1
    },
    {
      id: 'terrace',
      title: 'Oceanview Sunset Terrace',
      sqft: '900 sq ft',
      highlight: 'Cantilevered Glass Balustrade & Fire Pit Lounge',
      image: assets.project_img_5
    },
    {
      id: 'master',
      title: 'Presidential Master Suite',
      sqft: '1,100 sq ft',
      highlight: 'Dual Dressing Rooms, Spa Bath & Private Balcony',
      image: assets.project_img_3
    },
    {
      id: 'pool',
      title: 'Infinity Edge Pool & Pavilion',
      sqft: '2,200 sq ft',
      highlight: 'Heated Saltwater Infinity Basin with Integrated Jacuzzi',
      image: assets.project_img_2
    }
  ];

  const currentScene = scenes.find((s) => s.id === selectedScene) || scenes[0];

  return (
    <section className="pt-6 sm:pt-8 pb-12 px-4 sm:px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="virtual-tour">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header - Compact and balanced */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/20 inline-block mb-2">
            Immersive 3D Spatial Technology
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Virtual 3D <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Walkthroughs</span>
          </h2>
          <p className="text-slate-400 mt-2 text-xs sm:text-sm max-w-xl mx-auto">
            Experience spatial luxury from anywhere in the world with photorealistic 3D virtual tours and interactive digital floor plans.
          </p>
        </motion.div>

        {/* 3D Stage & Interactive Screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 shadow-2xl p-3 sm:p-5 backdrop-blur-md"
        >
          {/* Main Visual Display - Balanced height to prevent viewport overflow */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[440px] bg-slate-950 border border-slate-800">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentScene.id}
                src={currentScene.image}
                alt={currentScene.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  lightingMode === 'twilight' ? 'brightness-90 contrast-110' : 'brightness-105'
                }`}
              />
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Top Toolbar */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                Live 3D Spatial Walkthrough
              </div>

              {/* Lighting Mode Toggle */}
              <div className="flex items-center gap-1 bg-slate-900/85 backdrop-blur-md p-1 rounded-full border border-white/10 text-xs text-slate-300">
                <button
                  type="button"
                  onClick={() => setLightingMode('day')}
                  className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs transition-all cursor-pointer ${
                    lightingMode === 'day' ? 'bg-blue-600 text-white font-medium shadow-sm' : 'hover:text-white'
                  }`}
                >
                  ☀️ Daylight
                </button>
                <button
                  type="button"
                  onClick={() => setLightingMode('twilight')}
                  className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs transition-all cursor-pointer ${
                    lightingMode === 'twilight' ? 'bg-blue-600 text-white font-medium shadow-sm' : 'hover:text-white'
                  }`}
                >
                  🌙 Twilight
                </button>
              </div>
            </div>

            {/* Bottom Room Info & VR Action */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-auto">
              <div className="bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10 max-w-md">
                <div className="flex items-center gap-2 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <span>Selected Scene</span> • <span>{currentScene.sqft}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{currentScene.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">{currentScene.highlight}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Request VR Kit</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Scene Selectors - High visibility grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-3 sm:mt-4">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => setSelectedScene(scene.id)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  selectedScene === scene.id
                    ? 'bg-blue-600/25 border-blue-400 shadow-md ring-1 ring-blue-500/30'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-bold truncate ${selectedScene === scene.id ? 'text-blue-300' : 'text-slate-200'}`}>
                    {scene.title}
                  </p>
                  {selectedScene === scene.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0 ml-1"></span>
                  )}
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">{scene.sqft}</p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTour;
