"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target, Repeat, Shuffle, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArthaAdvantage() {
    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const sections = [
        {
            id: "accelerators",
            title: "Streamline Data Management",
            label: "Accelerators",
            desc: "Save time and costs with proprietary accelerators for data quality, integration, and governance.",
            icon: Zap,
            items: [
                { title: "Data Integration", desc: "Seamlessly connect data sources across your enterprise for unified, real-time views." },
                { title: "Data Quality", desc: "Automated quality checks and data cleansing for trusted, decision-ready data." },
                { title: "Governance Controls", desc: "Implement GRC, privacy, and data lineage to maintain compliance." }
            ]
        },
        {
            id: "data-insights",
            title: "AI-Driven Data Governance",
            label: "Data Insights Platform",
            desc: "Simplify and accelerate data governance with a comprehensive, AI-driven platform.",
            icon: Shield,
            items: [
                { title: "Regulatory Compliance", desc: "Automates compliance with GDPR, CCPA, HIPAA — improving data quality." },
                { title: "MDM for Customer 360", desc: "Unifies customer data for a single view, boosting engagement." },
                { title: "AI-Driven Rule Management", desc: "Automates data validation rules, freeing teams for insights." }
            ]
        },
        {
            id: "mdm-lite",
            title: "Cost-Effective MDM",
            label: "MDM Lite",
            desc: "An easy-to-use platform to manage critical master data without the complexity of full MDM solutions.",
            icon: Target,
            items: [
                { title: "Centralize Key Data", desc: "Consolidate customer, product, and vendor data into one truth." },
                { title: "Data Deduplication", desc: "Identify and merge duplicate records using advanced matching algorithms." },
                { title: "Rapid Deployment", desc: "Lightweight architecture means lower total cost of ownership." }
            ]
        }
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Artha <span className="text-gradient">Advantage</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        One Platform, Unlimited Possibilities — combines data integration, quality, and governance in a single turnkey solution.
                    </motion.p>
                </div>

                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            id={section.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={stagger}
                            className={`flex flex-col gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
                        >
                            <div className="w-full lg:w-1/3">
                                <motion.div variants={fadeUp} className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-bold text-xs uppercase tracking-widest mb-6">
                                    {section.label}
                                </motion.div>
                                <motion.h2 variants={fadeUp} className="text-4xl font-heading font-bold mb-6">{section.title}</motion.h2>
                                <motion.p variants={fadeUp} className="text-lg text-foreground/70 mb-8">{section.desc}</motion.p>
                            </div>

                            <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-6">
                                {section.items.map((item, i) => (
                                    <motion.div variants={fadeUp} key={i} className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary-600/5">
                                        <section.icon className="w-10 h-10 text-primary-600 mb-6" />
                                        <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                                        <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

            </div>
        </div>
    )
}
