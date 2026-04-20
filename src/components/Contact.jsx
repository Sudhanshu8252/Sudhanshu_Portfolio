import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Code, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { useState, useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    const formData = new FormData(form.current);
    // Web3Forms access key — get yours free at https://web3forms.com
    formData.append('access_key', 'e1496940-aa7b-41e6-9da7-712272c54228');
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('to_name', 'Sudhanshu Ranjan');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, success: true, error: false });
        form.current.reset();
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('FAILED...', error);
      setStatus({ submitting: false, success: false, error: true });
      setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
    }
  };

  return (
    <section id="contact" className="section-container section-padding">
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
        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Have a question or want to work together? Let's connect.</p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 space-y-8"
        >
          <div className="glass-card p-6 md:p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-mono mb-1">Email</p>
                    <a href="mailto:sudhanshuranjan9608@gmail.com" className="text-white hover:text-primary transition-colors text-sm sm:text-lg font-medium break-all">
                      sudhanshuranjan9608@gmail.com
                    </a>
                  </div>
                </div>


                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-mono mb-1">Location</p>
                    <p className="text-white text-sm sm:text-lg font-medium">
                      Punjab, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-sm text-text-muted font-mono mb-4 uppercase tracking-widest">Follow Me</h4>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Sudhanshu8252" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/sudhanshu-ranjan-9479b8294/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-secondary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://leetcode.com/u/Sudhanshu4594/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all">
                  <Code size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3"
        >
          <form ref={form} className="glass-card p-8 md:p-10" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-display font-bold text-white mb-8">Send me a message</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-text-muted">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-text-muted">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="subject" className="text-sm font-mono text-text-muted">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message" className="text-sm font-mono text-text-muted">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="5"
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status.submitting}
              className={`btn-primary w-full max-w-md mx-auto py-4 text-sm uppercase tracking-widest font-bold flex items-center justify-center ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status.submitting ? 'Sending...' : 'Send Message'} 
              {!status.submitting && <Send size={16} className="ml-2" />}
            </button>
            
            {status.success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg flex items-center justify-center gap-2 font-mono text-sm"
              >
                <CheckCircle size={16} /> Message sent successfully!
              </motion.div>
            )}
            
            {status.error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg flex items-center justify-center gap-2 font-mono text-sm"
              >
                <AlertCircle size={16} /> Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;