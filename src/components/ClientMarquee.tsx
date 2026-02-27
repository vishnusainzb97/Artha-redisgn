"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const clients = [
    { name: "Danamon", src: "/Artha-redisgn/images/clients/danamon.svg" },
    { name: "DBS", src: "/Artha-redisgn/images/clients/dbs.svg" },
    { name: "Lincoln Financial Group", src: "/Artha-redisgn/images/clients/lincoln-financial.svg" },
    { name: "HomeServe", src: "/Artha-redisgn/images/clients/homeserve.svg" },
    { name: "Mandiri", src: "/Artha-redisgn/images/clients/mandiri.svg" },
    { name: "Citi", src: "/Artha-redisgn/images/clients/citi.svg" },
    { name: "Great Eastern", src: "/Artha-redisgn/images/clients/great-eastern.svg" },
    { name: "TD Bank", src: "/Artha-redisgn/images/clients/td-bank.svg" },
    { name: "M&T Bank", src: "/Artha-redisgn/images/clients/mt-bank.svg" },
    { name: "BF&M", src: "/Artha-redisgn/images/clients/bfm.svg" },
    { name: "American Express", src: "/Artha-redisgn/images/clients/american-express.svg" },
    { name: "Netspend", src: "/Artha-redisgn/images/clients/netspend.svg" },
    { name: "India Exim Bank", src: "/Artha-redisgn/images/clients/india-exim-bank.svg" },
    { name: "Karnataka Bank", src: "/Artha-redisgn/images/clients/karnataka-bank.svg" },
    { name: "BNI", src: "/Artha-redisgn/images/clients/bni.svg" },
    { name: "State Street", src: "/Artha-redisgn/images/clients/state-street.svg" },
    { name: "Adira Finance", src: "/Artha-redisgn/images/clients/adira-finance.svg" },
    { name: "AQR", src: "/Artha-redisgn/images/clients/aqr.svg" },
    { name: "Arbella Insurance", src: "/Artha-redisgn/images/clients/arbella-insurance.svg" },
    { name: "DTCC", src: "/Artha-redisgn/images/clients/dtcc.svg" },
    { name: "Elavon", src: "/Artha-redisgn/images/clients/elavon.svg" },
    { name: "Fiserv", src: "/Artha-redisgn/images/clients/fiserv.svg" },
    { name: "Hancock Whitney", src: "/Artha-redisgn/images/clients/hancock-whitney.svg" },
    { name: "The Hartford", src: "/Artha-redisgn/images/clients/the-hartford.svg" },
    { name: "Liberty Mutual", src: "/Artha-redisgn/images/clients/liberty-mutual.svg" },
    { name: "Liberty Financial Group", src: "/Artha-redisgn/images/clients/liberty-financial.svg" },
    { name: "Marsh McLennan", src: "/Artha-redisgn/images/clients/marsh-mclennan.svg" },
    { name: "MassMutual", src: "/Artha-redisgn/images/clients/massmutual.svg" },
    { name: "National Life", src: "/Artha-redisgn/images/clients/national-life.svg" },
    { name: "Ontario Teachers", src: "/Artha-redisgn/images/clients/ontario-teachers.svg" },
    { name: "Scotiabank", src: "/Artha-redisgn/images/clients/scotiabank.svg" },
    { name: "Travelers", src: "/Artha-redisgn/images/clients/travelers.svg" },
    { name: "US Bank", src: "/Artha-redisgn/images/clients/us-bank.svg" },
    { name: "Fannie Mae", src: "/Artha-redisgn/images/clients/fannie-mae.svg" },
    { name: "Vixio", src: "/Artha-redisgn/images/clients/vixio.svg" },
    { name: "Wells Fargo", src: "/Artha-redisgn/images/clients/wells-fargo.svg" },
    { name: "BFI Finance", src: "/Artha-redisgn/images/clients/bfi-finance.svg" },
    { name: "Bank of America", src: "/Artha-redisgn/images/clients/bank-of-america.svg" },
    { name: "AMP", src: "/Artha-redisgn/images/clients/amp.svg" },
    { name: "Visa", src: "/Artha-redisgn/images/clients/visa.svg" },
    { name: "Nationstar", src: "/Artha-redisgn/images/clients/nationstar.svg" },
    { name: "Topa Insurance", src: "/Artha-redisgn/images/clients/topa-insurance.svg" },
    { name: "Piramal Housing Finance", src: "/Artha-redisgn/images/clients/piramal.svg" },
    { name: "SBI Card", src: "/Artha-redisgn/images/clients/sbi-card.svg" },
    { name: "Hero Fincorp", src: "/Artha-redisgn/images/clients/hero-fincorp.svg" },
    { name: "CAMS", src: "/Artha-redisgn/images/clients/cams.svg" },
    { name: "Tata Capital", src: "/Artha-redisgn/images/clients/tata-capital.svg" },
    { name: "SMi", src: "/Artha-redisgn/images/clients/smi.svg" },
    { name: "Wing Bank", src: "/Artha-redisgn/images/clients/wing-bank.svg" },
    { name: "Umpqua Bank", src: "/Artha-redisgn/images/clients/umpqua-bank.svg" },
    { name: "Avalara", src: "/Artha-redisgn/images/clients/avalara.svg" },
    { name: "BAF", src: "/Artha-redisgn/images/clients/baf.svg" },
    { name: "ICE", src: "/Artha-redisgn/images/clients/ice.svg" },
    { name: "Krungthai AXA", src: "/Artha-redisgn/images/clients/krungthai-axa.svg" },
    { name: "RiskGrid Technologies", src: "/Artha-redisgn/images/clients/riskgrid.svg" },
    { name: "Financial Engines", src: "/Artha-redisgn/images/clients/financial-engines.svg" },
    { name: "Pegadaian", src: "/Artha-redisgn/images/clients/pegadaian.svg" },
    { name: "UOB", src: "/Artha-redisgn/images/clients/uob.svg" },
    { name: "Security Bank", src: "/Artha-redisgn/images/clients/security-bank.svg" },
    { name: "NYPIUA", src: "/Artha-redisgn/images/clients/nypiua.svg" },
    { name: "Generali", src: "/Artha-redisgn/images/clients/generali.svg" },
    { name: "CIMB", src: "/Artha-redisgn/images/clients/cimb.svg" },
    { name: "Mercury Insurance", src: "/Artha-redisgn/images/clients/mercury-insurance.svg" },
    { name: "Chaitanya", src: "/Artha-redisgn/images/clients/chaitanya.svg" },
    { name: "Commonwealth Bank", src: "/Artha-redisgn/images/clients/commonwealth-bank.svg" },
    { name: "Fullerton India", src: "/Artha-redisgn/images/clients/fullerton-india.svg" },
    { name: "SB Finance", src: "/Artha-redisgn/images/clients/sb-finance.svg" },
    { name: "SIFB", src: "/Artha-redisgn/images/clients/sifb.svg" },
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
