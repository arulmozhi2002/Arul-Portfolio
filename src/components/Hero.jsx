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
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAFAFA]">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: 'radial-gradient(circle, #DDD6FE 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Single soft violet glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-100/60 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 text-center w-full">

          {/* Open-to-work badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-10"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-60" />
              <span className="relative rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-green-700 text-sm font-semibold tracking-wide">
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
            <span className="block text-[clamp(2.8rem,9.5vw,6.5rem)] text-gray-900">
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
            <span className="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">
              {displayText}
            </span>
            <span className="w-[2px] h-7 bg-violet-500 rounded-full animate-pulse" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="text-gray-500 text-base md:text-lg max-w-[560px] mx-auto mb-10 leading-relaxed"
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
              <span key={label} className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>{icon}</span>
                <span className="font-medium text-gray-700">{label}</span>
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
              className="group w-full sm:w-auto px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-violet-200 flex items-center justify-center gap-2"
            >
              Download Resume
              <span className="group-hover:translate-y-px transition-transform">↓</span>
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="group w-full sm:w-auto px-7 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              View Projects
              <span className="group-hover:translate-x-px transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
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
                className="p-2.5 bg-white border border-gray-200 hover:border-violet-300 hover:text-violet-600 text-gray-400 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Brand Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 border-t border-gray-200 bg-white py-8"
      >
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-gray-400 font-semibold mb-5 px-6">
          30+ Shopify D2C Brands I've Built For
        </p>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />
          <BrandMarquee />
        </div>
      </motion.div>
    </section>
  )
}
