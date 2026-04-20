import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Cpu, Database, Layout, Terminal, Globe, Zap, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="flex flex-col mb-16"
      >
        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Who I am</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-20 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
          className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed text-justify tracking-tight break-words [hyphens:auto]"
        >
          <p>
            I’m a Full-Stack Developer (MERN) passionate about building scalable, high-performance web applications that solve real-world problems. I specialize in turning complex ideas into clean, intuitive, and user-friendly digital experiences using MongoDB, Express.js, React.js, and Node.js, with a strong focus on performance, scalability, and seamless user experience.
          </p>
          <p>
            Currently pursuing Computer Science at Chandigarh University (2022–2026), I have hands-on experience developing robust RESTful APIs, implementing secure authentication with JWT and bcrypt, and optimizing database queries for efficiency. I write clean, maintainable, and production-ready code, and I’m continuously learning and building to create impactful and reliable software solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Education Box */}
          <div className="glass-card bg-white/10 dark:bg-white/5 p-5 sm:p-8 flex flex-col items-start text-left gap-3 sm:gap-4 hover:-translate-y-3 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group h-full relative overflow-hidden active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-primary/15 transition-all duration-500 rounded-full" />
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-4">
              <div className="group/edu">
                <span className="text-white font-bold text-base sm:text-lg block leading-tight group-hover/edu:text-primary transition-colors">
                  B.E. Computer Science Engineering
                </span>
                <span className="text-primary font-medium block mt-1 tracking-wide uppercase text-[10px] font-mono">
                  Chandigarh University
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-white/5"></div>
                <span className="text-primary font-mono text-[10px] px-3 py-1 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
                  2022 - 2026
                </span>
              </div>

              <p className="text-xs text-text-muted leading-relaxed italic opacity-80">
                Focusing on building high-performance systems and mastering fundamental computer science principles.
              </p>
            </div>
          </div>
          
          {/* Expertise Box - High Impact Design */}
          <div className="glass-card bg-white/10 dark:bg-white/5 p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:-translate-y-3 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden h-full active:scale-[0.98]">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[100px] -mr-24 -mt-24 group-hover:bg-primary/20 transition-all duration-700 rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 blur-[80px] -ml-16 -mb-16 group-hover:bg-secondary/15 transition-all duration-700 rounded-full" />
            
            <div className="flex items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors animate-pulse">
                  <Zap size={24} />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-2xl tracking-tight text-white">Core Expertise</h3>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {[
                { name: 'DBMS & Query Optimization', level: 85, icon: <Database className="w-4 h-4" />, color: 'bg-primary' },
                { name: 'Data Structures & Algorithms', level: 80, icon: <Layout className="w-4 h-4" />, color: 'bg-primary' },
                { name: 'Operating Systems', level: 75, icon: <Terminal className="w-4 h-4" />, color: 'bg-primary' },
                { name: 'Computer Networks', level: 70, icon: <Globe className="w-4 h-4" />, color: 'bg-primary' }
              ].map((item) => (
                <div key={item.name} className="flex flex-col gap-2 group/item">
                  <div className="flex justify-between items-center px-1">
                    <div className="flex items-center gap-2">
                       <span className="text-text-muted group-hover/item:text-primary transition-colors">{item.icon}</span>
                       <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-text-secondary group-hover/item:text-white transition-colors">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-primary font-bold">{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${item.level}%` }}
                       viewport={{ once: true, amount: 0.1 }}
                       transition={{ duration: 1.5, ease: "circOut" }}
                       className={`absolute top-0 left-0 h-full ${item.color} group-hover/item:brightness-125 transition-all shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.5)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Card 1 */}
          <div className="glass-card bg-white/10 dark:bg-white/5 p-5 sm:p-8 flex flex-col items-start text-left gap-3 sm:gap-4 hover:-translate-y-3 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group h-full relative overflow-hidden active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-primary/15 transition-all duration-500 rounded-full" />
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-primary transition-colors">Research Paper</h3>
            <p className="text-sm text-text-muted leading-relaxed text-left tracking-tight break-words">Published a research paper in an international peer-reviewed journal, focusing on scalable browser-based development environments.</p>
          </div>

          {/* Achievement Card 2 */}
          <div className="glass-card bg-white/10 dark:bg-white/5 p-5 sm:p-8 flex flex-col items-start text-left gap-3 sm:gap-4 hover:-translate-y-3 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group h-full relative overflow-hidden active:scale-[0.98]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-accent/15 transition-all duration-500 rounded-full" />
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-accent transition-colors">Wipro Certification</h3>
            <p className="text-sm text-text-muted leading-relaxed text-left tracking-tight break-words">Designed normalized schemas across 8+ tables and optimized 50+ SQL queries to improve data consistency and performance.</p>
            
            <motion.a
              href="https://drive.google.com/file/d/1udq5ZSjWfSIHPWAMH6qB5eSH5KF7F7Nu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold hover:bg-accent hover:text-white transition-all duration-300 group/btn"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
