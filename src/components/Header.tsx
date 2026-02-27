"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import SearchModal from "./SearchModal"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Artha Advantage", href: "/artha-advantage" },
        { name: "Solutions", href: "/solutions" },
        { name: "Industries", href: "/industries" },
        { name: "Resources", href: "/resources" },
        { name: "About Us", href: "/about" },
    ]

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/Artha-redisgn/images/logo-artha-solutions.png"
                        alt="Artha Solutions Logo"
                        width={250}
                        height={80}
                        className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary-600 flex items-center gap-1 ${pathname === link.href ? "text-primary-600" : "text-foreground/80"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface transition-colors"
                        aria-label="Search"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search className="w-5 h-5 text-foreground/80" />
                    </button>

                    <Link href="/contact" className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30">
                        Get in Touch
                    </Link>

                    <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-card border-t shadow-xl lg:hidden p-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium p-2 rounded-lg ${pathname === link.href ? "text-primary-600 bg-primary-600/10" : "text-foreground/80"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center justify-center h-12 rounded-xl bg-primary-600 text-white font-medium w-full">
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </header>
    )
}
