"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Charity Cup", href: "/charity-cup" },
    { name: "Main Tournament", href: "/main-tournament" },
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const scrolled = useScroll(50)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="relative z-50">
                    <Image
                        src="/logo.png"
                        alt="Motherland 2025"
                        width={300}
                        height={100}
                        className="h-auto w-auto max-h-20"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-gold-500 relative group",
                                pathname === item.href ? "text-gold-500" : "text-gray-300"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/charity-cup/tickets"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-9 px-4 bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 text-sm"
                    >
                        Buy Tickets
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-display font-bold text-white hover:text-gold-500"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/charity-cup/tickets"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                            >
                                Buy Tickets
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
