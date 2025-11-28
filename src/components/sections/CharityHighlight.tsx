"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/Button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function CharityHighlight() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

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
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })

        if (imageRef.current) {
            tl.from(imageRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
        }

    }, [])

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div ref={contentRef} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-1 w-12 bg-gold-500" />
                            <span className="text-gold-500 font-bold tracking-widest uppercase">December 2025</span>
                        </div>

                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                            The Unity & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-gold">Charity Cup</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg">
                            <p>
                                Join us for a historic celebration of African unity. The Charity Cup brings together
                                stars, culture, and purpose in Lagos.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold-500 mt-1">✦</span>
                                    <div>
                                        <strong className="text-white block">December 18-19: Cultural Festival</strong>
                                        <span className="text-sm text-gray-400">Music, Art, Food, and Heritage celebrations</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold-500 mt-1">✦</span>
                                    <div>
                                        <strong className="text-white block">December 20: Charity Match</strong>
                                        <span className="text-sm text-gray-400">Lagos International Stadium • Featuring Osimhen & Stars</span>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-sm text-gray-400 italic border-l-2 border-gold-500 pl-4">
                                Proceeds support genocide victims and promote peace across the continent.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button variant="primary">Buy Tickets</Button>
                            <Button variant="secondary">Learn More</Button>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div ref={imageRef} className="relative mt-12 lg:mt-0">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                            {/* Main Image */}
                            <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden border border-white/10 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                                {/* Placeholder for image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-gray-600">
                                    Stadium Image
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-gold-500 rounded-full flex items-center justify-center p-4 shadow-lg shadow-gold-500/20 z-20 animate-[spin_10s_linear_infinite]">
                                <div className="text-black text-center font-bold leading-tight">
                                    <span className="block text-xl md:text-2xl">18-20</span>
                                    <span className="block text-xs md:text-sm">DEC</span>
                                </div>
                            </div>

                            {/* Secondary Image Overlay */}
                            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gold-500/30 shadow-2xl z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                {/* Placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
                                    Player Action
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
