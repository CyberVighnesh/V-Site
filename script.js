/* ===================================
   CSS Variables & Reset
   =================================== */
:root {
    /* Color Palette - Dark Cloud Theme */
    --bg-primary: #0a0e1a;
    --bg-secondary: #0f172a;
    --bg-tertiary: #1e293b;
    --bg-card: rgba(30, 41, 59, 0.6);

    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;

    --accent-primary: #06b6d4;
    --accent-secondary: #0ea5e9;
    --accent-gradient: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);

    --border-color: rgba(148, 163, 184, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
    --shadow-glow: 0 0 20px rgba(6, 182, 212, 0.3);

    /* Typography */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Spacing */
    --section-padding: 100px 0;
    --container-max-width: 1200px;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

/* ===================================
   Typography
   =================================== */
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
    line-height: 1.2;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* ===================================
   Layout Utilities
   =================================== */
.container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 2rem;
}

.section {
    padding: var(--section-padding);
    position: relative;
}

/* ===================================
   Navigation
   =================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(10, 14, 26, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
    z-index: 1000;
    transition: var(--transition-normal);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-fast);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: var(--transition-normal);
}

.nav-link:hover {
    color: var(--accent-primary);
}

.nav-link:hover::after {
    width: 100%;
}

/* ===================================
   Hero Section
   =================================== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top, #1e293b 0%, #0a0e1a 100%);
    z-index: 0;
}

/* Animated Cloud Layers */
.cloud-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
}

.cloud-layer:nth-child(2) {
    animation-delay: -7s;
    animation-duration: 25s;
}

.cloud-layer:nth-child(3) {
    animation-delay: -14s;
    animation-duration: 30s;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-20px) translateX(20px);
    }
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.hero-name {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-title {
    font-size: 1.75rem;
    color: var(--accent-primary);
    font-weight: 500;
    margin-bottom: 1rem;
}

.hero-tagline {
    font-size: 1.25rem;
    color: var(--text-secondary);
    font-style: italic;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-cta {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.scroll-indicator span {
    display: block;
    width: 24px;
    height: 40px;
    border: 2px solid var(--accent-primary);
    border-radius: 20px;
    position: relative;
}

.scroll-indicator span::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 2px;
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(16px);
    }
}

/* ===================================
   Buttons
   =================================== */
.btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition-normal);
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: var(--accent-gradient);
    color: white;
    box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
}

.btn-secondary {
    background: transparent;
    color: var(--accent-primary);
    border-color: var(--accent-primary);
}

.btn-secondary:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
}

/* ===================================
   About Section
   =================================== */
.about {
    background: var(--bg-secondary);
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-text .lead {
    font-size: 1.375rem;
    color: var(--text-primary);
    font-weight: 500;
}

.about-text strong {
    color: var(--accent-primary);
    font-weight: 600;
}

/* ===================================
   Skills Section
   =================================== */
.skills {
    background: var(--bg-primary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.skill-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2rem;
    transition: all var(--transition-normal);
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
}

.skill-card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.skill-icon {
    width: 48px;
    height: 48px;
    background: var(--accent-gradient);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.skill-icon svg {
    width: 28px;
    height: 28px;
}

.skill-card h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
}

.skill-list {
    list-style: none;
}

.skill-list li {
    margin-bottom: 1.5rem;
}

.skill-name {
    display: block;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.skill-bar {
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--accent-gradient);
    border-radius: 4px;
    transition: width 1s ease;
}

/* ===================================
   Experience Section
   =================================== */
.experience {
    background: var(--bg-secondary);
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--accent-gradient);
}

.timeline-item {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 3rem;
}

.timeline-marker {
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    background: var(--accent-primary);
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--bg-secondary), 0 0 0 6px var(--accent-primary);
}

.timeline-content {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    transition: all var(--transition-normal);
}

.timeline-content:hover {
    transform: translateX(10px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-md);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.timeline-content h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
}

.timeline-badge {
    padding: 0.375rem 1rem;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.timeline-badge.current {
    background: var(--accent-gradient);
    color: white;
}

.company {
    color: var(--accent-primary);
    font-size: 1.125rem;
    margin-bottom: 1rem;
    font-weight: 500;
}

.experience-list {
    list-style: none;
    margin-left: 0;
}

.experience-list li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
}

.experience-list li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: bold;
}

/* ===================================
   Projects Section
   =================================== */
.projects {
    background: var(--bg-primary);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2rem;
    transition: all var(--transition-normal);
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
}

.project-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.project-icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    background: var(--accent-gradient);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.project-icon svg {
    width: 28px;
    height: 28px;
}

.project-card h3 {
    font-size: 1.25rem;
    color: var(--text-primary);
    line-height: 1.4;
}

.project-description {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    padding: 0.375rem 0.875rem;
    background: var(--bg-tertiary);
    color: var(--accent-primary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(6, 182, 212, 0.2);
}

/* ===================================
   Certificates Section
   =================================== */
.certificates {
    background: var(--bg-secondary);
}

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.certificate-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2rem;
    transition: all var(--transition-normal);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.certificate-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent-gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
}

.certificate-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
}

.certificate-card:hover::before {
    transform: scaleX(1);
}

.certificate-badge {
    width: 80px;
    height: 80px;
    background: var(--accent-gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow-glow);
    transition: all var(--transition-normal);
}

.certificate-card:hover .certificate-badge {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
}

.certificate-badge svg {
    width: 40px;
    height: 40px;
    color: white;
}

.certificate-content {
    width: 100%;
}

.certificate-name {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    font-weight: 600;
    line-height: 1.4;
}

.certificate-issuer {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.certificate-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: transparent;
    color: var(--accent-primary);
    border: 2px solid var(--accent-primary);
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.certificate-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--accent-gradient);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-normal);
    z-index: -1;
}

.certificate-link:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.certificate-link:hover::before {
    transform: scaleX(1);
}

.certificate-link svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
}

.certificate-link:hover svg {
    transform: translateX(4px);
}

/* ===================================
   Contact Section
   =================================== */
.contact {
    background: var(--bg-secondary);
}

.contact-intro {
    text-align: center;
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 3rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.contact-card {
    background: var(--bg-card);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    text-decoration: none;
    transition: all var(--transition-normal);
    display: block;
}

.contact-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
}

.contact-icon {
    width: 64px;
    height: 64px;
    background: var(--accent-gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
}

.contact-icon svg {
    width: 32px;
    height: 32px;
}

.contact-card h3 {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.contact-card p {
    color: var(--text-secondary);
    word-break: break-word;
}

/* ===================================
   Footer
   =================================== */
.footer {
    background: var(--bg-primary);
    border-top: 1px solid var(--border-color);
    padding: 2rem 0;
    text-align: center;
}

.footer p {
    color: var(--text-muted);
}

/* ===================================
   Animations
   =================================== */
.fade-in {
    animation: fadeIn 1s ease-in;
}

.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===================================
   Responsive Design
   =================================== */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }

    .hero-name {
        font-size: 2.5rem;
    }

    .hero-title {
        font-size: 1.25rem;
    }

    .hero-tagline {
        font-size: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .timeline::before {
        left: 0;
    }

    .timeline-item {
        padding-left: 2rem;
    }

    .hero-cta {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 300px;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }

    .hero-name {
        font-size: 2rem;
    }

    .section {
        padding: 60px 0;
    }
}
