import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, 
  SiTailwindcss, SiPython, SiMongodb, SiPostgresql,
  SiDocker, SiGit, SiFigma, SiThreedotjs, SiFramer,
  SiJavascript
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const skills: Skill[] = [
  { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
  { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
  { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, level: 82, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: '#336791' },
  { name: 'Docker', icon: SiDocker, level: 78, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, level: 75, color: '#FF9900' },
  { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, level: 85, color: '#F24E1E' },
  { name: 'Three.js', icon: SiThreedotjs, level: 70, color: '#ffffff' },
  { name: 'Framer Motion', icon: SiFramer, level: 88, color: '#0055FF' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Platform e-commerce lengkap dengan payment gateway, inventory management, dan dashboard analytics real-time. Dibangun dengan Next.js dan Node.js.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Dashboard analytics dengan visualisasi data interaktif menggunakan D3.js dan React. Mendukung export reports dan integrasi dengan berbagai data sources.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['React', 'D3.js', 'TypeScript', 'Python', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Real-time Chat App',
    category: 'Web Application',
    description: 'Aplikasi chat real-time dengan fitur grup chat, file sharing, dan notifikasi push menggunakan WebSocket dan Socket.io.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Aplikasi mobile banking dengan fitur transfer, QRIS payment, dan manajemen keuangan pribadi. Dibangun dengan React Native.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Node.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '5',
    title: 'AI Image Generator',
    category: 'AI/ML',
    description: 'Platform generate gambar menggunakan AI dengan integrasi Stable Diffusion API. Dilengkapi dengan gallery dan sistem user management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Portfolio website 3D dengan animasi interaktif menggunakan Three.js dan React Three Fiber. Dilengkapi dengan smooth scroll dan particle effects.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Indonesia',
    location: 'Jakarta, Indonesia',
    startDate: '2022-01',
    endDate: 'Present',
    description: [
      'Memimpin pengembangan aplikasi web enterprise dengan tim 5 developer',
      'Bertanggung jawab atas arsitektur sistem dan code review',
      'Mengimplementasikan CI/CD pipeline yang mengurangi deployment time 50%',
      'Mentoring junior developers dan mengadakan tech sharing sessions',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Startup Digital',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Mengembangkan MVP untuk 3 produk digital dari nol hingga deployment',
      'Mengimplementasikan CI/CD pipeline dan testing otomatis',
      'Mengoptimasi performa aplikasi yang meningkatkan load time 40%',
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Redis'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Web Agency',
    location: 'Bandung, Indonesia',
    startDate: '2019-03',
    endDate: '2020-05',
    description: [
      'Membangun website responsif untuk 20+ klien dengan berbagai industri',
      'Mengoptimalkan performa web dan implementasi SEO',
      'Berkolaborasi dengan tim desain untuk implementasi pixel-perfect',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'jQuery', 'Bootstrap'],
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
};
