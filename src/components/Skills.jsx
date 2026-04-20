import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TailwindCSS", "Axios"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Java", "RESTful API", "JWT Auth", "bcrypt"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "DataBase",
    skills: ["MongoDB", "MySQL", "MS SQL Server", "SQL"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Deployment",
    skills: ["Git & GitHub", "Postman", "VS Code", "Eclipse", "Vercel", "Render"],
    color: "from-orange-500 to-yellow-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container section-padding bg-surface/30 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">My Toolkit</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle mx-auto">Technologies and tools I use to build scalable full-stack applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card bg-white dark:bg-white/5 p-5 sm:p-8 flex flex-col hover:-translate-y-3 hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden group active:scale-[0.98] h-full border border-slate-200 dark:border-white/5 shadow-lg shadow-slate-200/50"
          >
            {/* Hover Glow */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br \${category.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
            
            <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/10 pb-3 sm:pb-4 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            
            <ul className="space-y-3 sm:space-y-4">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-text-secondary group-hover:text-primary dark:group-hover:text-white transition-colors">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r \${category.color}`}></div>
                  <span className="font-medium tracking-wide">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;