// import React, { useState, useEffect } from 'react';
// import { NavbarDemo } from './Components/Common/Nav';
// import { BackgroundBoxes } from './Pages/Home/Bg_hero';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { About } from './Pages/About/About.jsx';
// import WhatsAppButton from './Whatsapp';
// import KNGas from './Pages/Projucts/KNGas';
// import KNStore from './Pages/Projucts/KNStore';
// import KNTrans from './Pages/Projucts/KNTrans';
// import KNWeb from './Pages/Projucts/KNWeb';
// import Preloader from './Components/Common/Preloader';
// import Footer from './Components/Common/Footer';
// import OurTeam from './Pages/About/OurTeam';
// import Terms_Conditions from './Pages/About/Terms_Conditions';
// import PrivacyPolicy from './Pages/About/PrivacyPolicy';
// import RefundPolicy from './Pages/About/RefundPolicy';


// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     const preloaderShown = sessionStorage.getItem('preloaderShown');
    
//     if (!preloaderShown) {
//       setLoading(true);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const handleVideoEnd = () => {
//     setLoading(false); 
//     sessionStorage.setItem('preloaderShown', 'true'); 
//   };

//   return (
//     <>
//       {loading ? (
        
//         <Preloader onVideoEnd={handleVideoEnd} />
//       ) : (
//         <>
//           <NavbarDemo />
//           <Routes>
//             <Route path="/" element={<BackgroundBoxes />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/kngd" element={<KNGas />} />
//             <Route path="/knsms" element={<KNStore />} />
//             <Route path="/kntran" element={<KNTrans />} />
//             <Route path="/knweb" element={<KNWeb />} />
//             <Route path="/knteam" element={<OurTeam />} />
//             <Route path="/knterms" element={<Terms_Conditions />} />
//             <Route path="/knpolicy" element={<PrivacyPolicy />} />
//             <Route path="/knrefund" element={<RefundPolicy />} />
//           </Routes>
//           <WhatsAppButton />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect, Suspense, lazy } from 'react';
import { NavbarDemo } from './Components/Common/Nav';
import { BackgroundBoxes } from './Pages/Home/Bg_hero';
import { Route, Routes, useLocation } from 'react-router-dom';
import WhatsAppButton from './Whatsapp';
import Footer from './Components/Common/Footer';
import Preloader from './Components/Common/Preloader copy';

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
  const location = useLocation();

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem('preloaderShown');
    
    if (!preloaderShown) {
      setLoading(true);  // Show preloader
    } else {
      setLoading(false); // Skip preloader if already shown
    }
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
          <NavbarDemo />
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
