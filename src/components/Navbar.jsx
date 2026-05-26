import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    )
    document.querySelectorAll('section[id]').forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  const scrollTo = href => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0D12]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-display font-bold text-sm">
            AM
          </div>
          <span className="hidden sm:block font-display font-semibold text-white text-sm tracking-tight">
            Arul<span className="text-violet-400">.</span>dev
          </span>
        </button>

        <nav className="hidden md:flex items-center">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'text-violet-300'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-violet-500/10 rounded-lg border border-violet-500/20"
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:arulrevupdc123@gmail.com"
            className="hidden md:inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-violet-900/40"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/50 hover:text-white"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#13131A] border-t border-white/[0.06] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === href.replace('#', '')
                      ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="mailto:arulrevupdc123@gmail.com"
                className="mt-2 px-4 py-3 bg-violet-600 text-white text-sm font-semibold rounded-xl text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
