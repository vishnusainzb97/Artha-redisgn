"use client"

import { motion } from "framer-motion"
import { Database, Network, Cloud, Lock, BarChart3, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Solutions() {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }
    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }

    const solutions = [
        { title: "Data Strategy & Engineering", icon: Database, desc: "Align data initiatives with business goals for scalable architectures and strategic growth." },
        { title: "AI Readiness", icon: Bot, desc: "Turn AI from pilot to production with clean, consistent, well-governed data." },
        { title: "SAP Acceleration", icon: Network, desc: "Complete data cleansing and preparation for a smooth S/4HANA migration." },
        { title: "Cloud Services", icon: Cloud, desc: "Drive adoption with AWS, Azure, and Snowflake certified partnerships." },
        { title: "Data Governance", icon: Lock, desc: "Ensure compliance (GDPR, HIPAA), privacy, and secure data across operations." },
        { title: "Advanced Analytics", icon: BarChart3, desc: "Leverage machine learning for predictive insights and smarter decisions." },
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Comprehensive <span className="text-gradient">Solutions</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        Data, Analytics, and AI solutions to analyze, automate, and accelerate your entire business transformation journey.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {solutions.map((sol, i) => (
                        <motion.div variants={item} key={i} className="group bg-surface p-10 rounded-[2.5rem] border border-border hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary-600/10 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-8 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                                <sol.icon className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary-600 transition-colors">{sol.title}</h3>
                            <p className="text-foreground/70 leading-relaxed mb-8">{sol.desc}</p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link">
                                Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    )
}
