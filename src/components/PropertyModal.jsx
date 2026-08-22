import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const PropertyModal = ({ property, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'amenities' | 'tour'
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!property) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    toast.success(`Private tour request confirmed for ${property.title} on ${tourDate || 'selected date'}! Our private concierge will reach out within 2 hours.`);
    onClose();
  };

  const amenities = [
    { name: "Infinity Edge Pool & Spa", icon: "🏊‍♂️" },
    { name: "Smart Home Automation", icon: "📱" },
    { name: "Temperature-Controlled Wine Cellar", icon: "🍷" },
    { name: "Private Elevator Access", icon: "🛗" },
    { name: "Private 4-Car Showcase Garage", icon: "🚗" },
    { name: "Panoramic Skyline / Ocean Views", icon: "🌅" },
    { name: "Professional Chef's Kitchen", icon: "🍳" },
    { name: "Dedicated Wellness & Sauna Room", icon: "🧖‍♀️" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                {property.tag || "Exclusive Listing"}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white truncate max-w-xs sm:max-w-md">
                {property.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <img src={assets.cross_icon} alt="Close" className="w-5 h-5 invert brightness-0" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Hero Image Showcase */}
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-slate-800">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-300 font-medium">Offered At</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">{property.price}</p>
                  <p className="text-sm text-slate-300 flex items-center gap-1.5 mt-1">
                    📍 {property.location}
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                    {property.beds || "4 Beds"}
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                    {property.baths || "3.5 Baths"}
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                    {property.sqft || "3,800 sq ft"}
                  </span>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              {[
                { id: 'overview', label: 'Property Overview' },
                { id: 'amenities', label: 'Luxury Amenities' },
                { id: 'tour', label: 'Schedule Private Showing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Architectural Highlights</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Designed to elevate the sensory experience of luxury living, {property.title} combines bespoke architectural contours with sustainably sourced premium materials, soaring 12-foot ceilings, and effortless indoor-outdoor flow into private landscaped terraces.
                  </p>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Year Built</p>
                    <p className="text-base font-bold text-white mt-1">2024</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Price per Sq. Ft.</p>
                    <p className="text-base font-bold text-white mt-1">$645 / sq ft</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Lot Size</p>
                    <p className="text-base font-bold text-white mt-1">0.45 Acres</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <p className="text-xs text-slate-400">HOA Dues</p>
                    <p className="text-base font-bold text-white mt-1">$450 / mo</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Amenities */}
            {activeTab === 'amenities' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-3">Included Luxury Features & Inclusions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <span className="text-2xl">{amenity.icon}</span>
                      <span className="text-sm font-medium text-slate-200">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 3: Schedule Tour Form */}
            {activeTab === 'tour' && (
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleBookingSubmit}
                className="space-y-4"
              >
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-2xl">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">VIP Concierge Service</p>
                  <p className="text-sm text-slate-200 mt-1">
                    Select your preferred date and time for an exclusive escorted tour with a Senior Property Partner.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={tourTime}
                      onChange={(e) => setTourTime(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                    >
                      <option value="">Select Time Window</option>
                      <option value="morning">Morning (10:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 3:00 PM)</option>
                      <option value="twilight">Twilight Viewing (5:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Vance"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jvance@domain.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Your Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer mt-4"
                >
                  Confirm Showing Request
                </button>
              </motion.form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PropertyModal;
