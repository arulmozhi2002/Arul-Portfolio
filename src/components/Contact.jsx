import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.55,ease:'easeOut'}} }
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.09}} }

const info = [
  { Icon:FiMail,   label:'Email',    value:'arulrevupdc123@gmail.com', href:'mailto:arulrevupdc123@gmail.com' },
  { Icon:FiPhone,  label:'Phone',    value:'+91 82489 65966',           href:'tel:+918248965966' },
  { Icon:FiMapPin, label:'Location', value:'Coimbatore, Tamil Nadu',    href:null },
]

const socials = [
  { Icon:FiLinkedin, href:'https://www.linkedin.com/in/arul-r-a4b416249', label:'LinkedIn' },
  { Icon:FiGithub,   href:'https://github.com/arulmozhi2002',             label:'GitHub'   },
  { Icon:FiMail,     href:'mailto:arulrevupdc123@gmail.com',               label:'Email'    },
]

export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:''})
  const [sent,setSent] = useState(false)

  const onChange = e => setForm(p=>({...p,[e.target.name]:e.target.value}))

  const onSubmit = e => {
    e.preventDefault()
    const {name,email,subject,message} = form
    const body = `Hi Arul,\n\nMy name is ${name}.\n\n${message}\n\nReply to: ${email}`
    window.location.href = `mailto:arulrevupdc123@gmail.com?subject=${encodeURIComponent(subject||'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(()=>setSent(false),4000)
  }

  const inp = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200'

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-80px'}} className="text-center mb-16">
          <motion.span variants={fadeUp} className="section-label">Contact</motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Let's <span className="text-gradient">Work Together</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Open to full-time, freelance, and consulting roles. Drop me a message.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}} className="lg:col-span-2 flex flex-col gap-4">
            {info.map(({Icon,label,value,href})=>(
              <motion.div key={label} variants={fadeUp} className="card card-hover p-5 flex items-center gap-4 hover:border-violet-200">
                <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-violet-600"/>
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-[11px] font-semibold mb-0.5 uppercase tracking-wider">{label}</p>
                  {href
                    ? <a href={href} className="text-gray-700 text-sm font-medium hover:text-violet-600 transition-colors truncate block">{value}</a>
                    : <p className="text-gray-700 text-sm font-medium">{value}</p>
                  }
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="card card-hover p-5 hover:border-gray-200">
              <p className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-3">Find me online</p>
              <div className="flex gap-2.5">
                {socials.map(({Icon,href,label})=>(
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 bg-gray-50 border border-gray-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 text-gray-400 rounded-xl flex items-center justify-center transition-all duration-200">
                    <Icon size={15}/>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,margin:'-60px'}}
            onSubmit={onSubmit} className="lg:col-span-3 card card-hover p-8 hover:border-gray-200">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <motion.div variants={fadeUp}>
                <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Name</label>
                <input type="text" name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={inp}/>
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Email</label>
                <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@company.com" className={inp}/>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="mb-4">
              <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={onChange} placeholder="Project / Job Opportunity" className={inp}/>
            </motion.div>
            <motion.div variants={fadeUp} className="mb-7">
              <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Message</label>
              <textarea name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell me about your project or opportunity..." className={`${inp} resize-none`}/>
            </motion.div>
            <motion.button variants={fadeUp} type="submit"
              className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-violet-200 flex items-center justify-center gap-2 group">
              {sent ? 'Sent ✓' : (<>Send Message<FiSend size={14} className="group-hover:translate-x-px group-hover:-translate-y-px transition-transform"/></>)}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
