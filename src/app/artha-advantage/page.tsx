"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target, Repeat, Shuffle, Globe, Database, CheckCircle, BarChart3, Brain, Settings, Cloud } from "lucide-react"
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
                { title: "Data Integration", desc: "Seamlessly connect data sources across your enterprise for unified, real-time views.", icon: Database },
                { title: "Data Quality", desc: "Automated quality checks and data cleansing for trusted, decision-ready data.", icon: CheckCircle },
                { title: "Governance Controls", desc: "Implement GRC, privacy, and data lineage to maintain compliance.", icon: Shield }
            ]
        },
        {
            id: "data-insights",
            title: "AI-Driven Data Governance",
            label: "Data Insights Platform",
            desc: "Simplify and accelerate data governance with a comprehensive, AI-driven platform.",
            icon: Shield,
            items: [
                { title: "Regulatory Compliance", desc: "Automates compliance with GDPR, CCPA, HIPAA — improving data quality.", icon: Shield },
                { title: "MDM for Customer 360", desc: "Unifies customer data for a single view, boosting engagement.", icon: Target },
                { title: "AI-Driven Rule Management", desc: "Automates data validation rules, freeing teams for insights.", icon: Brain }
            ]
        },
        {
            id: "mdm-lite",
            title: "Cost-Effective MDM",
            label: "MDM Lite",
            desc: "An easy-to-use platform to manage critical master data without the complexity of full MDM solutions.",
            icon: Target,
            items: [
                { title: "Centralize Key Data", desc: "Consolidate customer, product, and vendor data into one truth.", icon: Database },
                { title: "Data Deduplication", desc: "Identify and merge duplicate records using advanced matching algorithms.", icon: Repeat },
                { title: "Rapid Deployment", desc: "Lightweight architecture means lower total cost of ownership.", icon: Settings }
            ]
        }
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Artha <span className="text-gradient">Advantage</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        One Platform, Unlimited Possibilities — combines data integration, quality, and governance in a single turnkey solution.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            id={section.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={stagger}
                        >
                            <div className="mb-10">
                                <motion.div variants={fadeUp} className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-bold text-xs uppercase tracking-widest mb-4">
                                    {section.label}
                                </motion.div>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-heading font-bold mb-4">{section.title}</motion.h2>
                                <motion.p variants={fadeUp} className="text-lg text-foreground/70 max-w-2xl">{section.desc}</motion.p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <motion.div variants={fadeUp} key={i} className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary-600/5 group">
                                        <item.icon className="w-10 h-10 text-primary-600 mb-6 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                                        <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center glass-card p-12 md:p-16 rounded-[3rem] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-600/10 pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">Ready to Get Started?</h2>
                    <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto relative z-10">Let us show you how the Artha Advantage platform can transform your data operations.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 hover:-translate-y-1 transition-all shadow-xl shadow-primary-600/20 relative z-10">
                        Contact Us Today
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}