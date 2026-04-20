import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import FloatingNav from './components/FloatingNav.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for at least 2.5 seconds to display animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route
          path="/*"
          element={
            <AnimatePresence mode="wait">
              {loading ? (
                <Loader key="loader" />
              ) : (
                <motion.div
                  key="portfoliowrapper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-background text-text-primary min-h-screen font-sans selection:bg-primary/30"
                >
                  <Navbar />
                  <main className="relative flex flex-col pt-16 md:pt-0">
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                  </main>
                  <Footer />
                  <FloatingNav />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;