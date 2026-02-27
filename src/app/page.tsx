"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Shield, Zap, Target } from "lucide-react"
import ClientMarquee from "@/components/ClientMarquee"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

export default function Home() {
  const containerRef = useRef(null)

  // Apple-style Parallax setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Transform values for parallax effect
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 600])
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>

      {/* HERO SECTION with Parallax */}
      <motion.section
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[95vh] will-change-transform"
      >
        {/* Abstract animated background blobs with aggressive parallax */}
        <motion.div style={{ y: yBlob1 }} className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[120px] -translate-y-1/2 -z-10 mix-blend-multiply" />
        <motion.div style={{ y: yBlob2 }} className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-primary-400/15 rounded-full blur-[150px] translate-y-1/4 -z-10 mix-blend-multiply" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">

            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tighter mb-8 leading-[1.1] text-foreground">
              Data Solutions That Drive <br />
              <span className="text-gradient inline-block pb-2">Real Business Impact</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg lg:text-xl text-foreground/60 mb-12 max-w-2xl leading-relaxed">
              We help enterprises integrate, govern, and transform their data — so you can make better decisions, faster.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <Link href="/contact" className="h-14 px-8 rounded-full bg-primary-600 text-white font-semibold flex items-center gap-2 hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary-600/30 text-lg">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="h-14 px-8 rounded-full glass border border-border text-foreground font-semibold flex items-center hover:bg-surface hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg">
                Explore Solutions
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <section className="relative -mt-16 z-20 container mx-auto px-6 perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 glass-card backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl shadow-primary-900/10"
        >
          {[{ n: "80%", l: "Data Reliability" }, { n: "90%", l: "Migration Automation" }, { n: "40%", l: "Time Saved on MDM" }, { n: "12+", l: "Years of Trust" }].map((stat, i) => (
            <div key={i} className={`p-4 text-center ${i !== 3 ? 'lg:border-r border-border/50' : ''}`}>
              <h3 className="text-5xl font-heading font-black text-primary-600 mb-2 tracking-tight">{stat.n}</h3>
              <p className="text-sm font-bold tracking-widest uppercase text-foreground/50">{stat.l}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="mt-24">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-foreground/50">Trusted by Global Industry Leaders</p>
        </div>
        <ClientMarquee />
      </section>

      {/* PARTNER CERTIFICATIONS */}
      <section className="py-32 bg-surface/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Certified Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Recognized by Industry Leaders</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg hover-glow">Our deep technical expertise is officially recognized and awarded by the world's leading data, cloud, and AI platforms.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
            {/* Qlik Awards */}
            {[
              {
                brand: "Qlik",
                title: "Partner Customer Success Champion Award",
                subtitle: "North America 2024",
                color: "from-emerald-500 to-teal-700"
              },
              {
                brand: "Qlik",
                title: "Elite",
                subtitle: "Channel Partner",
                color: "from-emerald-600 to-emerald-900"
              },
              {
                brand: "Qlik",
                title: "2025 Expert",
                subtitle: "Financial Services",
                color: "from-blue-600 to-slate-800"
              },
              {
                brand: "Qlik",
                title: "2025 Expert",
                subtitle: "Healthcare",
                color: "from-teal-500 to-slate-800"
              },
              {
                brand: "Qlik",
                title: "Partner Advisory Council",
                subtitle: "Member",
                color: "from-green-500 to-emerald-800"
              }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden flex flex-col items-center justify-center p-6 text-center rounded-[2rem] border border-border/50 shadow-xl shadow-black/5 bg-gradient-to-br ${badge.color} group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                <div className="bg-white px-4 py-1.5 rounded-full mb-4 shadow-sm">
                  <span className="font-bold text-slate-800 tracking-tight">{badge.brand} <span className="font-light">Partner</span></span>
                </div>
                <h4 className="text-white font-bold text-sm leading-tight mb-1">{badge.title}</h4>
                <p className="text-white/80 text-xs font-medium">{badge.subtitle}</p>
              </motion.div>
            ))}

            {/* Talend Awards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="relative overflow-hidden flex flex-col items-center justify-center p-6 text-center rounded-[2rem] border border-border/50 shadow-xl shadow-black/5 bg-gradient-to-br from-rose-500 to-purple-900 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
                <span className="font-bold text-white tracking-tight">talend</span>
              </div>
              <p className="text-white/80 text-xs mb-1">Talend Cloud</p>
              <h4 className="text-white font-bold text-lg mb-1 leading-none">Expert</h4>
              <p className="text-white/80 text-xs tracking-widest uppercase">partner</p>
              <div className="flex gap-1 mt-2">{[1, 2, 3].map(s => <span key={s} className="text-yellow-400 text-xs">★</span>)}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
              className="relative overflow-hidden flex flex-col items-center justify-center p-6 text-center rounded-[2rem] border border-border/50 shadow-xl shadow-black/5 bg-gradient-to-br from-rose-500 to-purple-900 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
                <span className="font-bold text-white tracking-tight">talend</span>
              </div>
              <p className="text-white/80 text-xs mb-1">Data Governance</p>
              <h4 className="text-white font-bold text-lg mb-1 leading-none">Expert</h4>
              <p className="text-white/80 text-xs tracking-widest uppercase">partner</p>
              <div className="flex gap-1 mt-2">{[1, 2, 3].map(s => <span key={s} className="text-yellow-400 text-xs">★</span>)}</div>
            </motion.div>

            {/* Microsoft & AWS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] overflow-hidden flex items-center justify-center p-6 bg-white rounded-[2rem] border border-border shadow-xl shadow-black/5 group hover:-translate-y-2 transition-transform duration-300 gap-4"
            >
              <div className="w-8 h-8 grid grid-cols-2 gap-0.5 flex-shrink-0">
                <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
              </div>
              <div className="text-left">
                <h4 className="text-slate-800 font-bold text-sm leading-tight">Microsoft Solutions Partner</h4>
                <p className="text-slate-500 text-xs">Data & AI Azure</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] overflow-hidden flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-border shadow-xl shadow-black/5 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-left w-full flex items-center gap-4 justify-center">
                <span className="font-bold text-slate-800 text-xl tracking-tighter">aws <span className="text-[#ff9900]">partner</span></span>
                <div className="h-8 w-px bg-border"></div>
                <div>
                  <h4 className="text-slate-800 font-bold text-sm leading-tight uppercase">Amazon EMR</h4>
                  <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">Delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary-400/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Client Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Hear from our partners</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                text: "We are very happy that we worked with Artha Solutions on our Upgrade project. Right from the 1st initial communication till delivery of the project, the communication was right on point, and we had a very good experience with Artha Solutions. I would recommend them for upcoming or any projects.",
                author: "Vivek Makan",
                role: "Director, Data & Analytics",
                company: "MHA",
                companyStyle: "text-blue-600 font-black tracking-tighter text-2xl italic"
              },
              {
                text: "My team and I have been working with Artha for nearly four years, and our experience has been nothing short of exceptional. Artha came highly recommended by one of my top engineers, and since then, they have continually demonstrated their value as a trusted and strategic partner. Their unwavering commitment,...",
                author: "Director",
                role: "Commonwealth Care Alliance",
                company: "CCA",
                companyStyle: "text-red-700 font-black tracking-tighter text-2xl"
              },
              {
                text: "Artha Solutions has transformed our organization by revolutionizing data management with innovative solutions, exceptional expertise, and a steadfast commitment to excellence, delivering unmatched accuracy, efficiency, and value across all areas.",
                author: "Gopichand Padikala",
                role: "Head of Digital & Analytics",
                company: "HIL",
                companyStyle: "text-slate-800 font-black tracking-widest text-xl"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Visual quote mark */}
                <div className="absolute top-8 right-8 text-primary-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                </div>

                <div className="flex-grow mb-8 relative z-10 pt-4">
                  <p className="text-gray-600 text-lg leading-relaxed italic relative">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0 ml-4 shadow-sm`}>
                    <span className={testimonial.companyStyle}>{testimonial.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Core Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expertise that powers growth</h3>
            <p className="text-foreground/70 text-lg">We combine deep domain knowledge with cutting-edge technology to solve your most complex data challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Data Governance", icon: Shield, desc: "Implement comprehensive controls, ensure compliance, and maintain a pristine single source of truth across operations." },
              { title: "Artificial Intelligence", icon: Zap, desc: "Turn AI from pilot to production with clean, connected, and governed data foundations." },
              { title: "SAP Acceleration", icon: Target, desc: "Accelerate your transition to SAP S/4HANA with automated data cleansing and migration tools." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-surface p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW CTA with Scroll-Linked Scale */}
      <section className="py-32 relative overflow-hidden bg-primary-900 perspective-1000">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-40 bg-[url('/images/hero-banner.png')] bg-cover bg-center mix-blend-overlay"
        />

        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-500/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card bg-white/5 border-white/10 p-12 md:p-24 rounded-[3rem] shadow-2xl backdrop-blur-2xl max-w-5xl w-full"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tight">Ready for the Next Generation of Data?</h2>
            <p className="text-xl lg:text-3xl text-white/80 max-w-3xl mx-auto mb-12 font-light tracking-tight">Join the enterprises that are leveraging Artha Solutions to redefine their digital future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="h-16 px-10 rounded-full bg-white text-primary-900 font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-black/20">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
