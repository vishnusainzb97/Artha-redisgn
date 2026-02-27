"use client"

import { motion } from "framer-motion"
import { Factory, Landmark, Stethoscope, ShoppingCart, Lightbulb, Hotel, PhoneCall } from "lucide-react"

export default function Industries() {
    const industries = [
        { title: "Manufacturing", icon: Factory, desc: "Predictive maintenance, supply chain optimization, and automated quality control leveraging real-time data." },
        { title: "BFSI", icon: Landmark, desc: "Robust data governance, automated regulatory compliance (SOX, AML), and real-time fraud detection." },
        { title: "Healthcare", icon: Stethoscope, desc: "Unified patient data integration, HIPAA compliance, and predictive clinical analytics for better outcomes." },
        { title: "Retail", icon: ShoppingCart, desc: "Customer 360 views, inventory optimization, and dynamic pricing strategies for the modern commerce era." },
        { title: "Utilities", icon: Lightbulb, desc: "Smart grid analytics and proactive outage management bridging physical infrastructure with digital insights." },
        { title: "Hospitality", icon: Hotel, desc: "Hyper-personalized guest experiences and data-driven dynamic revenue management systems." },
        { title: "Telecom", icon: PhoneCall, desc: "Real-time network capacity planning and predictive subscriber churn modeling." },
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Industries <span className="text-gradient">We Serve</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        Deep domain expertise across verticals to deliver industry-specific data and digital transformation solutions.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-card p-8 rounded-3xl group hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 ${i === 0 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''}`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                <ind.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">{ind.title}</h3>
                            <p className={`leading-relaxed ${i === 0 ? 'text-lg' : ''} text-foreground/70 group-hover:text-white/90 transition-colors`}>{ind.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}
