import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import RevealOnScroll from '../effects/RevealOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-midnight">
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <RevealOnScroll direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-royal" />
                  <span className="text-xs font-mono text-white/60">Get In Touch</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                  Let&apos;s Work <span className="text-gradient">Together</span>
                </h2>
                
                <p className="text-white/60 mb-10 leading-relaxed">
                  Have a project in mind? I&apos;d love to hear about it. Send me a message 
                  and let&apos;s create something amazing together.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-aqua" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40">Email</div>
                      <a href="mailto:hello@portfolio.com" className="font-display font-bold hover:text-aqua transition-colors cursor-hover">
                        hello@portfolio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-fuchsia/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-fuchsia" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40">Phone</div>
                      <a href="tel:+6281234567890" className="font-display font-bold hover:text-fuchsia transition-colors cursor-hover">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40">Location</div>
                      <span className="font-display font-bold">Jakarta, Indonesia</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <div className="text-sm text-white/40 mb-4">Follow Me</div>
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-aqua hover:text-primary transition-all cursor-hover"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Form */}
            <RevealOnScroll direction="right">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-mint" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/60">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className="form-input resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 cursor-hover disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
