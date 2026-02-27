"use client"

import { motion } from "framer-motion"
import { Users, Globe2, Award, Briefcase } from "lucide-react"

export default function About() {
    const stats = [
        { n: "300+", l: "Projects Delivered" },
        { n: "330+", l: "Expert Engineers" },
        { n: "26", l: "Countries Served" },
        { n: "93%", l: "Customer Retention" },
        { n: "5", l: "Global Offices" }
    ]

    const values = [
        { title: "Quality First", desc: "Excellence woven into every line of code and consulting engagement." },
        { title: "Unwavering Integrity", desc: "Honest, transparent communication driving sustainable partnerships." },
        { title: "Deep Trust", desc: "Trusted by Platinum partners across AWS, Azure, Snowflake, and Qlik." }
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl text-primary-600 mb-6">
                        <Users className="w-8 h-8" />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-heading font-black mb-6">
                        Empowering <span className="text-gradient">Innovations</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                        A premier business and technology consulting firm. We exist to turn data into a strategic asset across the globe.
                    </motion.p>
                </div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 lg:p-8 bg-surface rounded-[2rem] border border-border shadow-2xl shadow-primary-600/5 mb-32"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className={`p-6 text-center ${i !== 4 ? 'md:border-r border-border' : ''}`}>
                            <h3 className="text-4xl lg:text-5xl font-heading font-black text-primary-600 mb-2">{stat.n}</h3>
                            <p className="text-sm uppercase tracking-widest font-bold text-foreground/50">{stat.l}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Vision & Mission Split */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
                        <p className="text-xl text-foreground/70 leading-relaxed border-l-4 border-primary-500 pl-6">
                            To be the most trusted global partner in enterprise data management, empowering organizations to unlock the full potential of their data for transformative business outcomes.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
                        <p className="text-xl text-foreground/70 leading-relaxed border-l-4 border-primary-500 pl-6">
                            Strategy — Implementation — Support. Turning Vision into Value by providing end-to-end data solutions that drive business intelligence and operational efficiency.
                        </p>
                    </motion.div>
                </div>

                {/* Values */}
                <div className="bg-primary-900 rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[120px] pointer-events-none opacity-50" />
                    <h2 className="text-4xl font-heading font-bold mb-16 relative z-10">What Sets Us Apart</h2>
                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                    <Award className="w-6 h-6 text-primary-300" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-white">{v.title}</h3>
                                <p className="text-white/70 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
