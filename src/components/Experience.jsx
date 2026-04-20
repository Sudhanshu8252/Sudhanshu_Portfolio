import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="flex flex-col mb-16 items-center text-center mx-auto"
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2">My Journey</span>
        <h2 className="section-title">Professional Experience</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative px-6 sm:px-0"
        >
          {/* Timeline Line - Visible on all screens, but centered on SM+ */}
          <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          {/* Wipro Experience */}
          <div className="relative flex flex-col sm:flex-row justify-between w-full mb-16 sm:mb-32 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-3px] sm:left-1/2 -translate-x-1/2 top-0 mt-8 w-6 h-6 rounded-full bg-surface border-4 border-primary z-10 box-content shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="w-[calc(100%-4rem)] sm:w-[48%] md:w-[45%] lg:w-[42%] bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl p-5 sm:p-8 md:p-10 text-left self-start shadow-2xl hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 relative ml-16 sm:ml-0 overflow-hidden group active:scale-[0.98]">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
               
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                Database Solution Expert
              </h3>
              <h4 className="text-lg sm:text-xl text-primary font-medium mt-1 mb-4 sm:mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-primary/70" />
                <span className="tracking-wide">Wipro</span>
              </h4>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {["MySQL", "SQL", "Database Normalization", "Relational Database Design", "Query Optimization"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-mono text-primary/80 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-6 text-text-secondary leading-relaxed text-left">
                <li className="relative pl-6 group/item">
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/10 group-hover/item:scale-125 transition-all"></span>
                  <p className="text-sm sm:text-base tracking-tight">
                    Architected normalized relational structures across <span className="text-white font-medium">8+ interconnected tables</span>, improving data consistency and ensuring organized storage for structured information systems.
                  </p>
                </li>
                <li className="relative pl-6 group/item">
                  <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-secondary ring-4 ring-secondary/10 group-hover/item:scale-125 transition-all"></span>
                  <p className="text-sm sm:text-base tracking-tight">
                    Optimized <span className="text-white font-medium">50+ SQL queries</span> to support reporting tasks and large-scale record processing, improving overall performance of data retrieval operations.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="w-[calc(100%-4rem)] sm:w-[45%] mt-4 sm:mt-10 ml-16 sm:ml-0 px-0 sm:px-0 flex items-center text-text-muted font-mono tracking-widest text-xs sm:text-base gap-3">
              <div className="sm:hidden absolute left-[-15px] w-6 h-[2px] bg-primary/30"></div>
              <Calendar size={20} className="text-primary"/>
              <span className="bg-white/5 px-4 py-1 rounded-full border border-white/5">July 2025 – Oct 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
