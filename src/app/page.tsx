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
        <motion.div style={{ y: yBlob1 }} className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[120px] -translate-y-1/2 -z-10 mix-blend-multiply dark:mix-blend-screen" />
        <motion.div style={{ y: yBlob2 }} className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-primary-400/15 rounded-full blur-[150px] translate-y-1/4 -z-10 mix-blend-multiply dark:mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">

            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-600 font-semibold text-sm mb-8 shadow-glow backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Artha Advantage: The Evolution of Enterprise Data
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-6xl lg:text-8xl font-heading font-extrabold tracking-tighter mb-8 leading-[1.1] text-foreground">
              Turn Your Vision Into <br />
              <span className="text-gradient inline-block pb-2">Measurable Value</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl lg:text-2xl text-foreground/70 mb-12 max-w-3xl leading-relaxed tracking-tight">
              Accelerate your digital transformation with our premium data integration, quality, and governance solutions designed for modern enterprises.
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 glass-card backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl shadow-primary-900/10"
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
