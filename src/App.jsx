import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import PropertyModal from "./components/PropertyModal"
import PageView from "./components/PageView"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Highlights from "./components/Highlights"

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'calculator' | 'virtualTour' | 'neighborhoods' | 'services' | 'faq' | 'contact'

  // Sync hash routing if desired
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['calculator', 'virtualTour', 'virtual-tour', 'neighborhoods', 'services', 'faq', 'contact'].includes(hash)) {
        const pageKey = hash === 'virtual-tour' ? 'virtualTour' : hash;
        setCurrentPage(pageKey);
      } else if (hash === 'home' || hash === 'header' || hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageKey) => {
    setCurrentPage(pageKey);
    if (pageKey === 'home') {
      window.location.hash = '#header';
    } else {
      window.location.hash = `#${pageKey}`;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      {/* If a dedicated Explore Suite page is selected, render full PageView */}
      {currentPage !== 'home' ? (
        <PageView
          page={currentPage}
          onNavigate={handleNavigate}
        />
      ) : (
        /* Primary Home Landing Page */
        <>
          <Header onOpenTool={handleNavigate} />
          <About onOpenTool={handleNavigate} />
          <Projects onSelectProperty={setSelectedProperty} />
          <Highlights onOpenTool={handleNavigate} />
          <Testimonials />
          <Footer onOpenTool={handleNavigate} />
        </>
      )}

      {/* Interactive Luxury Property Detail Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  )
}

export default App




