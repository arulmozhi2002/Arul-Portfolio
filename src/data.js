export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '30+', label: 'D2C Brands' },
  { value: '5+', label: 'Major Projects' },
  { value: '90+', label: 'Lighthouse Score' },
]

export const skills = [
  {
    category: 'Frontend',
    color: 'violet',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/10',
    tagBorder: 'border-violet-500/30',
    tagText: 'text-violet-300',
    tagBg: 'bg-violet-500/10',
    items: ['React.js', 'Vue.js', 'Vuex', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'cyan',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    tagBorder: 'border-cyan-500/30',
    tagText: 'text-cyan-300',
    tagBg: 'bg-cyan-500/10',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication Systems'],
  },
  {
    category: 'Database',
    color: 'emerald',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/10',
    tagBorder: 'border-emerald-500/30',
    tagText: 'text-emerald-300',
    tagBg: 'bg-emerald-500/10',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'E-Commerce',
    color: 'orange',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/10',
    tagBorder: 'border-orange-500/30',
    tagText: 'text-orange-300',
    tagBg: 'bg-orange-500/10',
    items: ['Shopify', 'Liquid', 'WooCommerce'],
  },
  {
    category: 'Tools & Cloud',
    color: 'pink',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    tagBorder: 'border-pink-500/30',
    tagText: 'text-pink-300',
    tagBg: 'bg-pink-500/10',
    items: ['Git', 'GitHub', 'AWS', 'Vercel', 'Render', 'Postman', 'Figma', 'SEO'],
  },
]

export const experiences = [
  {
    role: 'Software Engineer — Full Stack',
    company: 'Cobay Technology Pvt Ltd',
    location: 'Coimbatore',
    duration: 'Dec 2022 – Apr 2026',
    type: 'Full-time',
    bullets: [
      'Built a multi-channel Order Management System (OMS) integrating Shopify, WooCommerce, and custom storefronts into a centralized dashboard.',
      'Developed real-time analytics dashboards and inventory systems using Vue.js, React.js, Node.js, and MongoDB.',
      'Implemented Role-Based Access Control (RBAC) systems for warehouse, admin, and operational teams.',
      'Integrated payment gateways, CRM systems, and shipping APIs using scalable backend services.',
      'Worked on Shopify development for 10+ D2C brands across fashion, FMCG, lifestyle, and home décor industries.',
      'Optimized Shopify stores to achieve Lighthouse performance scores above 90.',
      'Mentored junior developers and improved reusable frontend architecture standards.',
    ],
  },
]

export const projects = [
  {
    id: '01',
    title: 'Multi-Channel OMS',
    description:
      'Centralized Order Management System integrating Shopify, WooCommerce, and custom storefronts. Includes real-time analytics, fulfillment tracking, and RBAC for warehouse teams.',
    tech: ['Vue.js', 'React.js', 'Node.js', 'MongoDB'],
    link: 'http://one.cobay.com/',
    type: 'Live',
    featured: true,
  },
  {
    id: '02',
    title: 'Shopify D2C Brand Stores',
    description:
      'Custom Shopify storefronts and Liquid themes for 10+ D2C brands across fashion, FMCG, and lifestyle. Mobile-first with 90+ Lighthouse scores.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'SEO'],
    link: null,
    brands: [
      { name: 'Vilvah', url: 'https://vilvah.store' },
      { name: 'Dudeme', url: 'https://dudeme.in' },
      { name: 'Siebentech', url: 'https://siebentech.com' },
      { name: 'Botanic Boost', url: 'https://botanicboost.in' },
      { name: 'Mayon Auto', url: 'https://www.mayonauto.com' },
      { name: 'Gharana India', url: 'https://gharanaindia.com' },
      { name: 'Oorla', url: 'https://oorla.com' },
      { name: 'Studio Thari', url: 'https://studiothari.com' },
    ],
    brandsMore: 22,
    type: 'Portfolio',
    featured: false,
  },
  {
    id: '03',
    title: 'Founder Dashboard',
    description:
      'Full-stack SaaS dashboard for founders to track operational KPIs and metrics. Real-time data visualization with React.js frontend and Node.js APIs.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://frontend-client-server.vercel.app/',
    type: 'Live',
    featured: false,
  },
  {
    id: '04',
    title: 'InstallPulse — WhatsApp AI',
    description:
      'Real-time WhatsApp automation AI application built for an installation company. Handles automated customer communication, job dispatching, and field team coordination via intelligent chatbot workflows. Actively used in production by a live company.',
    tech: ['React.js', 'Node.js', 'WhatsApp API', 'AI Automation'],
    link: 'https://installpulse-frontend.vercel.app/',
    type: 'Live',
    featured: false,
    highlight: true,
  },
  {
    id: '05',
    title: 'Portfolio & Business Websites',
    description:
      'Performance-optimised business and portfolio websites for multiple brands — SEO-focused architecture achieving Page 1 keyword rankings across all properties.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
    link: null,
    brands: [
      { name: 'Tenanchoice', url: 'https://tenanchoice.com' },
      { name: 'Lehanza', url: 'https://lehanza.com' },
      { name: 'Moon Chocolates', url: 'https://moonchocolates.com' },
    ],
    type: 'Portfolio',
    featured: false,
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  institution: 'Sri Jayendra Saraswathi Maha Vidyalaya College',
  location: 'Coimbatore',
  duration: '2019 – 2022',
}

export const socialLinks = {
  github: 'https://github.com/arulmozhi2002',
  linkedin: 'https://www.linkedin.com/in/arul-r-a4b416249',
  email: 'mailto:arulrevupdc123@gmail.com',
  phone: 'tel:+918248965966',
}

export const certifications = [
  {
    title: 'Full Stack Web Development (React)',
    issuer: 'Nschool Academy',
    icon: 'react',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    issuer: 'Coursera',
    icon: 'seo',
  },
]
