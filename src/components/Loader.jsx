import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background — hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="hidden md:block mesh-blob-1 bg-primary/20 blur-[100px] animate-pulse"></div>
        <div className="hidden md:block mesh-blob-2 bg-secondary/20 blur-[100px] animate-[pulse_4s_infinite_reverse]"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-10 sm:gap-12 px-6">
        {/* Welcome Text */}
        <div className="overflow-hidden py-2 text-center">
          <motion.h1 
            initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight drop-shadow-lg flex items-center justify-center gap-2 md:gap-3 flex-wrap"
          >
            <span className="text-white/90">Welcome to my</span>
            <span className="text-gradient">Portfolio</span>
          </motion.h1>
        </div>

        {/* Loading Animations */}
        <div className="flex flex-col items-center gap-6">
          {/* Smooth Gradient Bar Loader */}
          <div className="w-48 sm:w-56 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            />
          </div>

          {/* Loading Dots — simple fade wave */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.85, 1, 0.85]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-accent'}`}
              />
            ))}
          </div>
          
          {/* Loading Text — smooth single-pass fade in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-text-muted uppercase"
          >
            Loading...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;