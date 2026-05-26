import React from 'react'
import { motion } from 'framer-motion'
import { FiLayout, FiServer, FiDatabase, FiShoppingBag, FiTool } from 'react-icons/fi'
import { skills } from '../data'

const icons = { 'Frontend':FiLayout,'Backend':FiServer,'Database':FiDatabase,'E-Commerce':FiShoppingBag,'Tools & Cloud':FiTool }

const accent = {
  'Frontend':      { icon:'text-violet-400', dot:'bg-violet-500', tag:'bg-violet-500/10 border-violet-500/25 text-violet-300', hover:'hover:border-violet-500/30' },
  'Backend':       { icon:'text-sky-400',    dot:'bg-sky-500',    tag:'bg-sky-500/10 border-sky-500/25 text-sky-300',           hover:'hover:border-sky-500/30' },
  'Database':      { icon:'text-emerald-400',dot:'bg-emerald-500',tag:'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',hover:'hover:border-emerald-500/30' },
  'E-Commerce':    { icon:'text-orange-400', dot:'bg-orange-500', tag:'bg-orange-500/10 border-orange-500/25 text-orange-300',  hover:'hover:border-orange-500/30' },
  'Tools & Cloud': { icon:'text-pink-400',   dot:'bg-pink-500',   tag:'bg-pink-500/10 border-pink-500/25 text-pink-300',        hover:'hover:border-pink-500/30' },
}

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.08}} }

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Technical Skills</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-white">
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            Technologies I use daily to build scalable, performant, production-grade products.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(skill => {
            const Icon = icons[skill.category] || FiTool
            const a = accent[skill.category]
            return (
              <motion.div key={skill.category} variants={fadeUp}
                className={`card card-hover p-6 group ${a.hover} transition-all duration-200`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-2 rounded-full ${a.dot} flex-shrink-0`} />
                  <Icon size={15} className={a.icon} />
                  <h3 className="font-display font-semibold text-white/80 text-sm tracking-tight">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item=>(
                    <span key={item} className={`tag text-xs ${a.tag} cursor-default`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.div variants={fadeUp} className="card card-hover p-6 hover:border-white/[0.14] md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse"/>
                <span className="font-display font-semibold text-white/80 text-sm">Always Learning</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                From Lighthouse-optimised Shopify stores to real-time SaaS dashboards and AI automation — continuously
                exploring new patterns to ship better products.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-white/25">3+ years production experience</span>
              <span className="text-xs text-green-400 font-semibold">Active</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
