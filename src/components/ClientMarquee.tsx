"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const clients = [
    { name: "Danamon", src: "/images/clients/danamon.svg" },
    { name: "DBS", src: "/images/clients/dbs.svg" },
    { name: "Lincoln Financial Group", src: "/images/clients/lincoln-financial.svg" },
    { name: "HomeServe", src: "/images/clients/homeserve.svg" },
    { name: "Mandiri", src: "/images/clients/mandiri.svg" },
    { name: "Citi", src: "/images/clients/citi.svg" },
    { name: "Great Eastern", src: "/images/clients/great-eastern.svg" },
    { name: "TD Bank", src: "/images/clients/td-bank.svg" },
    { name: "M&T Bank", src: "/images/clients/mt-bank.svg" },
    { name: "BF&M", src: "/images/clients/bfm.svg" },
    { name: "American Express", src: "/images/clients/american-express.svg" },
    { name: "Netspend", src: "/images/clients/netspend.svg" },
    { name: "India Exim Bank", src: "/images/clients/india-exim-bank.svg" },
    { name: "Karnataka Bank", src: "/images/clients/karnataka-bank.svg" },
    { name: "BNI", src: "/images/clients/bni.svg" },
    { name: "State Street", src: "/images/clients/state-street.svg" },
    { name: "Adira Finance", src: "/images/clients/adira-finance.svg" },
    { name: "AQR", src: "/images/clients/aqr.svg" },
    { name: "Arbella Insurance", src: "/images/clients/arbella-insurance.svg" },
    { name: "DTCC", src: "/images/clients/dtcc.svg" },
    { name: "Elavon", src: "/images/clients/elavon.svg" },
    { name: "Fiserv", src: "/images/clients/fiserv.svg" },
    { name: "Hancock Whitney", src: "/images/clients/hancock-whitney.svg" },
    { name: "The Hartford", src: "/images/clients/the-hartford.svg" },
    { name: "Liberty Mutual", src: "/images/clients/liberty-mutual.svg" },
    { name: "Liberty Financial Group", src: "/images/clients/liberty-financial.svg" },
    { name: "Marsh McLennan", src: "/images/clients/marsh-mclennan.svg" },
    { name: "MassMutual", src: "/images/clients/massmutual.svg" },
    { name: "National Life", src: "/images/clients/national-life.svg" },
    { name: "Ontario Teachers", src: "/images/clients/ontario-teachers.svg" },
    { name: "Scotiabank", src: "/images/clients/scotiabank.svg" },
    { name: "Travelers", src: "/images/clients/travelers.svg" },
    { name: "US Bank", src: "/images/clients/us-bank.svg" },
    { name: "Fannie Mae", src: "/images/clients/fannie-mae.svg" },
    { name: "Vixio", src: "/images/clients/vixio.svg" },
    { name: "Wells Fargo", src: "/images/clients/wells-fargo.svg" },
    { name: "BFI Finance", src: "/images/clients/bfi-finance.svg" },
    { name: "Bank of America", src: "/images/clients/bank-of-america.svg" },
    { name: "AMP", src: "/images/clients/amp.svg" },
    { name: "Visa", src: "/images/clients/visa.svg" },
    { name: "Nationstar", src: "/images/clients/nationstar.svg" },
    { name: "Topa Insurance", src: "/images/clients/topa-insurance.svg" },
    { name: "Piramal Housing Finance", src: "/images/clients/piramal.svg" },
    { name: "SBI Card", src: "/images/clients/sbi-card.svg" },
    { name: "Hero Fincorp", src: "/images/clients/hero-fincorp.svg" },
    { name: "CAMS", src: "/images/clients/cams.svg" },
    { name: "Tata Capital", src: "/images/clients/tata-capital.svg" },
    { name: "SMi", src: "/images/clients/smi.svg" },
    { name: "Wing Bank", src: "/images/clients/wing-bank.svg" },
    { name: "Umpqua Bank", src: "/images/clients/umpqua-bank.svg" },
    { name: "Avalara", src: "/images/clients/avalara.svg" },
    { name: "BAF", src: "/images/clients/baf.svg" },
    { name: "ICE", src: "/images/clients/ice.svg" },
    { name: "Krungthai AXA", src: "/images/clients/krungthai-axa.svg" },
    { name: "RiskGrid Technologies", src: "/images/clients/riskgrid.svg" },
    { name: "Financial Engines", src: "/images/clients/financial-engines.svg" },
    { name: "Pegadaian", src: "/images/clients/pegadaian.svg" },
    { name: "UOB", src: "/images/clients/uob.svg" },
    { name: "Security Bank", src: "/images/clients/security-bank.svg" },
    { name: "NYPIUA", src: "/images/clients/nypiua.svg" },
    { name: "Generali", src: "/images/clients/generali.svg" },
    { name: "CIMB", src: "/images/clients/cimb.svg" },
    { name: "Mercury Insurance", src: "/images/clients/mercury-insurance.svg" },
    { name: "Chaitanya", src: "/images/clients/chaitanya.svg" },
    { name: "Commonwealth Bank", src: "/images/clients/commonwealth-bank.svg" },
    { name: "Fullerton India", src: "/images/clients/fullerton-india.svg" },
    { name: "SB Finance", src: "/images/clients/sb-finance.svg" },
    { name: "SIFB", src: "/images/clients/sifb.svg" },
]

export default function ClientMarquee() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const doubled = [...clients, ...clients]

    return (
        <>
            {/* Inline keyframe + hover-pause styles */}
            <style jsx global>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marquee-scroll 120s linear infinite;
                }
                .marquee-container:hover .marquee-track {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="marquee-container w-full relative py-12 bg-white overflow-hidden">
                {/* Gradient fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-max marquee-track">
                    {doubled.map((client, idx) => (
                        <div
                            key={`${client.name}-${idx}`}
                            className="flex items-center justify-center min-w-[200px] max-w-[280px] px-8 shrink-0"
                        >
                            <Image
                                src={client.src}
                                alt={`${client.name} logo`}
                                width={240}
                                height={100}
                                className="object-contain h-14 md:h-20 w-auto pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
