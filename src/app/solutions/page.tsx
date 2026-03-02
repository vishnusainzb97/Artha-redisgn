"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"
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

    const tabs = [
        "Data Solutions",
        "Artificial Intelligence",
        "Enterprise Applications",
        "Cloud",
        "Managed Services"
    ]

    const tabContent: Record<string, { desc?: string, list?: string[] }> = {
        "Data Solutions": {
            desc: "Empowering confident data-driven decisions",
            list: [
                "Data Strategy",
                "Master Data Management",
                "Enterprise Data Management",
                "Data Governance",
                "Big Data",
                "Data Quality"
            ]
        },
        "Artificial Intelligence": {
            list: [
                "AI Data Readiness",
                "AI for Intelligent Decisions & Insights",
                "AI for Workflow Automation & Process Optimization",
                "AI for Human Engagement & Experience",
                "AI for Platform & Engineering Services"
            ]
        },
        "Enterprise Applications": {
            desc: "Streamline business processes for maximum efficiency",
            list: [
                "SAP",
                "Service Now",
                "Oracle"
            ]
        },
        "Cloud": {
            desc: "One-stop shop for all your cloud consulting needs"
        },
        "Managed Services": {
            desc: "Strategic approach that ensures optimal results"
        }
    }

    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px] px-1/2 -z-10 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-emerald-400/10 rounded-full blur-[120px] px-1/2 -z-10 mix-blend-multiply pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Comprehensive <span className="text-gradient">Solutions</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        Data, Analytics, and AI solutions to analyze, automate, and accelerate your entire business transformation journey.
                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* PILL NAVIGATION - GLASSMORPHISM */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-md border shadow-sm flex items-center gap-2 ${activeTab === tab
                                    ? "bg-primary-600 text-white border-primary-500 shadow-primary-600/20 scale-105"
                                    : "bg-white/50 text-slate-600 border-white/60 hover:bg-white/80 hover:scale-[1.02]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT AREA - GLASSMORPHISM */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 md:p-12 rounded-[2.5rem] w-full"
                            >
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4">{activeTab}</h2>
                                    {tabContent[activeTab].desc && (
                                        <p className="text-xl text-slate-700 font-medium mb-10 pb-6 border-b border-border/50">{tabContent[activeTab].desc}</p>
                                    )}

                                    {tabContent[activeTab].list && (
                                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
                                            {tabContent[activeTab].list.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors border border-transparent hover:border-white/60">
                                                    <div className="mt-1 bg-primary-50 text-primary-600 rounded-full p-1 border border-primary-100/50 shadow-sm flex-shrink-0">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-800">{item}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 hover:-translate-y-1 transition-all shadow-xl shadow-primary-600/20">
                            Discuss Your Project <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

