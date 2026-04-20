import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav
      className={`fixed md:absolute top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 md:py-5' : 'glass-nav md:bg-transparent md:backdrop-blur-none py-3 md:py-10'
      }`}
    >
      <div className="w-full px-6 lg:px-20 xl:px-28 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer relative group flex items-center"
        >
           <div className="text-2xl font-display font-bold tracking-tight flex overflow-hidden">
             {/* Desktop animated logo */}
             <div className="hidden sm:flex">
               {"Sudhanshu Ranjan".split('').map((char, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0, color: theme === 'dark' ? '#f3f4f6' : '#1e1b4b' }}
                   transition={{ duration: 0.5, delay: index * 0.04, type: 'spring', damping: 10 }}
                   whileHover={{ y: -6, color: '#6366f1', scale: 1.1, transition: { duration: 0.2 } }}
                   className={char === ' ' ? 'w-2' : 'inline-block transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]'}
                 >
                   {char}
                 </motion.span>
               ))}
             </div>
             {/* Mobile simple logo */}
             <div className="flex sm:hidden">
               <motion.span
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1, color: theme === 'dark' ? '#f3f4f6' : '#1e1b4b' }}
                 transition={{ duration: 0.5 }}
                 className="inline-block"
               >
                 Sudhanshu Ranjan
               </motion.span>
             </div>
             <motion.span
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 1 }}
               className="text-primary ml-1 inline-block"
             >
               <motion.span 
                 animate={{ opacity: [1, 0.2, 1], scale: [1, 1.2, 1] }} 
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="inline-block"
               >
                 .
               </motion.span>
             </motion.span>
           </div>
        </Link>

        {/* Desktop Nav Actions - All in top right group */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-bold"
              className="text-text-secondary hover:text-white transition-all cursor-pointer text-sm tracking-wide hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
          
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
            className="px-5 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-sm font-medium hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Resume
          </a>

          <div className="w-[1px] h-4 bg-white/10 hidden lg:block"></div>

          {/* Desktop Theme Toggle (Integrated in Nav) */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden bg-white/5 active:scale-90"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ y: 20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun size={18} className="text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 20, opacity: 0, rotate: 90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon size={18} className="text-indigo-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Actions (Visible ONLY on Mobile) */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden bg-white/5 active:scale-90"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div key="sun-m" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}><Sun size={18} className="text-amber-400" /></motion.div>
              ) : (
                <motion.div key="moon-m" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}><Moon size={18} className="text-indigo-400" /></motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-white bg-white/5 border border-white/10 focus:outline-none active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div 
                  key="x" 
                  initial={{ rotate: -90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div 
                  key="menu" 
                  initial={{ rotate: 90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full glass-nav flex flex-col items-center py-8 gap-6 shadow-2xl border-t border-white/5 overflow-hidden backdrop-blur-2xl"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="text-text-secondary hover:text-white transition-colors cursor-pointer text-xl font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-lg font-medium mt-2 bg-white/5 shadow-xl"
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
                  setIsOpen(false);
                }}
              >
                Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
