"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function MissionTeaser() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(sectionRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })

        if (statsRef.current) {
            tl.from(statsRef.current.children, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
        }

    }, [])

    return (
        <section ref={sectionRef} className="py-32 relative bg-black flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('/images/adinkra-pattern.png')] bg-repeat" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="text-gold-500 font-bold tracking-widest uppercase mb-6 block">Our Mission</span>

                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-16 max-w-5xl mx-auto leading-tight">
                    "Uniting the African diaspora through the beautiful game. <br />
                    <span className="text-gray-500">One tournament. One heritage. One motherland.</span>"
                </h2>

                <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl font-display font-bold text-gold-500 mb-2">50+</div>
                        <div className="text-gray-400 uppercase tracking-wider text-sm">Nations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl font-display font-bold text-gold-500 mb-2">1</div>
                        <div className="text-gray-400 uppercase tracking-wider text-sm">Heritage</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl font-display font-bold text-gold-500 mb-2">∞</div>
                        <div className="text-gray-400 uppercase tracking-wider text-sm">Pride</div>
                    </div>
                </div>

                <Button variant="outline" size="lg">
                    Discover Our Story
                </Button>
            </div>
        </section>
    )
}
