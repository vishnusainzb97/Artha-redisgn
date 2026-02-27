"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, ChevronRight, FileText, Briefcase, Users, LayoutDashboard, Compass } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Static index of main pages and sections
const searchIndex = [
    { title: "Home", url: "/", description: "Artha Solutions homepage", icon: LayoutDashboard },
    { title: "About Us", url: "/about", description: "Our vision, mission, and company overview", icon: Users },
    { title: "Solutions", url: "/solutions", description: "Enterprise Data Management, Governance, and AI", icon: Compass },
    { title: "Industries", url: "/industries", description: "BFSI, Healthcare, Retail, and more", icon: Briefcase },
    { title: "Artha Advantage", url: "/artha-advantage", description: "Why choose Artha Solutions", icon: ChevronRight },
    { title: "Contact Us", url: "/contact", description: "Get in touch with our team", icon: FileText },
    { title: "Data Migration", url: "/solutions#data-migration", description: "SAP and cloud data migration services", icon: Compass },
    { title: "Master Data Management", url: "/solutions#mdm", description: "Unified MDM solutions", icon: Compass },
    { title: "Artificial Intelligence", url: "/solutions#ai", description: "AI readiness and predictive analytics", icon: Compass },
]

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    // Filter results based on keywords (case-insensitive)
    const results = searchIndex.filter(item => {
        const keywords = query.toLowerCase().split(' ').filter(k => k.trim())
        if (keywords.length === 0) return true // Show all if no query

        return keywords.every(k =>
            item.title.toLowerCase().includes(k) ||
            item.description.toLowerCase().includes(k)
        )
    })

    // Handle keyboard shortcuts (Escape to close, Cmd+K usually handled globally)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (isOpen) {
                if (e.key === "ArrowDown") {
                    e.preventDefault()
                    setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
                }
                if (e.key === "ArrowUp") {
                    e.preventDefault()
                    setActiveIndex(prev => (prev > 0 ? prev - 1 : prev))
                }
                if (e.key === "Enter" && results[activeIndex]) {
                    e.preventDefault()
                    router.push(results[activeIndex].url)
                    onClose()
                }
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, results, activeIndex, router, onClose])

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setQuery("")
            setActiveIndex(0)
            setTimeout(() => inputRef.current?.focus(), 100)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[70vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Search Input Area */}
                        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search pages, solutions, industries..."
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                    setActiveIndex(0) // reset selection when typing
                                }}
                                className="flex-1 text-lg outline-none bg-transparent placeholder:text-gray-300 text-gray-800"
                            />
                            {query && (
                                <button onClick={() => setQuery("")} className="p-1 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                            <div className="hidden sm:flex items-center gap-1 ml-2 text-xs text-gray-400 font-medium px-2 py-1 bg-gray-100 rounded">
                                <span>ESC</span>
                                <span className="ml-1">to close</span>
                            </div>
                        </div>

                        {/* Search Results Area */}
                        <div className="flex-1 overflow-y-auto p-2">
                            {results.length > 0 ? (
                                <div className="space-y-1">
                                    {results.map((item, idx) => {
                                        const Icon = item.icon
                                        const isSelected = idx === activeIndex
                                        return (
                                            <div
                                                key={idx}
                                                onMouseEnter={() => setActiveIndex(idx)}
                                                onClick={() => {
                                                    router.push(item.url)
                                                    onClose()
                                                }}
                                                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${isSelected ? "bg-primary-50 text-primary-900" : "hover:bg-gray-50 text-gray-700"
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg ${isSelected ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-500"}`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-medium">{item.title}</h4>
                                                    <p className={`text-sm ${isSelected ? "text-primary-600/80" : "text-gray-400"}`}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                {isSelected && (
                                                    <ChevronRight className="w-5 h-5 text-primary-500" />
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="py-14 text-center text-gray-400 flex flex-col items-center">
                                    <Search className="w-8 h-8 mb-3 opacity-20" />
                                    <p>No results found for "{query}"</p>
                                    <p className="text-sm mt-1">Try searching for "data", "migration", or "about"</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
