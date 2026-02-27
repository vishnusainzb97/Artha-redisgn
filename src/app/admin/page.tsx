"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, LogIn, Image as ImageIcon } from "lucide-react"

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === "artha2026") {
            setIsAuthenticated(true)
        } else {
            alert("Invalid password")
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md border-border mx-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-8">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-heading font-black text-center mb-2">Admin Access</h1>
                    <p className="text-center text-foreground/50 mb-8">Secure portal for asset management</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <input
                            type="password"
                            placeholder="Enter Access Key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center font-mono text-lg tracking-widest outline-none"
                        />
                        <button type="submit" className="w-full h-14 bg-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
                            Authenticate <LogIn className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-surface pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-4xl font-heading font-black flex items-center gap-4">
                        <ImageIcon className="text-primary-600 w-10 h-10" /> Asset Manager
                    </h1>
                    <button onClick={() => setIsAuthenticated(false)} className="px-6 py-3 rounded-full border border-border hover:bg-background transition-colors font-medium text-sm">
                        Sign Out
                    </button>
                </div>

                <div className="glass-card p-12 rounded-[3rem] text-center border-dashed border-2 border-border/50">
                    <ImageIcon className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Image Upload Center</h2>
                    <p className="text-foreground/50 max-w-md mx-auto mb-8">To update site infographics, please deploy files to the /public/images directory or connect to a headless CMS architecture.</p>
                    <div className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-lg text-sm font-mono font-bold">
                        Development Mode Only
                    </div>
                </div>
            </div>
        </div>
    )
}
