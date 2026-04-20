import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface/50 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center md:text-left"
        >
          <a href="#" className="text-2xl font-display font-bold tracking-tight text-white inline-block mb-2">
            Sudhanshu Ranjan<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-text-muted">
            Building digital experiences with passion & precision.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-center md:text-right"
        >
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Sudhanshu Ranjan. All Rights Reserved.
          </p>
          <p className="text-text-muted text-xs mt-1">
            Designed & Built with <span className="text-secondary">♥</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;