"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientMarquee() {
    const [isMounted, setIsMounted] = useState(false)

    // Real industry leading company logos downloaded from the original site
    const clients = [
        { name: "Alation", src: "/images/partners/alation.svg" },
        { name: "AWS", src: "/images/partners/aws.svg" },
        { name: "Azure", src: "/images/partners/azure.svg" },
        { name: "Snowflake", src: "/images/partners/snowflake.svg" },
        { name: "Talend", src: "/images/partners/talend.svg" },
        { name: "Qlik", src: "/images/partners/qlik.svg" },
        { name: "Databricks", src: "/images/partners/databricks.png" },
        { name: "MHA", src: "/images/clients/mha.svg" },
        { name: "CCA", src: "/images/clients/cca.png" },
        { name: "HIL", src: "/images/clients/hil.png" }
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
                            className="flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-[150px] max-w-[200px]"
                        >
                            <Image
                                src={client.src}
                                alt={`${client.name} logo`}
                                width={180}
                                height={80}
                                className="object-contain h-14 w-auto dark:brightness-200 dark:contrast-200 pointer-events-none"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
