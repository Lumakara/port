import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { fadeIn, textVariant } from '../../lib/utils';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-aqua/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-fuchsia/20 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-mint/10 rounded-full blur-2xl animate-float animation-delay-500" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-xs font-mono text-white/70">
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                variants={textVariant(0.4)}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6"
              >
                <span className="block text-white">Full Stack</span>
                <span className="block text-gradient">Developer</span>
              </motion.h1>

              <motion.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                animate="show"
                className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10"
              >
                Building digital experiences with modern technologies. 
                Specialized in React, Node.js, and cloud architecture.
              </motion.p>

              <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                animate="show"
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#projects"
                  className="btn-primary flex items-center gap-2 cursor-hover"
                >
                  View Projects
                  <ChevronDown size={18} />
                </a>
                <a
                  href="#contact"
                  className="btn-outline cursor-hover"
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeIn('up', 1)}
                initial="hidden"
                animate="show"
                className="flex items-center justify-center lg:justify-start gap-4 mt-10"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-hover"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-hover"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-hover"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-hover"
                >
                  <FileText size={20} />
                </a>
              </motion.div>
            </div>

            {/* Visual Element - Orbiting Skills */}
            <motion.div
              variants={fadeIn('left', 0.6)}
              initial="hidden"
              animate="show"
              className="hidden lg:flex items-center justify-center relative h-[500px]"
            >
              {/* Center */}
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-aqua to-lavender flex items-center justify-center z-10">
                <span className="text-4xl font-display font-bold text-white">Dev</span>
              </div>

              {/* Orbit Rings */}
              <div className="absolute w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute w-96 h-96 rounded-full border border-white/5" />
              <div className="absolute w-[28rem] h-[28rem] rounded-full border border-white/5" />

              {/* Orbiting Icons */}
              <div className="absolute w-64 h-64 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-navy border border-aqua/30 flex items-center justify-center">
                  <span className="text-aqua text-xs">Re</span>
                </div>
              </div>
              <div className="absolute w-64 h-64 animate-spin-slow" style={{ animationDelay: '-5s' }}>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-navy border border-fuchsia/30 flex items-center justify-center">
                  <span className="text-fuchsia text-xs">Nx</span>
                </div>
              </div>
              <div className="absolute w-96 h-96 animate-spin-slow" style={{ animationDelay: '-10s' }}>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-lg bg-navy border border-mint/30 flex items-center justify-center">
                  <span className="text-mint text-xs">Ts</span>
                </div>
              </div>
              <div className="absolute w-96 h-96 animate-spin-slow" style={{ animationDelay: '-15s' }}>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-lg bg-navy border border-coral/30 flex items-center justify-center">
                  <span className="text-coral text-xs">Nd</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeIn('up', 1.2)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-10 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">5+</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">50+</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">30+</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
