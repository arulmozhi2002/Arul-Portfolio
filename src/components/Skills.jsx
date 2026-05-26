import React from 'react'
import { motion } from 'framer-motion'
import { FiLayout, FiServer, FiDatabase, FiShoppingBag, FiTool } from 'react-icons/fi'
import { skills } from '../data'

const icons = { 'Frontend':FiLayout,'Backend':FiServer,'Database':FiDatabase,'E-Commerce':FiShoppingBag,'Tools & Cloud':FiTool }

const accent = {
  'Frontend':      { icon:'text-violet-600', dot:'bg-violet-500', tag:'bg-violet-50 border-violet-200 text-violet-700', hover:'hover:border-violet-200' },
  'Backend':       { icon:'text-sky-600',    dot:'bg-sky-500',    tag:'bg-sky-50 border-sky-200 text-sky-700',           hover:'hover:border-sky-200' },
  'Database':      { icon:'text-emerald-600',dot:'bg-emerald-500',tag:'bg-emerald-50 border-emerald-200 text-emerald-700',hover:'hover:border-emerald-200' },
  'E-Commerce':    { icon:'text-orange-600', dot:'bg-orange-500', tag:'bg-orange-50 border-orange-200 text-orange-700',  hover:'hover:border-orange-200' },
  'Tools & Cloud': { icon:'text-pink-600',   dot:'bg-pink-500',   tag:'bg-pink-50 border-pink-200 text-pink-700',        hover:'hover:border-pink-200' },
}

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.08}} }

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Technical Skills</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
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
                  <h3 className="font-display font-semibold text-gray-800 text-sm tracking-tight">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item=>(
                    <span key={item} className={`tag text-xs ${a.tag} cursor-default`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.div variants={fadeUp} className="card card-hover p-6 hover:border-gray-300 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse"/>
                <span className="font-display font-semibold text-gray-800 text-sm">Always Learning</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                From Lighthouse-optimised Shopify stores to real-time SaaS dashboards and AI automation — continuously
                exploring new patterns to ship better products.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">3+ years production experience</span>
              <span className="text-xs text-green-600 font-semibold">Active</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
