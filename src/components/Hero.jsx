import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code, FileText } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), springConfig);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="bg-gradient-mesh pointer-events-none">
        <div className="mesh-blob-1"></div>
        <div className="mesh-blob-2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-12 grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <div className="inline-block glass-card px-4 py-2 rounded-full border-white/10 self-center md:self-start">
            <span className="text-sm font-medium tracking-wide text-text-secondary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Sudhanshu Ranjan</span>
          </h1>
          
          <div className="h-10 text-lg sm:text-xl md:text-2xl font-medium text-text-secondary">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Backend Developer',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </div>

          <p className="text-text-secondary max-w-lg leading-relaxed text-base sm:text-lg mx-auto md:mx-0">
            A passionate full-stack developer specializing in MERN, building scalable web applications and robust backend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center md:justify-start">
            <Link to="projects" smooth={true} duration={500} className="btn-primary cursor-pointer w-full sm:w-fit py-4">
              View Work
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn-secondary cursor-pointer w-full sm:w-fit py-4">
              Get in Touch
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 mt-10">
            <a href="https://github.com/Sudhanshu8252" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sudhanshu-ranjan-9479b8294/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/Sudhanshu4594/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors" title="LeetCode">
              <Code size={24} />
            </a>
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
              className="text-text-muted hover:text-secondary transition-colors" 
              title="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right side interactive 3D animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-end pr-4 lg:pr-8"
        >
          <div className="relative w-[320px] h-[320px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center" style={{ perspective: 1200 }}>
            {/* Glowing Orbs in the Background */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/40 rounded-full blur-[60px] animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/40 rounded-full blur-[70px] animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
            
            <motion.div 
              style={{ rotateX, rotateY, x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
              className="relative w-full h-full flex items-center justify-center cursor-pointer"
            >
              {/* Outer Dashed Rotating Ring */}
              <div 
                className="absolute inset-4 rounded-full border border-white/10 border-dashed animate-[spin_40s_linear_infinite]" 
                style={{ transform: 'translateZ(-40px)' }}
              ></div>

              {/* Floating Glass Code Editor Window */}
              <div 
                className="w-full max-w-[380px] rounded-xl overflow-hidden glass-card border border-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] shadow-primary/20 bg-[#0f111a]/80 backdrop-blur-xl"
                style={{ transform: 'translateZ(20px)' }}
              >
                {/* Editor Header */}
                <div className="w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 text-xs font-mono text-text-muted">developer.js</div>
                </div>
                
                {/* Editor Content */}
                <div className="p-6 font-mono text-sm shadow-inner min-h-[220px]">
                  <p className="text-secondary mb-2"><span className="text-accent">const</span> <span className="text-white">developer</span> = {'{'}</p>
                  <p className="ml-4 text-text-muted mb-1">name: <span className="text-primary">'Sudhanshu Ranjan'</span>,</p>
                  <p className="ml-4 text-text-muted mb-1">role: <span className="text-primary">'Full Stack Dev'</span>,</p>
                  <p className="ml-4 text-text-muted mb-1">skills: [<span className="text-primary">'React', 'Node.js', 'MongoDB'</span>],</p>
                  <p className="ml-4 text-text-muted mb-2">status: <span className="text-green-400">'Available for work'</span></p>
                  <p className="text-secondary mb-4">{'};'}</p>
                  <p className="text-accent"><span className="text-secondary">console</span>.log(<span className="text-primary">developer.name</span>);</p>
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-4 bg-primary inline-block ml-1 align-middle mt-2"
                  ></motion.div>
                </div>
              </div>
              
              {/* Floating Mini Tech Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-md p-4 rounded-xl border border-primary/30 text-white font-mono font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                style={{ transform: 'translateZ(60px)' }}
              >
                <Code size={24} className="text-primary" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-2 bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-md px-5 py-3 rounded-xl border border-secondary/30 text-secondary font-mono font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                style={{ transform: 'translateZ(80px)' }}
              >
                MERN
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;