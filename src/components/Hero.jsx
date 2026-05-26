import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import BrandMarquee from './BrandMarquee'

const roles = [
  'Full Stack Developer',
  'Frontend Lead',
  'React.js Engineer',
  'Shopify Developer',
  'Node.js Specialist',
]

const socials = [
  { Icon: FiGithub,   href: 'https://github.com/arulmozhi2002',             label: 'GitHub'   },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/arul-r-a4b416249', label: 'LinkedIn' },
  { Icon: FiMail,     href: 'mailto:arulrevupdc123@gmail.com',               label: 'Email'    },
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex,   setRoleIndex]   = useState(0)
  const [phase,       setPhase]       = useState('typing')

  useEffect(() => {
    const current = roles[roleIndex]
    if (phase === 'typing') {
      if (displayText === current) {
        const t = setTimeout(() => setPhase('deleting'), 2400)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 85)
      return () => clearTimeout(t)
    }
    if (phase === 'deleting') {
      if (displayText === '') { setRoleIndex(p => (p + 1) % roles.length); setPhase('typing'); return }
      const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 42)
      return () => clearTimeout(t)
    }
  }, [displayText, phase, roleIndex])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D0D12]">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7C3AED 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Violet glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-violet-700/20 rounded-full blur-[120px] pointer-events-none" />
      {/* Cyan glow bottom-right */}
      <div className="absolute bottom-40 right-0 w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 text-center w-full">

          {/* Open-to-work badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-green-500/10 border border-green-500/25 rounded-full mb-10"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-green-400 text-sm font-semibold tracking-wide">
              Open to Work · Full Stack Developer · Frontend Lead
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display font-bold leading-[0.93] tracking-tight mb-6"
          >
            <span className="block text-[clamp(2.8rem,9.5vw,6.5rem)] text-white">
              Arul Mozhi
            </span>
            <span className="block text-[clamp(2.8rem,9.5vw,6.5rem)] text-gradient">
              Selvam R
            </span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex items-center justify-center gap-2 mb-6 h-10"
          >
            <span className="text-xl md:text-2xl text-white/60 font-medium tracking-tight">
              {displayText}
            </span>
            <span className="w-[2px] h-7 bg-violet-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-white/40 text-base md:text-lg max-w-[560px] mx-auto mb-10 leading-relaxed"
          >
            3+ years building production-grade Shopify stores, multi-channel OMS
            platforms, and AI-powered automation tools for D2C brands across India and UAE.
          </motion.p>

          {/* Quick-scan facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2 mb-11"
          >
            {[
              { icon: '⚡', label: '3+ Years Exp' },
              { icon: '⚛️', label: 'React · Vue · Node' },
              { icon: '🛒', label: '30+ D2C Brands' },
              { icon: '📍', label: 'Coimbatore, Tamil Nadu' },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-sm text-white/40">
                <span>{icon}</span>
                <span className="font-medium text-white/70">{label}</span>
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <a
              href="/Resume_Arul (3).pdf"
              download="Arul_Mozhi_Selvam_Resume.pdf"
              className="group w-full sm:w-auto px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/50 flex items-center justify-center gap-2"
            >
              Download Resume
              <span className="group-hover:translate-y-px transition-transform">↓</span>
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="group w-full sm:w-auto px-7 py-3.5 bg-white/[0.06] border border-white/[0.1] hover:border-white/[0.2] text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
            >
              View Projects
              <span className="group-hover:translate-x-px transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-white/30 hover:text-white/70 text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-3"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.05] border border-white/[0.08] hover:border-violet-500/40 hover:text-violet-400 text-white/40 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Brand Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 border-t border-white/[0.06] bg-[#0F0F16] py-8"
      >
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-5 px-6">
          30+ Shopify D2C Brands I've Built For
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0F0F16] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0F0F16] to-transparent" />
          <BrandMarquee />
        </div>
      </motion.div>
    </section>
  )
}
