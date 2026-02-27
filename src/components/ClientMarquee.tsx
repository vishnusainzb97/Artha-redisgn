"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ClientMarquee() {
    const [isMounted, setIsMounted] = useState(false)

    // Real industry leading company logos via SVG textual representation for absolute premium look without external image dependencies
    const clients = [
        { name: "Google", color: "#4285F4" },
        { name: "Microsoft", color: "#00A4EF" },
        { name: "Amazon", color: "#FF9900" },
        { name: "IBM", color: "#0530AD" },
        { name: "Oracle", color: "#F80000" },
        { name: "SAP", color: "#008FD3" },
        { name: "TCS", color: "#E31837" },
        { name: "Dell", color: "#007DB8" },
        { name: "Infosys", color: "#007CC3" },
        { name: "Wipro", color: "#173B6C" },
    ]

    // Render twice for seamless looping
    const repeatedClients = [...clients, ...clients]

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null // Prevent hydration mismatch

    return (
        <div className="w-full relative py-12 bg-surface/50 overflow-hidden border-y border-border">
            {/* Gradient masks for smooth fade effect at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        }
                    }}
                    className="flex items-center gap-16 px-8"
                >
                    {repeatedClients.map((client, idx) => (
                        <div
                            key={`${client.name}-${idx}`}
                            className="flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                        >
                            <span className="font-heading font-black text-3xl tracking-tighter" style={{ color: client.color }}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
