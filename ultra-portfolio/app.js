/**
 * ULTRA PORTFOLIO - Main JavaScript
 * Features: Lenis Smooth Scroll, GSAP Animations, Custom Cursor, Particles, Tilt Effects
 */

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 500);

    // Initialize all modules
    initLenis();
    initCustomCursor();
    initParticles();
    initScrollAnimations();
    initNavigation();
    initTiltEffect();
    initSkillBars();
    initFormHandler();
    initMobileMenu();
    initMagneticButtons();
    initTextScramble();
});

// ===== LENIS SMOOTH SCROLL =====
let lenis;

function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5
                });
            }
        });
    });
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Main cursor with delay
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';

        // Dot follows immediately
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        cursorDot.style.left = dotX - 3 + 'px';
        cursorDot.style.top = dotY - 3 + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('.cursor-hover, a, button, .glass, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Click effects
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

// ===== PARTICLES SYSTEM =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isActive = true;

    // Resize canvas
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = this.getRandomColor();
        }

        getRandomColor() {
            const colors = ['#33c2cc', '#7a57db', '#ea4884', '#57db96', '#d6995c'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    // Create particles (limited for performance)
    const particleCount = window.matchMedia('(pointer: coarse)').matches ? 15 : 30;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Draw connections
    function drawConnections() {
        const maxDistance = 100;
        const maxConnections = 3;

        for (let i = 0; i < particles.length; i++) {
            let connections = 0;
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance && connections < maxConnections) {
                    ctx.beginPath();
                    ctx.strokeStyle = particles[i].color;
                    ctx.globalAlpha = 0.1 * (1 - distance / maxDistance);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                    connections++;
                }
            }
        }
    }

    // Animation loop with visibility check
    function animate() {
        if (!isActive) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    // Visibility handling
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            cancelAnimationFrame(animationId);
        } else {
            isActive = true;
            animate();
        }
    });

    animate();
}

// ===== GSAP SCROLL ANIMATIONS =====
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll Progress Bar
    gsap.to('#scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach((el, i) => {
        const delay = el.style.transitionDelay ? parseFloat(el.style.transitionDelay) : 0;
        
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                setTimeout(() => {
                    el.classList.add('active');
                }, delay * 1000);
            },
            once: true
        });
    });

    // Parallax effects for floating elements
    gsap.utils.toArray('.floating, .floating-delay').forEach(el => {
        gsap.to(el, {
            y: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // Hero parallax
    gsap.to('#hero h1', {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Stagger animation for skill cards
    gsap.from('.tilt-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%',
            once: true
        }
    });

    // Project cards animation
    gsap.from('.project-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 70%',
            once: true
        }
    });

    // Timeline animation
    gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 60%',
            once: true
        }
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Add nav-scrolled style dynamically
    const style = document.createElement('style');
    style.textContent = `
        .nav-scrolled .glass-strong {
            background: rgba(6, 9, 31, 0.95);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
    `;
    document.head.appendChild(style);
}

// ===== TILT EFFECT =====
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 85%',
            onEnter: () => {
                setTimeout(() => {
                    bar.style.width = width + '%';
                    bar.classList.add('active');
                }, 200);
            },
            once: true
        });
    });
}

// ===== FORM HANDLER =====
function initFormHandler() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show toast
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
        
        // Reset form
        form.reset();
        
        // Hide toast after 3s
        setTimeout(() => {
            toast.style.transform = 'translateY(20px)';
            toast.style.opacity = '0';
        }, 3000);
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!menuBtn || !mobileMenu) return;

    function openMenu() {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.pointerEvents = 'none';
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic, .btn-primary, .btn-outline');
    
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== TEXT SCRAMBLE EFFECT =====
function initTextScramble() {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = chars;
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 20);
                const end = start + Math.floor(Math.random() * 20);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += `<span class="text-aqua">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            this.el.innerHTML = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    // Apply to elements with data-scramble
    document.querySelectorAll('[data-scramble]').forEach(el => {
        const fx = new TextScramble(el);
        const originalText = el.innerText;
        
        el.addEventListener('mouseenter', () => {
            fx.setText(originalText);
        });
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll to element
function scrollToElement(element, offset = 0) {
    if (lenis) {
        lenis.scrollTo(element, { offset });
    } else {
        const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

// Intersection Observer helper
function observeElement(element, callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, defaultOptions);
    
    observer.observe(element);
    return observer;
}

// ===== PREFERS REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable complex animations
    document.querySelectorAll('.floating, .floating-delay, .orbit-item, .marquee-track').forEach(el => {
        el.style.animation = 'none';
    });
}

// ===== EXPORT FOR MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initLenis, initCustomCursor, initParticles };
}
