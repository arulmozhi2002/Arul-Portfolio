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
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            The Developer <span className="text-gradient">Behind the Code</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Bio */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="space-y-5">
            <motion.p variants={fadeUp} className="text-gray-700 text-lg leading-relaxed">
              Hi, I'm <span className="text-gray-900 font-semibold">Arul Mozhi Selvam R</span> — a Full Stack Developer from{' '}
              <span className="text-violet-600 font-medium">Coimbatore, Tamil Nadu</span> with 3+ years shipping production apps.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
              At <span className="text-gray-800 font-medium">Cobay Technology</span> I architected a multi-channel OMS, built Shopify storefronts
              for 30+ D2C brands across fashion, FMCG, and lifestyle, and delivered an AI-powered WhatsApp automation tool actively used in production.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
              I care deeply about performance — consistently hitting Lighthouse scores above 90 — and frontend architecture that scales.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
              {['React.js','Vue.js','Node.js','Shopify','MongoDB','Tailwind CSS','Vercel'].map(t=>(
                <span key={t} className="tag bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100 cursor-default transition-colors">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <a href="/Resume_Arul (3).pdf" download="Arul_Mozhi_Selvam_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-violet-200">
                <FiDownload size={14}/> Download CV
              </a>
              <a href="mailto:arulrevupdc123@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md">
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
                <div className="text-gray-500 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="col-span-2 card card-hover p-5 flex items-center gap-4 hover:border-violet-200">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
                <FiMapPin size={15} className="text-violet-600"/>
              </div>
              <div>
                <div className="text-gray-800 font-semibold text-sm">Coimbatore, Tamil Nadu</div>
                <div className="text-gray-400 text-xs mt-0.5">Coimbatore, Tamil Nadu</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                <span className="text-xs text-gray-400">Available now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
