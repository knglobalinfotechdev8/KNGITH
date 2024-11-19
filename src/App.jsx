import React, { useState, useEffect, Suspense, lazy } from 'react';
import { NavbarDemo } from './Components/Common/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import WhatsAppButton from './Whatsapp';
import Footer from './Components/Common/Footer';
import Preloader from './Components/Common/Preloader copy';
import { BackgroundBoxes } from './Pages/Home/Bg_hero';
import { Mobnav } from './Components/Common/Mobnav';

// Lazy-loaded components
const About = lazy(() => import('./Pages/About/About'));
const KNGas = lazy(() => import('./Pages/Projucts/KNGas'));
const KNStore = lazy(() => import('./Pages/Projucts/KNStore'));
const KNTrans = lazy(() => import('./Pages/Projucts/KNTrans'));
const KNWeb = lazy(() => import('./Pages/Projucts/KNWeb'));
const OurTeam = lazy(() => import('./Pages/About/OurTeam'));
const Terms_Conditions = lazy(() => import('./Pages/About/Terms_Conditions'));
const PrivacyPolicy = lazy(() => import('./Pages/About/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./Pages/About/RefundPolicy'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile
  const location = useLocation();

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem('preloaderShown');
    if (!preloaderShown) {
      setLoading(true);  // Show preloader
    } else {
      setLoading(false); // Skip preloader if already shown
    }

    // Handle window resizing to detect mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your design needs (typically 768px for mobile)
    };

    // Initial check on component mount
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleVideoEnd = () => {
    setLoading(false); // Set loading to false once video ends
    sessionStorage.setItem('preloaderShown', 'true'); // Store preloader status in session
  };

  return (
    <>
      {loading ? (
        // Show preloader until video ends
        <Preloader onVideoEnd={handleVideoEnd} />
      ) : (
        <>
          {/* Conditional Rendering of Navbar based on screen size */}
          {isMobile ? <Mobnav /> : <NavbarDemo />}

          <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location}>
              <Route path="/" element={<BackgroundBoxes />} />
              <Route path="/about" element={<About />} />
              <Route path="/kngd" element={<KNGas />} />
              <Route path="/knsms" element={<KNStore />} />
              <Route path="/kntran" element={<KNTrans />} />
              <Route path="/knweb" element={<KNWeb />} />
              <Route path="/knteam" element={<OurTeam />} />
              <Route path="/knterms" element={<Terms_Conditions />} />
              <Route path="/knpolicy" element={<PrivacyPolicy />} />
              <Route path="/knrefund" element={<RefundPolicy />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
