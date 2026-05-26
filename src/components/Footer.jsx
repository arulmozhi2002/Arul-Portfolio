import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { navLinks } from '../data'

export default function Footer() {
  const scrollTo  = href => document.getElementById(href.replace('#',''))?.scrollIntoView({behavior:'smooth'})
  const scrollTop = ()   => window.scrollTo({top:0,behavior:'smooth'})

  const socials = [
    { Icon:FiLinkedin, href:'https://www.linkedin.com/in/arul-r-a4b416249', label:'LinkedIn' },
    { Icon:FiGithub,   href:'https://github.com/arulmozhi2002',             label:'GitHub'   },
    { Icon:FiMail,     href:'mailto:arulrevupdc123@gmail.com',               label:'Email'    },
  ]

  return (
    <footer className="border-t border-gray-100 bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-display font-bold text-sm">AM</div>
              <span className="font-display font-semibold text-gray-900 text-sm tracking-tight">Arul<span className="text-violet-600">.</span>dev</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5">
              Full Stack Developer crafting Shopify ecosystems, SaaS tools, and AI-powered apps for D2C brands.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({Icon,href,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 bg-gray-50 border border-gray-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200">
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({label,href})=>(
                <li key={label}>
                  <button onClick={()=>scrollTo(href)} className="text-gray-400 hover:text-violet-600 text-sm transition-colors duration-200">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:arulrevupdc123@gmail.com" className="block text-gray-400 hover:text-violet-600 text-sm transition-colors">arulrevupdc123@gmail.com</a>
              <a href="tel:+918248965966" className="block text-gray-400 hover:text-violet-600 text-sm transition-colors">+91 82489 65966</a>
              <p className="text-gray-300 text-sm">Coimbatore, Tamil Nadu</p>
            </div>
            <a href="mailto:arulrevupdc123@gmail.com"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-violet-200">
              Hire Me
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Arul Mozhi Selvam R · Built with React.js &amp; Tailwind CSS
          </p>
          <motion.button onClick={scrollTop} whileHover={{scale:1.08}} whileTap={{scale:0.95}}
            className="w-8 h-8 bg-gray-50 border border-gray-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 text-gray-400 rounded-lg flex items-center justify-center transition-colors duration-200"
            aria-label="Back to top">
            <FiArrowUp size={13}/>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
