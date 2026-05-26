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
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Where I've <span className="text-gradient">Made Impact</span>
          </motion.h2>
        </motion.div>

        {experiences.map((exp,i)=>(
          <motion.div key={i} variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}}>
            <motion.div variants={fadeUp} className="card card-hover p-8 md:p-10 hover:border-violet-200">

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-violet-600 rounded-full"/>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">Full-time</span>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-1 tracking-tight">{exp.role}</h3>
                  <p className="text-violet-600 font-semibold text-base">{exp.company}</p>
                </div>
                <div className="flex flex-row md:flex-col items-start gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                    <FiCalendar size={11}/> {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
                    <FiMapPin size={11}/> {exp.location}
                  </span>
                </div>
              </div>

              <motion.ul variants={stagger} className="space-y-3.5">
                {exp.bullets.map((b,j)=>(
                  <motion.li key={j} variants={fadeUp} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-violet-300 flex-shrink-0"/>
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                {['Vue.js','React.js','Node.js','MongoDB','Shopify','Liquid','AWS'].map(t=>(
                  <span key={t} className="tag text-xs bg-gray-50 border-gray-200 text-gray-500 cursor-default">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
