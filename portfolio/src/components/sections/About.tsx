import { Code2, Palette, Server, Globe } from 'lucide-react';
import RevealOnScroll from '../effects/RevealOnScroll';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Full stack web applications with modern technologies',
    color: 'aqua',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    color: 'fuchsia',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    description: 'Scalable APIs and database architecture',
    color: 'mint',
  },
  {
    icon: Globe,
    title: 'Cloud Solutions',
    description: 'AWS deployment and DevOps practices',
    color: 'coral',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-30" />
      
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-aqua to-fuchsia rounded-3xl opacity-30 blur-2xl" />
                <div className="relative glass rounded-3xl p-2">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-indigo flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-aqua via-lavender to-fuchsia p-1">
                        <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                          <span className="text-6xl">👨‍💻</span>
                        </div>
                      </div>
                      <p className="font-mono text-sm text-white/40">Your Photo Here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint to-aqua flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold">5+</div>
                      <div className="text-xs text-white/40">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Content Side */}
            <div>
              <RevealOnScroll direction="right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  <span className="text-xs font-mono text-white/60">About Me</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                  Building the <span className="text-gradient">Future</span> Digital
                </h2>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.1}>
                <div className="space-y-4 text-white/60 leading-relaxed mb-8">
                  <p>
                    I am a passionate Full Stack Developer with over 5 years of experience 
                    creating web applications that solve real-world problems. My journey in 
                    tech started with a curiosity about how things work on the internet.
                  </p>
                  <p>
                    Today, I specialize in building scalable applications using React, 
                    Node.js, and modern cloud technologies. I believe in writing clean, 
                    maintainable code and creating intuitive user experiences.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <RevealOnScroll key={service.title} direction="up" delay={0.2 + index * 0.1}>
                    <div className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-hover group">
                      <service.icon 
                        className={`w-8 h-8 text-${service.color} mb-3 group-hover:scale-110 transition-transform`} 
                      />
                      <div className="font-display font-bold text-white mb-1">
                        {service.title}
                      </div>
                      <div className="text-xs text-white/40">
                        {service.description}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
