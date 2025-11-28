"use client"

import { useRef } from "react"
import { TiltCard } from "@/components/ui/TiltCard"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const players = [
    {
        name: "Victor Osimhen",
        country: "Nigeria",
        position: "Forward",
        status: "Confirmed",
        image: "/images/osimhen.jpg" // Placeholder path
    },
    {
        name: "Mohamed Salah",
        country: "Egypt",
        position: "Forward",
        status: "Rumored",
        image: "/images/salah.jpg"
    },
    {
        name: "Sadio Mané",
        country: "Senegal",
        position: "Forward",
        status: "Rumored",
        image: "/images/mane.jpg"
    },
    {
        name: "Achraf Hakimi",
        country: "Morocco",
        position: "Defender",
        status: "Rumored",
        image: "/images/hakimi.jpg"
    },
    {
        name: "André Onana",
        country: "Cameroon",
        position: "Goalkeeper",
        status: "Rumored",
        image: "/images/onana.jpg"
    }
]

export function FeaturedPlayers() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                        Stars of the <br />
                        <span className="text-gold-500">Motherland</span>
                    </h2>
                    <p className="text-gray-400 max-w-md">
                        Witness the greatest African talents from across the globe uniting for one cause.
                    </p>
                </div>
                <div className="hidden md:block">
                    <Link href="/charity-cup/teams">
                        <Button variant="ghost" className="group">
                            View All Players <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-auto pb-12 px-4 md:px-0 container mx-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {players.map((player, index) => (
                    <div key={index} className="flex-none w-80 md:w-96 snap-center perspective-1000">
                        <TiltCard className="h-[500px] w-full">
                            <div className="relative h-full w-full rounded-xl overflow-hidden bg-gray-800 border border-white/10 group">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-500">
                                    {player.name} Image
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-gold-500 text-sm font-bold tracking-wider uppercase">{player.country}</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${player.status === 'Confirmed' ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-gray-400'}`}>
                                            {player.status}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-3xl font-bold text-white mb-1">{player.name}</h3>
                                    <p className="text-gray-400 text-sm">{player.position}</p>
                                </div>

                                {/* Hover Border */}
                                <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 transition-colors duration-300 rounded-xl pointer-events-none" />
                            </div>
                        </TiltCard>
                    </div>
                ))}
            </div>

            <div className="md:hidden text-center mt-8">
                <Link href="/charity-cup/teams">
                    <Button variant="ghost">View All Players</Button>
                </Link>
            </div>
        </section>
    )
}
