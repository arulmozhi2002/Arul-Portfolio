import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi'
import { education, certifications } from '../data'

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.1}} }

export default function Education() {
  return (
    <section id="education" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Education & Certifications</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white">
            Learning &amp; <span className="text-gradient">Growth</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="grid md:grid-cols-3 gap-5">
          <motion.div variants={fadeUp} className="card card-hover p-8 hover:border-violet-500/30 group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center mb-5">
              <FiBookOpen size={17} className="text-violet-400"/>
            </div>
            <span className="tag text-xs bg-white/[0.04] border-white/[0.08] text-white/35 mb-4 inline-flex">{education.duration}</span>
            <h3 className="font-display font-bold text-white text-base leading-snug mb-2 group-hover:text-violet-300 transition-colors">{education.degree}</h3>
            <p className="text-white/50 font-medium text-sm mb-0.5">{education.institution}</p>
            <p className="text-white/25 text-xs">{education.location}</p>
          </motion.div>

          <motion.div variants={stagger} className="md:col-span-2 flex flex-col gap-4">
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-1">
              <FiAward size={14} className="text-sky-400"/>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/25 font-semibold">Certifications</span>
            </motion.div>
            {certifications.map(cert=>(
              <motion.div key={cert.title} variants={fadeUp} className="card card-hover p-6 flex items-center gap-5 hover:border-white/[0.14] group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 text-xl">
                  {cert.icon==='react' ? '⚛️' : '🔍'}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-white/80 text-sm group-hover:text-violet-300 transition-colors">{cert.title}</h4>
                  <p className="text-white/25 text-xs mt-0.5">Issued by <span className="text-white/50 font-medium">{cert.issuer}</span></p>
                </div>
                <FiCheckCircle size={16} className="text-green-400 flex-shrink-0"/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
