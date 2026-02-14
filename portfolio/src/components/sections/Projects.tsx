// import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data';
import RevealOnScroll from '../effects/RevealOnScroll';

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-midnight">
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-coral" />
                <span className="text-xs font-mono text-white/60">Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 md:mt-0 text-aqua hover:text-white transition-colors flex items-center gap-2 cursor-hover"
              >
                View All Projects <ExternalLink size={16} />
              </a>
            </RevealOnScroll>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll key={project.id} direction="up" delay={index * 0.2}>
                <div className="project-card group rounded-3xl overflow-hidden bg-navy cursor-hover h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-aqua uppercase tracking-wider">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <Github size={14} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-aqua transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-white/5 text-xs font-mono text-white/70"
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

          {/* Other Projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <RevealOnScroll key={project.id} direction="up" delay={0.3 + index * 0.1}>
                <div className="project-card group rounded-2xl overflow-hidden bg-navy/50 cursor-hover h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-5">
                    <span className="text-xs font-mono text-fuchsia uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-display font-bold mt-1 mb-2 group-hover:text-fuchsia transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <Github size={12} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
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

export default Projects;
