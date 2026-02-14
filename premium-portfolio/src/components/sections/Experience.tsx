import { experiences } from '../../data';
import RevealOnScroll from '../effects/RevealOnScroll';
import { formatDate } from '../../lib/utils';

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-mint" />
                <span className="text-xs font-mono text-white/60">Experience</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                Work <span className="text-gradient">History</span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-16 space-y-12">
            {/* Vertical Line */}
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <RevealOnScroll key={exp.id} direction="left" delay={index * 0.2}>
                <div className="relative">
                  {/* Dot */}
                  <div 
                    className="timeline-dot"
                    style={{
                      backgroundColor: ['#33c2cc', '#7a57db', '#ea4884'][index % 3],
                      boxShadow: `0 0 0 2px ${['#33c2cc', '#7a57db', '#ea4884'][index % 3]}`,
                    }}
                  />
                  
                  {/* Content Card */}
                  <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all cursor-hover">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-aqua font-medium">{exp.company}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-mint/10 text-mint text-sm font-mono mt-2 md:mt-0 w-fit">
                        {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                          <span className="text-aqua mt-1">›</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
