import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Footer = ({ onOpenTool }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to our luxury real estate newsletter!");
    setNewsletterEmail("");
  };

  return (
    <footer className='pt-20 pb-10 px-6 md:px-14 lg:px-24 bg-slate-950 text-slate-400 border-t border-slate-800/80 w-full overflow-hidden' id='footer'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80'>
          
          {/* Brand Column */}
          <div className='lg:col-span-5 space-y-4'>
            <a href="#header" className='inline-block'>
              <img src={assets.logo} alt="Home Dreams Logo" className='h-9 w-auto' />
            </a>
            <p className='text-slate-400 text-sm leading-relaxed max-w-sm'>
              Home Dreams is a global premier real estate advisory delivering exceptional properties, architectural distinction, and generational investment opportunities.
            </p>
            
            {/* Social Links */}
            <div className='flex items-center gap-3 pt-2'>
              {['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map((platform, idx) => (
                <a
                  key={idx}
                  href="#header"
                  aria-label={platform}
                  className='w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 flex items-center justify-center text-xs text-slate-400 transition-all duration-200'
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className='lg:col-span-3 space-y-4'>
            <h4 className='text-white text-base font-bold tracking-wide'>Quick Navigation</h4>
            <ul className='flex flex-col gap-2 text-xs sm:text-sm'>
              <li>
                <a href="#header" className='hover:text-blue-400 transition-colors'>Home & Overview</a>
              </li>
              <li>
                <a href="#about" className='hover:text-blue-400 transition-colors'>About Our Heritage</a>
              </li>
              <li>
                <a href="#projects" className='hover:text-blue-400 transition-colors'>Featured Portfolio</a>
              </li>
              {onOpenTool && (
                <>
                  <li>
                    <button type="button" onClick={() => onOpenTool('neighborhoods')} className='hover:text-blue-400 transition-colors text-left cursor-pointer'>
                      Prime Neighborhoods ↗
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onOpenTool('services')} className='hover:text-blue-400 transition-colors text-left cursor-pointer'>
                      Private Client Services ↗
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onOpenTool('virtualTour')} className='hover:text-blue-400 transition-colors text-left cursor-pointer'>
                      3D Virtual Walkthroughs ↗
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onOpenTool('calculator')} className='hover:text-blue-400 transition-colors text-left cursor-pointer'>
                      Mortgage & ROI Calculator ↗
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={() => onOpenTool('faq')} className='hover:text-blue-400 transition-colors text-left cursor-pointer'>
                      Advisory & Buyer FAQ ↗
                    </button>
                  </li>
                </>
              )}
              <li>
                {onOpenTool ? (
                  <button
                    type="button"
                    onClick={() => onOpenTool('contact')}
                    className='hover:text-blue-400 transition-colors text-left cursor-pointer'
                  >
                    Direct Advisory ↗
                  </button>
                ) : (
                  <a href="#contact" className='hover:text-blue-400 transition-colors'>Direct Advisory</a>
                )}
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className='lg:col-span-4 space-y-4'>
            <h4 className='text-white text-base font-bold tracking-wide'>Curated Real Estate Digest</h4>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Receive exclusive off-market listings, global architectural trends, and quarterly market insights directly to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className='flex flex-col sm:flex-row gap-2 pt-2'>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder='Enter your email address'
                className='px-4 py-2.5 rounded-xl bg-slate-900 text-white placeholder-slate-500 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm flex-1'
                required
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type='submit'
                className='px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 cursor-pointer'
              >
                Subscribe
              </motion.button>
            </form>
            <p className='text-[11px] text-slate-400'>
              We respect your privacy. Unsubscribe anytime with zero hassle.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className='pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400'>
          <p>© {new Date().getFullYear()} Home Dreams Realty Worldwide. All Rights Reserved.</p>
          <div className='flex items-center gap-6'>
            <a href="#header" className='hover:text-slate-300 transition-colors'>Privacy Policy</a>
            <a href="#header" className='hover:text-slate-300 transition-colors'>Terms of Service</a>
            <a href="#header" className='hover:text-slate-300 transition-colors'>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

