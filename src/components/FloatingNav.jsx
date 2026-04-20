import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FileText, Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Link } from 'react-scroll';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show floating nav when scrolling UP past 300px (lowered threshold for mobile)
      if (currentScrollY > 300 && currentScrollY < lastY) {
        setIsVisible(true);
      } else if (currentScrollY > lastY || currentScrollY <= 300) {
        setIsVisible(false);
      }

      // Show top button when scrolled down past 500px
      if (currentScrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      setLastY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Center Floating Nav Dock — visible on ALL screen sizes */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 100, opacity: 0, x: '-50%' }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-5 md:bottom-8 left-1/2 z-[100] flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 glass-card rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-black/70 backdrop-blur-xl"
          >
            {/* Home Icon */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-white hover:bg-white/10 transition-all cursor-pointer group relative active:scale-90"
              title="Home"
            >
              <Home size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="hidden sm:block absolute -top-10 opacity-0 group-hover:opacity-100 text-xs font-mono bg-black/80 px-2 py-1 rounded transition-opacity pointer-events-none">Home</span>
            </Link>

            <div className="w-[1px] h-4 sm:h-5 bg-white/10 mx-0.5 sm:mx-1"></div>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Sudhanshu8252"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-primary hover:bg-white/10 transition-all cursor-pointer group relative active:scale-90"
              title="GitHub"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="hidden sm:block absolute -top-10 opacity-0 group-hover:opacity-100 text-xs font-mono bg-black/80 px-2 py-1 rounded transition-opacity pointer-events-none text-primary">GitHub</span>
            </a>
            
            <div className="w-[1px] h-4 sm:h-5 bg-white/10 mx-0.5 sm:mx-1"></div>

            {/* Resume Icon */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/Resume.pdf';
                  link.download = 'Sudhanshu_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-secondary hover:bg-white/10 transition-all cursor-pointer group relative active:scale-90"
              title="Resume"
            >
              <FileText size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="hidden sm:block absolute -top-10 opacity-0 group-hover:opacity-100 text-xs font-mono bg-black/80 px-2 py-1 rounded transition-opacity pointer-events-none text-secondary">Resume</span>
            </a>

            <div className="w-[1px] h-4 sm:h-5 bg-white/10 mx-0.5 sm:mx-1"></div>

            {/* Email/Contact Icon */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-accent hover:bg-white/10 transition-all cursor-pointer group relative active:scale-90"
              title="Email"
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="hidden sm:block absolute -top-10 opacity-0 group-hover:opacity-100 text-xs font-mono bg-black/80 px-2 py-1 rounded transition-opacity pointer-events-none text-accent">Email</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button — adjusted position for mobile to avoid overlap */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[99]"
          >
            <button
              onClick={scrollToTop}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-white backdrop-blur shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-90"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="md:w-5 md:h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
