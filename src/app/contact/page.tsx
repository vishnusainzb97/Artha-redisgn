"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react"

export default function Contact() {
    const offices = [
        {
            city: "Scottsdale, USA (HQ)",
            address: "10565 N 114th St, Suite# 116, Scottsdale, AZ 85259",
            phone: "+1 480-933-8904",
            mapUrl: "https://maps.google.com/?q=10565+N+114th+St+Suite+116+Scottsdale+AZ+85259"
        },
        {
            city: "Chicago, USA",
            address: "1770 Park Street, Suite 101, Naperville, IL 60563",
            phone: "+1 888-840-0098",
            mapUrl: "https://maps.google.com/?q=1770+Park+Street+Suite+101+Naperville+IL+60563"
        },
        {
            city: "Hyderabad, India",
            address: "Plot No: 1-90/2/11/32-35, Survey No 86, Vittal Rao Nagar, Madhapur, Hyderabad 500081",
            phone: "+91 40-4027-2722",
            mapUrl: "https://maps.google.com/?q=Vittal+Rao+Nagar+Madhapur+Hyderabad+500081"
        },
        {
            city: "Jakarta, Indonesia",
            address: "18 Office, Jl. TB Simatupang, Jakarta 12430",
            phone: "+62 21-3971-4455",
            mapUrl: "https://maps.google.com/?q=18+Office+Jl+TB+Simatupang+Jakarta+12430"
        },
        {
            city: "Singapore",
            address: "61 Robinson Road, #19-02, Singapore 068893",
            phone: "+65 8323-8737",
            mapUrl: "https://maps.google.com/?q=61+Robinson+Road+Singapore+068893"
        }
    ]

    return (
        <div className="pt-32 pb-24 min-h-screen bg-surface/30">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-heading font-black mb-6">
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-foreground/70 leading-relaxed">
                        Ready to completely transform your data strategy? Connect with our global experts today.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 md:p-14 rounded-[3rem] shadow-xl shadow-primary-600/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h2 className="text-3xl font-heading font-bold mb-8 relative z-10">Send a Message</h2>
                        <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out. We will get back to you shortly."); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">First Name</label>
                                    <input type="text" required className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Last Name</label>
                                    <input type="text" required className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground">Email Address</label>
                                <input type="email" required className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground">Message</label>
                                <textarea required rows={5} className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-y"></textarea>
                            </div>
                            <button type="submit" className="w-full h-16 rounded-xl bg-primary-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-700 hover:-translate-y-1 transition-all shadow-xl shadow-primary-600/20">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center h-full"
                    >
                        <h2 className="text-3xl font-heading font-bold mb-10">Global Presence</h2>
                        <div className="space-y-8">
                            {offices.map((office, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary-600 transition-colors">{office.city}</h4>
                                        <a
                                            href={office.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/70 mb-2 hover:text-primary-600 hover:underline transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                                        >
                                            {office.address}
                                            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
                                        </a>
                                        <br />
                                        <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-primary-600 transition-colors mt-1">
                                            <Phone className="w-4 h-4" /> {office.phone}
                                        </a>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8 border-t border-border mt-8 flex gap-6 items-start group">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary-600 transition-colors">Direct Questions</h4>
                                    <a href="mailto:solutions@thinkartha.com" className="text-lg font-medium text-foreground hover:text-primary-600 transition-colors border-b border-primary-600">
                                        solutions@thinkartha.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}