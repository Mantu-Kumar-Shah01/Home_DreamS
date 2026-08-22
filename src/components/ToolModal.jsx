import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'
import Calculator from './Calculator'
import VirtualTour from './VirtualTour'
import Neighborhoods from './Neighborhoods'
import Services from './Services'
import FAQ from './FAQ'

const ToolModal = ({ activeTool, onClose }) => {
  if (!activeTool) return null;

  const toolTitles = {
    calculator: "Mortgage & Investment ROI Calculator",
    virtualTour: "3D Spatial Virtual Walkthroughs",
    neighborhoods: "Prime Luxury Enclaves & City Guide",
    services: "Private Client Concierge & Advisory",
    faq: "Luxury Buyer & Investor FAQ"
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-2xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-6xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/90 sticky top-0 z-30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {toolTitles[activeTool] || "Home Dreams Luxury Suite"}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <img src={assets.cross_icon} alt="Close" className="w-5 h-5 invert brightness-0" />
            </button>
          </div>

          {/* Modal Content View */}
          <div className="overflow-y-auto flex-1 p-2 sm:p-4">
            {activeTool === 'calculator' && <Calculator />}
            {activeTool === 'virtualTour' && <VirtualTour />}
            {activeTool === 'neighborhoods' && <Neighborhoods />}
            {activeTool === 'services' && <Services />}
            {activeTool === 'faq' && <FAQ />}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ToolModal;
