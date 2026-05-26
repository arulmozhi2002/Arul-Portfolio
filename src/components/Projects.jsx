import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowUpRight, FiZap } from 'react-icons/fi'
import { projects } from '../data'

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.1}} }

const typeBadge = {
  Live:      'bg-emerald-50 border-emerald-200 text-emerald-700',
  Portfolio: 'bg-sky-50 border-sky-200 text-sky-700',
}

export default function Projects() {
  const featured = projects.filter(p=>p.featured)
  const rest     = projects.filter(p=>!p.featured)

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Projects</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Things I've <span className="text-gradient">Built</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            From OMS platforms and Shopify storefronts to AI-powered tools — all live in production.
          </motion.p>
        </motion.div>

        {/* Featured */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="mb-5">
          {featured.map(p=>(
            <motion.div key={p.id} variants={fadeUp} className="card card-hover p-8 md:p-10 group hover:border-violet-200 hover:shadow-violet-50">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="font-display text-5xl font-bold text-gray-100 select-none leading-none">{p.id}</span>
                    <span className={`tag text-xs ${typeBadge[p.type]}`}>{p.type}</span>
                    <span className="tag text-xs bg-violet-50 border-violet-200 text-violet-700">Featured</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-violet-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-2xl mb-6 text-sm md:text-base">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t=>(
                      <span key={t} className="tag text-xs bg-gray-50 border-gray-200 text-gray-600 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700 cursor-default transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 self-start w-11 h-11 bg-gray-50 border border-gray-200 hover:border-violet-300 hover:bg-violet-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-violet-600 transition-all duration-200 shadow-sm"
                    aria-label={`Open ${p.title}`}>
                    <FiArrowUpRight size={18}/>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="grid md:grid-cols-2 gap-5">
          {rest.map(p=>(
            <motion.div key={p.id} variants={fadeUp}
              className={`card card-hover p-7 flex flex-col group relative overflow-hidden ${p.highlight ? 'hover:border-fuchsia-200' : 'hover:border-gray-200'}`}>

              {p.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 rounded-t-2xl"/>
              )}

              <div className="flex items-center justify-between mb-5">
                <span className="font-display text-4xl font-bold text-gray-100 select-none leading-none">{p.id}</span>
                <div className="flex items-center gap-2">
                  {p.highlight
                    ? <span className="inline-flex items-center gap-1.5 tag text-xs bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700"><FiZap size={10}/>AI · Live</span>
                    : <span className={`tag text-xs ${typeBadge[p.type]}`}>{p.type}</span>
                  }
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className={`p-1.5 transition-colors ${p.highlight ? 'text-fuchsia-400 hover:text-fuchsia-600' : 'text-gray-400 hover:text-gray-600'}`}>
                      <FiExternalLink size={14}/>
                    </a>
                  )}
                </div>
              </div>

              <h3 className={`font-display text-lg font-bold text-gray-900 mb-3 tracking-tight transition-colors ${p.highlight ? 'group-hover:text-fuchsia-700' : 'group-hover:text-violet-700'}`}>
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              {p.brands && (
                <div className="mb-4">
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-2">
                    {p.id === '05' ? 'Live Sites' : 'Live Brands'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.brands.map(b=>(
                      <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 tag text-xs bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 transition-colors">
                        {b.name}<FiExternalLink size={9}/>
                      </a>
                    ))}
                    {p.brandsMore && (
                      <span className="tag text-xs bg-gray-50 border-gray-200 text-gray-400 cursor-default">+{p.brandsMore} more</span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map(t=>(
                  <span key={t} className={`tag text-xs cursor-default ${p.highlight ? 'bg-fuchsia-50 border-fuchsia-100 text-fuchsia-600' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
