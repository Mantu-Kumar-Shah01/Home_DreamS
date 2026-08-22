import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Bespoke Off-Market Acquisitions",
      desc: "Direct access to private, unlisted ultra-luxury estates and discreet seller networks across premier global enclaves.",
      icon: "🗝️",
      features: [
        "Confidential buyer representation",
        "Direct-to-owner off-market sourcing",
        "Comprehensive structural due diligence"
      ]
    },
    {
      title: "Architectural & Land Development",
      desc: "End-to-end guidance on custom luxury construction, zoning permits, master planning, and sustainable modern craft.",
      icon: "📐",
      features: [
        "Pritzker-caliber architect matchmaking",
        "Zoning & environmental permits advisory",
        "Project lifecycle cost oversight"
      ]
    },
    {
      title: "Private Wealth & Legal Advisory",
      desc: "Cross-border tax structuring, privacy trust formations, and escrow protection tailored for family offices and investors.",
      icon: "⚖️",
      features: [
        "International buyer tax optimization",
        "Anonymous entity / LLC acquisitions",
        "White-glove legal closing support"
      ]
    },
    {
      title: "Interior Architecture & Art Staging",
      desc: "Transforming raw spaces into evocative living masterpieces with high-end furniture curation and museum-grade art staging.",
      icon: "🎨",
      features: [
        "Custom bespoke Italian furnishings",
        "Curated blue-chip art placement",
        "Turnkey move-in readiness"
      ]
    },
    {
      title: "VIP Relocation & Concierge",
      desc: "Seamless family transitions including private jet transfers, elite school placement, and private club memberships.",
      icon: "✈️",
      features: [
        "Private aviation partner network",
        "Top-tier private academy introductions",
        "24/7 personal lifestyle concierge"
      ]
    },
    {
      title: "Portfolio Asset Management",
      desc: "Maximizing long-term asset appreciation and passive yields through bespoke tenancy management and discrete leasing.",
      icon: "📊",
      features: [
        "High-yield executive leasing programs",
        "Preventative estate maintenance",
        "Quarterly valuation & yield analytics"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="services">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Elite Advisory & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Private Client <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Services</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            A comprehensive ecosystem of bespoke real estate, legal, and lifestyle advisory tailored for discerning individuals and family offices.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Icon Header */}
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-800">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation CTA */}
              <a
                href="#contact"
                className="mt-8 block text-center py-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-700 hover:border-blue-500"
              >
                Inquire About {service.title.split(' ')[0]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
