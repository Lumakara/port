# 🚀 Premium Portfolio

A premium, ultra-modern portfolio website built with React, TypeScript, and cutting-edge animations. This project combines the best features from multiple portfolio templates into one cohesive, high-performance application.

![Portfolio Preview](preview.png)

## ✨ Features

### 🎨 Design & UI
- **Glass Morphism** - Modern glass-like translucent UI elements
- **Gradient Text** - Beautiful gradient typography effects
- **Custom Cursor** - Custom animated cursor with hover effects
- **Noise Texture** - Subtle film grain overlay for premium feel
- **Neo-Brutalist Elements** - Bold shadows and high-contrast accents

### 🎭 Animations & Interactions
- **Lenis Smooth Scroll** - Buttery smooth scrolling with iOS-like momentum
- **Framer Motion** - Declarative animations with React
- **GSAP Integration** - Professional-grade animation library
- **Scroll Reveal** - Elements animate as they enter viewport
- **Parallax Effects** - Multi-layer depth scrolling
- **Orbiting Icons** - Circular animation for tech stack display

### 🛠️ Tech Stack
- **React 18** - Latest React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast development and optimized builds
- **Framer Motion** - Animation library
- **Lenis** - Smooth scroll library
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
premium-portfolio/
├── src/
│   ├── components/
│   │   ├── effects/          # Visual effects (Particles, Cursor, etc.)
│   │   ├── sections/         # Page sections (Hero, About, etc.)
│   │   └── ui/              # UI components (Navbar, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── data/                # Static data (projects, skills)
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── index.html
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd premium-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
```

## 📝 Customization

### Personal Information
Edit `src/data/index.ts` to update:
- Personal details
- Skills
- Projects
- Experience
- Social links

### Styling
- Colors: Edit `tailwind.config.js`
- Global styles: Edit `src/index.css`
- Component styles: Use Tailwind classes or CSS modules

### Images
Replace placeholder images in:
- `src/data/index.ts` - Project thumbnails
- `src/components/sections/About.tsx` - Profile photo

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#030412` | Background |
| Aqua | `#33c2cc` | Primary accent |
| Fuchsia | `#ca2f8c` | Secondary accent |
| Mint | `#57db96` | Success states |
| Royal | `#5c33cc` | Gradients |
| Coral | `#ea4884` | Hover states |

## 🌟 Key Components

### Effects
- **Particles** - Interactive particle system with connections
- **CustomCursor** - Animated cursor with hover states
- **SmoothScroll** - Lenis-powered smooth scrolling
- **OrbitingCircles** - Animated circular tech stack display
- **ScrollProgress** - Progress indicator at top of page

### Sections
- **Hero** - Introduction with animated elements
- **About** - Personal info with service cards
- **Skills** - Tech stack with progress bars
- **Experience** - Timeline of work history
- **Projects** - Portfolio grid with filtering
- **Contact** - Contact form and social links

## 📱 Responsive Design

Fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images with lazy loading
- Code splitting ready
- Reduced motion support
- Touch device detection
- 60fps animations

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

Inspired by:
- Personal-Portfolio (3D Astronaut)
- 3d-portfolio-main (Lenis smooth scroll)
- modern-portfolio-main (Framer Motion)
- NeoBrutalist-main (Neo-brutalist design)
- cg-lusion-cards (GSAP ScrollTrigger)

---

**Built with ❤️ and lots of ☕**
