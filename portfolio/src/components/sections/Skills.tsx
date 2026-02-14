import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data';
import RevealOnScroll from '../effects/RevealOnScroll';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-midnight">
      <div ref={sectionRef} className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-fuchsia" />
                <span className="text-xs font-mono text-white/60">My Skills</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                Technologies <span className="text-gradient">I Use</span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.slice(0, 9).map((skill, index) => (
              <RevealOnScroll key={skill.name} direction="up" delay={index * 0.1}>
                <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all cursor-hover group">
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-2xl font-display font-bold text-gradient">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Tech Stack Orbit */}
          <RevealOnScroll direction="up" delay={0.5}>
            <div className="mt-20 relative h-80 flex items-center justify-center">
              {/* Orbit Rings */}
              <div className="absolute w-48 h-48 rounded-full border border-white/10" />
              <div className="absolute w-72 h-72 rounded-full border border-white/5" />
              <div className="absolute w-96 h-96 rounded-full border border-white/5" />
              
              {/* Center */}
              <div className="text-center z-10">
                <div className="text-5xl font-display font-bold text-gradient">Tech</div>
                <div className="text-sm text-white/40">Stack</div>
              </div>

              {/* Orbiting Icons */}
              {skills.slice(0, 8).map((skill, index) => {
                const radius = index < 4 ? 96 : 160;
                const duration = index < 4 ? 15 : 25;
                const delay = (index % 4) * -(duration / 4);
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      ease: 'linear',
                      delay,
                    }}
                    style={{ width: radius * 2, height: radius * 2 }}
                  >
                    <div
                      className="absolute w-10 h-10 rounded-lg bg-navy border border-white/10 flex items-center justify-center"
                      style={{
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: skill.color,
                      }}
                    >
                      <skill.icon className="w-5 h-5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;
