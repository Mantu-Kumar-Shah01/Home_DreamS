import React from 'react'
import { motion } from 'framer-motion'

const Highlights = ({ onOpenTool }) => {
  const pillars = [
    {
      step: "01",
      title: "Unrivaled Architectural Curation",
      desc: "Every estate undergoes rigorous 150+ point structural, seismic, and artisanal craftsmanship vetting before inclusion in our portfolio.",
      tag: "Vetted Integrity",
      accent: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Discreet Off-Market Confidentiality",
      desc: "Direct access to unlisted trophy assets and family office portfolios safeguarded by institutional privacy and anonymous trust structuring.",
      tag: "Institutional Privacy",
      accent: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Direct Escrow & Tax Transparency",
      desc: "Zero hidden fees. Complete visibility into closing fees, international compliance, transfer duties, and cross-border currency settlement.",
      tag: "Total Clarity",
      accent: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Generational Capital Appreciation",
      desc: "Proprietary predictive algorithms evaluating zoning growth, infrastructure pipelines, and prime historical appreciation velocity.",
      tag: "Proven ROI",
      accent: "from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="advantage">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            The Home Dreams Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Discerning Buyers <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Choose Us</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Combining architectural prestige, bespoke financial engineering, and institutional privacy for extraordinary properties worldwide.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(59, 130, 246, 0.4)" }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 group hover:shadow-blue-900/10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                    {item.step}
                  </span>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400/90 inline-block mb-2">
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                <span>Learn Details</span>
                <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-indigo-950/40 border border-slate-800/80 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Private Representation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Looking for an unlisted off-market estate?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Connect with our senior partners for discreet representation and exclusive off-market previews across Beverly Hills, Aspen, and London.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenTool && onOpenTool('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Private Catalog</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => onOpenTool && onOpenTool('virtualTour')}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full border border-slate-700 transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>👓 3D Spatial Tour</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
