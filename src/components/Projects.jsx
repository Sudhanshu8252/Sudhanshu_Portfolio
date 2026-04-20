import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: "AI-Powered Resume Builder",
    date: "Feb 2026 – Mar 2026",
    description: "Engineered an AI-powered resume builder platform using the MERN stack, enabling users to create, edit, and manage professional resumes through dynamic and customizable templates. Implemented JWT-based authentication along with role-based access control to ensure secure handling of user data. Integrated AI-driven content generation features to assist users in crafting high-quality, ATS-optimized resume sections. Optimized RESTful APIs and database queries to improve performance, ensuring efficient data processing and a seamless user experience.",
    tech: ["MERN Stack", "RESTful APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "MongoDB"],
    image: "/Project-1.png",
    github: "https://github.com/Sudhanshu8252/Resume-Builder-MERN",
    live: "https://resume-builder-snowy-rho.vercel.app/"
  },
  {
    title: "Expense Tracker",
    date: "Sep 2025",
    description: "I developed a personal finance management system using the MERN stack that enables users to track and manage 50+ financial transactions with categorized expense monitoring and accurate balance calculations. The application is designed with efficient data structures for fast data retrieval and includes secure JWT-based authentication, delivering a reliable, scalable, and user-friendly financial tracking experience.",
    tech: ["Personal Finance Management System", "MERN Stack", "JWT Authentication", "Data Modeling & Storage", "Transaction Management"],
    image: "/project-3.png",
    github: "https://github.com/Sudhanshu8252/Expense_Tracker",
    live: "https://expensetracker-topaz-xi.vercel.app/"
  },
  {
    title: "Web-Based IDE",
    date: "Oct 2025 – Nov 2025",
    description: "I developed an in-browser coding environment using React.js that allows users to write and execute HTML, CSS, and JavaScript in real time with instant preview. The platform supports multi-file projects and is built with a modular architecture of 12+ reusable components, making it scalable, maintainable, and efficient for feature expansion while delivering a smooth and interactive coding experience.",
    tech: ["In-Browser Code Editor", "Real-Time Code Execution", "React.js", "Modular Component Architecture", "JavaScript (HTML, CSS, JS Execution)"],
    image: "/project-2.png",
    github: "https://github.com/Sudhanshu8252/Web-Based-Ide",
    live: "https://web-based-ide-delta.vercel.app/"
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="section-container section-padding">
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
        <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-2">My Work</span>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Real-world projects demonstrating my capabilities in building full-stack applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card bg-white/10 dark:bg-white/5 flex flex-col h-full rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 border border-white/5 active:scale-[0.98]"
          >
            {/* Image Container */}
            <div className="w-full relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Hover Overlay - always visible on mobile */}
              <div className="absolute inset-0 bg-black/80 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 backdrop-blur-sm">
                <a href={project.live} target="_blank" rel="noreferrer" className="px-5 sm:px-6 py-2 sm:py-2.5 bg-primary text-white rounded-lg text-xs sm:text-sm font-bold flex items-center hover:scale-105 transition-transform shadow-lg shadow-primary/30 w-32 sm:w-40 justify-center">
                  <ExternalLink size={14} className="mr-2" /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white/10 text-white border border-white/20 rounded-lg text-xs sm:text-sm font-bold flex items-center hover:bg-white hover:text-black transition-all shadow-lg w-32 sm:w-40 justify-center">
                  <Github size={14} className="mr-2" /> GitHub
                </a>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 sm:mb-8 flex-grow text-xs sm:text-sm text-justify tracking-tight [hyphens:auto] break-words">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-white/5">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 rounded-md text-[10px] sm:text-[11px] font-mono text-text-muted border border-white/5 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 flex justify-center w-full"
      >
        <a 
          href="https://github.com/Sudhanshu8252" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-primary py-4 px-8 inline-flex items-center text-sm uppercase tracking-widest font-bold group"
        >
          View More Projects 
          <Github className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;