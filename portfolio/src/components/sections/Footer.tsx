import { Heart, Coffee } from 'lucide-react';
import { navLinks } from '../../data';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-display font-bold text-gradient cursor-hover">
                PORTFOLIO
              </a>
              <p className="text-sm text-white/40 mt-2">
                Building digital experiences with passion.
              </p>
            </div>

            <div className="flex items-center gap-8">
              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors cursor-hover"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </p>
              <p className="text-xs text-white/20 mt-1 flex items-center justify-center md:justify-end gap-1">
                Built with <Heart className="w-3 h-3 text-coral fill-coral" /> & lots of <Coffee className="w-3 h-3 text-sand" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
