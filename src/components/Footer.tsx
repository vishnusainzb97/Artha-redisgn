import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-border pt-24 pb-12 mt-auto">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo-artha-solutions.png"
                                alt="Artha Solutions Logo"
                                width={250}
                                height={80}
                                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
                            />
                        </Link>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                            A premier business and technology consulting firm empowering businesses with insightful innovations. Quality, Integrity & Trust.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://linkedin.com/company/arthasolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm hover:shadow-primary-600/30">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com/ArthaITSolution" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm hover:shadow-primary-600/30">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com/Arthasolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm hover:shadow-primary-600/30">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link href="/artha-advantage" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Artha Advantage</Link></li>
                            <li><Link href="/solutions#data-solutions" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Data Solutions</Link></li>
                            <li><Link href="/solutions#ai" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Artificial Intelligence</Link></li>
                            <li><Link href="/solutions#sap" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">SAP Solutions</Link></li>
                            <li><Link href="/solutions#cloud" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Cloud & Managed Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-6">Industries</h4>
                        <ul className="space-y-4">
                            <li><Link href="/industries#manufacturing" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Manufacturing</Link></li>
                            <li><Link href="/industries#bfsi" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">BFSI</Link></li>
                            <li><Link href="/industries#healthcare" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Healthcare</Link></li>
                            <li><Link href="/industries#retail" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Retail</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-foreground mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
                            <li><Link href="/resources" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Resources</Link></li>
                            <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Contact</Link></li>
                        </ul>

                        <div className="mt-8">
                            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700">
                                Ready to transform? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/50">
                        &copy; {new Date().getFullYear()} Artha Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
