import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi'
import { stats } from '../data'

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.1}} }

export default function About() {
  return (
    <section id="about" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">About Me</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white">
            The Developer <span className="text-gradient">Behind the Code</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Bio */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="space-y-5">
            <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Arul R</span> — a Full Stack Developer from{' '}
              <span className="text-violet-400 font-medium">Coimbatore, Tamil Nadu</span> with 3+ years shipping production apps.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/45 leading-relaxed">
              At <span className="text-white/70 font-medium">Cobay Technology</span> I architected a multi-channel OMS, built Shopify storefronts
              for 30+ D2C brands across fashion, FMCG, and lifestyle, and delivered an AI-powered WhatsApp automation tool actively used in production.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/45 leading-relaxed">
              I care deeply about performance — consistently hitting Lighthouse scores above 90 — and frontend architecture that scales.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
              {['React.js','Vue.js','Node.js','Shopify','MongoDB','Tailwind CSS','Vercel'].map(t=>(
                <span key={t} className="tag bg-violet-500/10 border-violet-500/25 text-violet-300 hover:bg-violet-500/20 cursor-default transition-colors">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a href="https://drive.google.com/file/d/1BZSX76dpUP_VPBVHLagDC1dD_H75Wuhk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-900/40">
                <FiDownload size={14}/> Download CV
              </a>
              <a href="mailto:arulrevupdc123@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border border-white/[0.1] hover:border-white/[0.2] text-white/80 text-sm font-semibold rounded-xl transition-all shadow-sm">
                <FiMail size={14}/> Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="grid grid-cols-2 gap-4">
            {stats.map(({value,label})=>(
              <motion.div key={label} variants={fadeUp}
                className="card card-hover p-7 text-center group cursor-default">
                <div className="font-display text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">{value}</div>
                <div className="text-white/40 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="col-span-2 card card-hover p-5 flex items-center gap-4 hover:border-violet-500/25">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center flex-shrink-0">
                <FiMapPin size={15} className="text-violet-400"/>
              </div>
              <div>
                <div className="text-white/80 font-semibold text-sm">Coimbatore, Tamil Nadu</div>
                <div className="text-white/30 text-xs mt-0.5">Tamil Nadu, India</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                <span className="text-xs text-white/35">Available now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
