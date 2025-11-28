"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    const headlineRef = useRef<HTMLHeadingElement>(null)
    const subheadlineRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // Simple text reveal animation logic
        if (headlineRef.current) {
            // Reset content to ensure we don't duplicate spans on re-renders if strict mode is on
            // But for simplicity in this effect, we'll assume it runs once or handle cleanup if needed.
            // Better to use a library or just simple CSS/GSAP stagger on words if possible.
            // Let's just animate the container for now to avoid hydration mismatches with manual DOM manipulation.

            gsap.fromTo(headlineRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
            )
        }

        gsap.fromTo(subheadlineRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
        )

        gsap.fromTo(buttonsRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
        )

    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 z-0 bg-gradient-hero">
                <div className="absolute inset-0 bg-black/40" />
                {/* Placeholder for video or 3D element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 bg-[url('/images/pattern.png')] bg-repeat">
                    {/* Pattern overlay if available */}
                </div>
            </div>

            <div className="container relative z-10 px-4 text-center">
                <h1
                    ref={headlineRef}
                    className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 uppercase tracking-tighter"
                >
                    Motherland 2025
                </h1>

                <p
                    ref={subheadlineRef}
                    className="font-body text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
                >
                    Where Africa Unites Through Football
                    <span className="block text-gold-500 mt-2 font-bold">
                        December 15-21, 2025 - Lagos | May-June 2025 - Continental
                    </span>
                </p>

                <div ref={buttonsRef} className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link href="/charity-cup/tickets">
                        <Button size="lg" variant="primary" className="w-full md:w-auto">
                            Get Charity Cup Tickets
                        </Button>
                    </Link>
                    <Link href="/main-tournament">
                        <Button size="lg" variant="outline" className="w-full md:w-auto">
                            Pre-Register for 2025
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gold-500 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    )
}
