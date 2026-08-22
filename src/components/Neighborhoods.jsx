import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets/assets'

const Neighborhoods = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const neighborhoodData = [
    {
      name: "Beverly Hills",
      state: "California",
      category: "Metropolitan",
      medianPrice: "$4.2M",
      schoolRating: "9.8 / 10",
      lifestyle: "High Fashion & Exclusive Enclaves",
      image: assets.project_img_1,
      listings: "18 Active Estates",
      badge: "World Renowned"
    },
    {
      name: "Malibu Colony",
      state: "California",
      category: "Coastal",
      medianPrice: "$7.5M",
      schoolRating: "9.5 / 10",
      lifestyle: "Private Beaches & Oceanfront Living",
      image: assets.project_img_5,
      listings: "12 Private Compounds",
      badge: "Oceanfront"
    },
    {
      name: "Upper East Side",
      state: "New York",
      category: "Metropolitan",
      medianPrice: "$3.8M",
      schoolRating: "9.9 / 10",
      lifestyle: "Museum Mile & Historic Penthouses",
      image: assets.project_img_4,
      listings: "24 Luxury Lofts",
      badge: "Cultural Epicenter"
    },
    {
      name: "Aspen Red Mountain",
      state: "Colorado",
      category: "Mountain Retreat",
      medianPrice: "$8.9M",
      schoolRating: "9.6 / 10",
      lifestyle: "Alpine Ski-in/Ski-out Chalets",
      image: assets.project_img_6,
      listings: "9 Chalet Estates",
      badge: "Alpine Luxury"
    },
    {
      name: "San Francisco Bay",
      state: "California",
      category: "Coastal",
      medianPrice: "$3.1M",
      schoolRating: "9.7 / 10",
      lifestyle: "Tech Executive Villas & Views",
      image: assets.project_img_2,
      listings: "15 Modernist Homes",
      badge: "Innovation Hub"
    },
    {
      name: "Chicago Gold Coast",
      state: "Illinois",
      category: "Metropolitan",
      medianPrice: "$2.6M",
      schoolRating: "9.4 / 10",
      lifestyle: "Lakeside Promenades & High Rises",
      image: assets.project_img_3,
      listings: "21 Historic Condos",
      badge: "Lakeside Heritage"
    },
  ];

  const filteredData =
    activeFilter === 'All'
      ? neighborhoodData
      : neighborhoodData.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="neighborhoods">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Prime Enclaves & Locales
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Explore Prime <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Neighborhoods</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Discover the world’s most coveted residential destinations, curated for prestige, tranquility, and generational asset growth.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-8">
            {['All', 'Coastal', 'Metropolitan', 'Mountain Retreat'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Neighborhoods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Top Badge */}
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-blue-300 border border-white/10">
                    {item.badge}
                  </span>

                  <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full bg-blue-600/90 text-white">
                    {item.listings}
                  </span>

                  {/* City Name Header */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs text-slate-300 uppercase font-medium tracking-wider">{item.state}</p>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.name}</h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm italic">
                    "{item.lifestyle}"
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <p className="text-[11px] text-slate-400">Median Estate Price</p>
                      <p className="text-sm font-bold text-white mt-0.5">{item.medianPrice}</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <p className="text-[11px] text-slate-400">Education Score</p>
                      <p className="text-sm font-bold text-emerald-400 mt-0.5">{item.schoolRating}</p>
                    </div>
                  </div>

                  <a
                    href="#projects"
                    className="block w-full text-center py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700 hover:border-blue-500"
                  >
                    View Available Listings in {item.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
