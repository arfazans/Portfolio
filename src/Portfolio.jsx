'use client'
import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const projects = [
  {
    title: 'PlanTogether',
    type: 'MERN · AI · Real-time collaboration',
    description:
      'An AI-powered group chat and event planning platform with Socket.io messaging, Gemini suggestions, social sharing, Redis caching, and secure JWT authentication.',
    image:
      '../dist/assets/plattogether.png',
    link: 'https://github.com/arfazans/PlanToget',
  },
  {
    title: 'OpsHub',
    type: 'React · Node · PostgreSQL · Hackathon',
    description:
      'A multi-tenant operations hub with a visual React Flow site builder, role-based workflows, versioned publishing, analytics, and Excel import/export.',
    image:
      '../dist/assets/opshub.png',
    link: 'https://github.com/arfazans/OPSHUB',
  },
  {
    title: 'Lost & Found',
    type: 'MERN · Cloudinary · Tailwind CSS',
    description:
      'A full-stack platform for managing lost and found items with MVC architecture, CRUD APIs, authentication, media uploads, and responsive navigation.',
    image:
      '../dist/assets/lost&found.png',
    link: 'https://github.com/arfazans/LostandFound',
  },
]

const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'AWS', 'Git & GitHub', 'Socket.io', 'PostgreSQL', 'Java', 'Python']

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio-shell">
      <div className="page-frame">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Arfaz Ansari home">
            <span className="brand-mark">AA</span>
            <span>Arfaz<span className="accent">.</span></span>
          </a>
          <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={21} />}
          </button>
        </header>
        <div className="header-social">
          <a href="https://github.com/arfazans/" aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg></a>
          <a href="https://wa.me/7458035852" aria-label="WhatsApp" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></a>
          <a href="https://www.instagram.com/arfaazz_._/" aria-label="Instagram" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          <a href="https://www.reddit.com/u/hopes_never_end/" aria-label="Reddit" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg></a>
          <a href="https://x.com/Arfaz9448" aria-label="Twitter / X" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="https://leetcode.com/u/arfaz_ansari/" aria-label="LeetCode" target="_blank" rel="noreferrer" className="social-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
        </div>

        <section className="hero" id="top">
          <div className="social-rail" aria-label="Social links">
            <a href="https://github.com/arfazans/" aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="https://wa.me/7458035852" aria-label="WhatsApp" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.instagram.com/arfaazz_._/" aria-label="Instagram" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.reddit.com/u/hopes_never_end/" aria-label="Reddit" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
            <a href="https://x.com/Arfaz9448" aria-label="Twitter / X" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://leetcode.com/u/arfaz_ansari/" aria-label="LeetCode" target="_blank" rel="noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
            <span className="rail-line" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Hello, I&apos;m Arfaz</p>
            <h1>Building thoughtful <span className="accent">digital</span> experiences.</h1>
            <p className="hero-intro">MCA student and MERN-stack developer with startup experience, building reliable products from idea to deployment.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="glow-orb" />
            <div className="code-card">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="code-lines">
                <span><b>const</b> developer = {'{'}</span>
                <span className="indent"><em>name</em>: <strong>&quot;Arfaz&quot;</strong>,</span>
                <span className="indent"><em>stack</em>: <strong>&quot;MERN&quot;</strong>,</span>
                <span className="indent"><em>coffee</em>: <strong>true</strong>,</span>
                <span>{'}'}</span>
              </div>
              <div className="cursor" />
            </div>
            <span className="shape shape-one" /><span className="shape shape-two" /><span className="shape shape-three" />
          </div>
          <a className="scroll-cue" href="#about"><span>scroll down</span><ArrowDown size={16} /></a>
        </section>

        <section className="content-section about-section" id="about">
          <Reveal className="section-tag"><span className="section-ghost">01</span><span className="section-label">About me</span></Reveal>
          <div className="about-grid">
            <Reveal><div className="portrait-placeholder"> <img className='w-full h-full object-cover' src="../dist/assets/arfaz.png" alt="" srcset="" /><div className="portrait-caption">developer / learner / builder</div></div></Reveal>
            <Reveal className="about-copy">
              <h2>Curious by nature.<br /><span className="accent">Serious about craft.</span></h2>
              <p>I&apos;m Arfaz Ansari, a second-year MCA student at VESIT and a MERN-stack developer with a 9.00 CGPA in BCA. I enjoy turning complex requirements into dependable, user-friendly products.</p>
              <p>My experience spans CRM development at Ashwamedh Motors and full backend ownership for a fast-moving delivery startup at Zpin, including REST APIs, databases, AWS deployment, and production workflows.</p>
              <a className="text-link" href="mailto:arfaz9448@gmail.com">More about me <ArrowUpRight size={15} /></a>
            </Reveal>
          </div>
        </section>

        <section className="content-section work-section" id="work">
          <Reveal className="section-heading"><div><div className="section-tag"><span className="section-ghost">02</span><span className="section-label">Selected work</span></div><h2>A few things I&apos;ve <span className="accent">made.</span></h2></div><span className="section-count">03 projects</span></Reveal>
          <div className="project-grid">{projects.map((project, index) => <Reveal className="project-card" key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-number">0{index + 1}</span></div><div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><a href={project.link} aria-label={`Open ${project.title}`}><ArrowUpRight size={19} /></a></div><p className="project-description">{project.description}</p></Reveal>)}</div>
        </section>

        <section className="content-section experience-section" id="experience">
          <Reveal className="section-tag"><span className="section-ghost">03</span><span className="section-label">Experience</span></Reveal>
          <div className="experience-list">
            <Reveal className="experience-item"><div><p className="project-type">Oct 2025 — Mar 2026 · Startup</p><h3>Backend Developer Intern · Zpin Pvt. Ltd.</h3></div><p>Owned the backend for a hybrid 2–12 hour delivery platform, building REST APIs for orders, inventory, payments, and delivery logistics while managing AWS deployment and database architecture.</p></Reveal>
            <Reveal className="experience-item"><div><p className="project-type">Jun 2025 — Aug 2025 · Internship</p><h3>MERN-Stack Developer Intern · Ashwamedh Motors</h3></div><p>Collaborated on a CRM system and implemented core authentication, authorization, and backend features that improved product functionality and performance.</p></Reveal>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <Reveal className="section-tag"><span className="section-ghost">04</span><span className="section-label">Toolkit</span></Reveal>
          <div className="skills-layout"><Reveal><h2>Tools I use to turn<br /><span className="accent">ideas into reality.</span></h2></Reveal><Reveal className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}</div>)}</Reveal></div>
        </section>

        <section className="content-section contact-section" id="contact">
          <Reveal><div className="section-tag"><span className="section-ghost">05</span><span className="section-label">Get in touch</span></div><h2>Have a good idea?<br /><span className="accent">Let&apos;s make it real.</span></h2><a className="button button-primary" href="mailto:arfaz9448@gmail.com">Say hello <ArrowUpRight size={16} /></a></Reveal>
        </section>

        <footer className="site-footer"><span>© 2026 Arfaz Ansari</span><span className="footer-tag">&lt;/&gt;</span><div className="footer-links"><a href="https://github.com/arfazans/">GitHub</a><a href="https://www.linkedin.com/in/arfaz9448/">LinkedIn</a></div></footer>
      </div>
    </main>
  )
}
