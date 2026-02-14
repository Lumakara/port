# Portfolio Website

Website portfolio modern yang siap untuk produksi, dibangun dengan teknologi terbaru.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP + Framer Motion
- **3D Graphics:** Three.js + React Three Fiber
- **Icons:** Lucide React

## 📁 Struktur Folder

```
port/
├── portfolio/              # Project utama
│   ├── dist/              # Build production (siap deploy)
│   ├── src/
│   │   ├── components/    # Komponen React
│   │   ├── sections/      # Section pages
│   │   ├── effects/       # Efek khusus
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utility functions
│   │   ├── data/          # Data statis
│   │   └── types/         # TypeScript types
│   ├── public/            # Asset publik
│   ├── index.html
│   └── package.json
└── README.md
```

## 🛠️ Development

```bash
cd portfolio
npm install
npm run dev
```

## 🏗️ Build Production

```bash
npm run build
```

Folder `dist/` akan berisi file static yang siap di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- atau hosting static lainnya

## 🌐 Deploy

Folder `dist/` sudah berisi build production yang siap deploy. Anda bisa langsung upload folder tersebut ke hosting static.

---

**Dibuat:** 2026  
**Versi:** 1.0.0
