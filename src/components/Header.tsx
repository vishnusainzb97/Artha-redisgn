"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Search, Moon, Sun, ArrowRight } from "lucide-react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

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
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-lg group-hover:shadow-primary-600/50 transition-shadow">A</div>
                    <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">Artha Solutions</span>
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
                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface transition-colors" aria-label="Search">
                        <Search className="w-5 h-5 text-foreground/80" />
                    </button>
                    <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface transition-colors hidden sm:flex" aria-label="Toggle Theme">
                        <Sun className="w-5 h-5 text-foreground/80 hidden dark:block" />
                        <Moon className="w-5 h-5 text-foreground/80 block dark:hidden" />
                    </button>
                    <Link href="/contact" className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30">
                        Get in Touch
                    </Link>

                    <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
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
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium p-2 rounded-lg ${pathname === link.href ? "text-primary-600 bg-primary-600/10" : "text-foreground/80"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex items-center justify-center h-12 rounded-xl bg-primary-600 text-white font-medium w-full">
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
