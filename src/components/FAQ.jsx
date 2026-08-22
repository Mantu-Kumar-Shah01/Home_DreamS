import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can international and foreign national investors purchase luxury properties with Home Dreams?",
      answer: "Yes, absolutely. We regularly assist foreign buyers and global family offices. Our legal partners manage cross-border currency regulations, FIRPTA tax compliance, ITIN registrations, and optimal trust / LLC structures to ensure a seamless acquisition experience."
    },
    {
      question: "How do you protect client privacy, anonymity, and confidentiality?",
      answer: "Discretion is our hallmark. All senior partners and advisors operate under rigorous non-disclosure agreements (NDAs). We facilitate anonymous acquisitions through blind trusts, private LLCs, and family office entities, ensuring zero public exposure."
    },
    {
      question: "What is the typical closing timeline for multi-million dollar luxury residences?",
      answer: "Cash and private wire acquisitions typically close within 7 to 14 business days following title clearance and escrow verification. Jumbo mortgage or private asset-backed financing transactions average 21 to 30 days."
    },
    {
      question: "How does Home Dreams source and verify exclusive off-market listings?",
      answer: "Over 40% of our ultra-luxury transactions never appear on public MLS directories. Our proprietary network of ultra-high-net-worth owners, architects, and estate lawyers grants our clients pre-market and private off-market access with full structural and legal title vetting."
    },
    {
      question: "Do you facilitate alternative asset purchases or cryptocurrency settlements?",
      answer: "Yes. Through our licensed escrow partners, we accommodate multi-currency settlements, institutional cryptocurrency conversion via regulated US settlement custodians, and collateralized securities financing."
    },
    {
      question: "What post-closing concierge support is included with Home Dreams?",
      answer: "Our relationship continues long after handing over the keys. Our VIP concierge coordinates interior design staging, smart home configuration, private staffing, property insurance, and long-term asset management."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Advisory Insights
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Questions</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Essential clarity on acquisitions, confidentiality, international financing, and private client advisory.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-500/50 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Advisory Reach Out */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20 border border-blue-500/20">
          <h3 className="text-lg font-bold text-white">Have a confidential inquiry not listed here?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md mx-auto">
            Schedule a private consultation with our managing partner under complete non-disclosure protection.
          </p>
          <a
            href="#contact"
            className="inline-block mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer"
          >
            Speak with an Advisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
