import {
  Particles,
  CustomCursor,
  SmoothScroll,
  ScrollProgress,
} from './components/effects';
import { Navbar } from './components/ui';
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from './components/sections';

function App() {
  return (
    <div className="relative min-h-screen bg-primary text-white overflow-x-hidden">
      {/* Global Effects */}
      <CustomCursor />
      <Particles />
      <ScrollProgress />
      
      {/* Noise Overlay */}
      <div className="noise" />
      
      {/* Smooth Scroll Wrapper */}
      <SmoothScroll>
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
