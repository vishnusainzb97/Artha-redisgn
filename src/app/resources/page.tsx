"use client"

import { motion } from "framer-motion"
import { Calendar, Video, FileText, FileSignature, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function Resources() {
    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }
    const item = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }

    const upcomingEvents = [
        { month: "Nov", day: "27", title: "Qlik AI Reality Tour 2025 – Bengaluru", meta: "Thursday, 27 Nov 4:00 PM" },
        { month: "Sep", day: "24", title: "Migrating from Informatica with B'etl", meta: "Wednesday, 24 Sep 2:00 PM" },
    ]

    const pastEvents = [
        { month: "Aug", day: "21", title: "Artha & Qlik at ET BFSI CXO Conclave", meta: "Thursday, 21 Aug 9:00 AM • Mumbai" },
    ]

    const papers = [
        { type: "IDC Spotlight", title: "Future-Ready Data Foundation", icon: FileText },
        { type: "Research Paper", title: "Data Governance in the AI Era", icon: FileText },
        { type: "Best Practice", title: "Master Data Management Playbook", icon: FileSignature },
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Insights & <span className="text-gradient">Resources</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        Explore events, industry insights, premium research, and customer success stories from Artha Solutions.
                    </motion.p>
                </div>

                {/* UPCOMING EVENTS SECTION */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600"><Calendar className="w-6 h-6" /></div>
                        <h2 className="text-3xl font-heading font-bold">Upcoming Events</h2>
                    </div>
                    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map((evt, i) => (
                            <motion.div variants={item} key={i} className="glass-card p-6 rounded-3xl flex flex-col gap-6 group hover:border-primary-500 transition-colors">
                                <div className="flex gap-4 items-start">
                                    <div className="flex flex-col items-center justify-center bg-surface border border-border rounded-2xl w-20 h-20 flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-white/80">{evt.month}</span>
                                        <span className="font-heading font-black text-2xl">{evt.day}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-heading text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{evt.title}</h3>
                                        <p className="text-sm text-foreground/50">{evt.meta}</p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-border">
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors text-sm uppercase tracking-wider">
                                        Register Now <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* PAST EVENTS SECTION */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500"><Calendar className="w-6 h-6" /></div>
                        <h2 className="text-3xl font-heading font-bold text-slate-700">Past Events</h2>
                    </div>
                    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pastEvents.map((evt, i) => (
                            <motion.div variants={item} key={i} className="bg-white border border-border p-6 rounded-3xl flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="flex gap-4 items-start">
                                    <div className="flex flex-col items-center justify-center bg-slate-50 border border-border rounded-2xl w-20 h-20 flex-shrink-0">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{evt.month}</span>
                                        <span className="font-heading font-black text-2xl text-slate-700">{evt.day}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-heading text-lg mb-2 text-slate-700 md:line-clamp-2">{evt.title}</h3>
                                        <p className="text-sm text-slate-500">{evt.meta}</p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-border flex justify-end">
                                    <button className="text-slate-500 font-bold text-sm uppercase tracking-wider hover:text-slate-700 flex items-center gap-2 transition-colors">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* WHITEPAPERS SECTION (Bento Grid) */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600"><FileText className="w-6 h-6" /></div>
                        <h2 className="text-3xl font-heading font-bold">Whitepapers</h2>
                    </div>
                    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                        {papers.map((paper, i) => (
                            <motion.div variants={item} key={i} className="bg-surface rounded-3xl p-8 border border-border relative overflow-hidden group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-colors" />
                                <span className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-4 block">{paper.type}</span>
                                <h3 className="text-2xl font-bold font-heading mb-8 pr-8">{paper.title}</h3>
                                <Link href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link">
                                    Download PDF <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

