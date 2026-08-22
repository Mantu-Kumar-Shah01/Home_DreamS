import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d8f72a2-a545-453c-85aa-cbcfe5dbc371");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
        setResult("");
      }
    } catch (err) {
      toast.error("Network error. Please check your connection and try again.");
      setResult("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      title: "Global Headquarters",
      detail: "742 Evergreen Promenade, Suite 900, Beverly Hills, CA 90210",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Private Client Advisory",
      detail: "+1 (800) 555-DREAM / +1 (310) 899-4400",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Direct Inquiries",
      detail: "concierge@homedreams.estate",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className='py-16 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden' id='contact'>
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto max-w-7xl relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3'>
            Let's Connect
          </span>
          <h2 className='text-3xl sm:text-5xl font-bold text-white tracking-tight'>
            Contact <span className='underline decoration-blue-500 underline-offset-8 font-light text-slate-300'>Our Team</span>
          </h2>
          <p className='text-slate-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
            Ready to make a move? Let's build your future together.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Left Column: Direct Reach Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-5 space-y-6'
          >
            <div className='p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Connect with a Private Advisor
              </h3>
              <p className='text-slate-400 text-sm mb-8'>
                Whether buying, investing, or inquiring about bespoke development, our senior partners are ready to assist you.
              </p>

              <div className='space-y-6'>
                {contactDetails.map((item, idx) => (
                  <div key={idx} className='flex items-start gap-4'>
                    <div className='p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mt-0.5'>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-xs text-slate-400 font-medium uppercase tracking-wider'>{item.title}</p>
                      <p className='text-sm sm:text-base text-slate-200 font-semibold mt-0.5'>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className='p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 flex items-center gap-4'>
              <div className='p-2 rounded-full bg-blue-500/20 text-blue-300'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>100% Confidentiality Guaranteed</p>
                <p className='text-xs text-slate-400'>Strict non-disclosure standards for all consultations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-7'
          >
            <form 
              onSubmit={onSubmit} 
              className='p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='text-left'>
                  <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2'>
                    Full Name *
                  </label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder='e.g. Eleanor Vance'  
                    className='w-full bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 rounded-xl py-3 px-4 transition-all outline-none text-sm' 
                    required 
                  />
                </div>

                <div className='text-left'>
                  <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2'>
                    Email Address *
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder='e.g. eleanor@domain.com'   
                    className='w-full bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 rounded-xl py-3 px-4 transition-all outline-none text-sm'  
                    required
                  />
                </div>                  
              </div>

              <div className='mt-6 text-left'>
                <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2'>
                  Subject / Property of Interest
                </label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder='e.g. Inquiring about Skyline Haven Villa'  
                  className='w-full bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 rounded-xl py-3 px-4 transition-all outline-none text-sm' 
                />
              </div>

              <div className="mt-6 text-left">
                <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2'>
                  Your Message *
                </label>
                <textarea 
                  name="message"
                  placeholder='Tell us about your requirements, timeline, or questions...' 
                  className='w-full bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 rounded-xl py-3 px-4 h-36 transition-all outline-none text-sm resize-none' 
                  required
                ></textarea>
              </div>

              <div className='mt-8 flex items-center justify-between'>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className='w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold py-3.5 px-10 rounded-full shadow-lg shadow-blue-500/25 transition-all text-sm cursor-pointer inline-flex items-center justify-center gap-2'
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

