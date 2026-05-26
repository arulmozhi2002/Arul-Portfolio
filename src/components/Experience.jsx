import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { experiences } from '../data'

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.08}} }

export default function Experience() {
  return (
    <section id="experience" className="py-28 section-alt">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Work Experience</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white">
            Where I've <span className="text-gradient">Made Impact</span>
          </motion.h2>
        </motion.div>

        {experiences.map((exp,i)=>(
          <motion.div key={i} variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}}>
            <motion.div variants={fadeUp} className="card card-hover p-8 md:p-10 hover:border-violet-500/30">

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"/>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">Full-time</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-1 tracking-tight">{exp.role}</h3>
                  <p className="text-violet-400 font-semibold text-base">{exp.company}</p>
                </div>
                <div className="flex flex-row md:flex-col items-start gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/40 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg">
                    <FiCalendar size={11}/> {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/40 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg">
                    <FiMapPin size={11}/> {exp.location}
                  </span>
                </div>
              </div>

              <motion.ul variants={stagger} className="space-y-3.5">
                {exp.bullets.map((b,j)=>(
                  <motion.li key={j} variants={fadeUp} className="flex items-start gap-3 text-white/45 text-sm leading-relaxed">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-violet-500/60 flex-shrink-0"/>
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {['Vue.js','React.js','Node.js','MongoDB','Shopify','Liquid','AWS'].map(t=>(
                  <span key={t} className="tag text-xs bg-white/[0.04] border-white/[0.08] text-white/40 cursor-default">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
