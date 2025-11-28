"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Briefcase, Handshake } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function MainTournamentPreview() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(contentRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })

    }, [])

    return (
        <section ref={sectionRef} className="py-32 relative bg-gray-900 overflow-hidden min-h-screen flex items-center">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="w-full h-full bg-[url('/images/stadium-crowd.jpg')] bg-cover bg-center animate-ken-burns opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={contentRef} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-1 w-12 bg-gold-500" />
                            <span className="text-gold-500 font-bold tracking-widest uppercase">May - June 2025</span>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">
                            The Main <br />
                            <span className="text-transparent bg-clip-text bg-gradient-gold">Event</span>
                        </h2>

                        <p className="text-gray-300 text-lg max-w-xl">
                            The world's first heritage football tournament.
                            A continental showcase featuring nations from Africa, the Caribbean, and South America.
                            More than just a game—it's a homecoming.
                        </p>

                        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                            <FeatureCard icon={Trophy} title="Tournament" />
                            <FeatureCard icon={Briefcase} title="Business Summit" />
                            <FeatureCard icon={Handshake} title="Investor Expo" />
                        </div>

                        <div className="pt-4">
                            <Button variant="primary" size="lg">Pre-Register Now</Button>
                        </div>
                    </div>

                    {/* 3D Trophy Placeholder */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        <div className="w-64 h-96 bg-gradient-to-b from-gold-100 to-gold-700 rounded-t-full rounded-b-lg opacity-20 blur-3xl absolute animate-pulse" />

                        {/* Simple CSS Trophy Representation */}
                        <div className="relative w-48 h-80 border-4 border-gold-500 rounded-lg flex items-center justify-center transform rotate-y-12 animate-float">
                            <div className="text-gold-500 font-display font-bold text-2xl text-center">
                                3D Trophy <br /> Model
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex-none w-40 h-40 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-4 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 cursor-pointer group">
            <Icon className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-sm text-center">{title}</span>
        </div>
    )
}
