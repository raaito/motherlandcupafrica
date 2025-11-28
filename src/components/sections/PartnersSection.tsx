"use client"

const partners = [
    { name: "Partner 1", logo: "/images/partner-1.png" },
    { name: "Partner 2", logo: "/images/partner-2.png" },
    { name: "Partner 3", logo: "/images/partner-3.png" },
    { name: "Partner 4", logo: "/images/partner-4.png" },
    { name: "Partner 5", logo: "/images/partner-5.png" },
    { name: "Partner 6", logo: "/images/partner-6.png" },
    { name: "Partner 7", logo: "/images/partner-7.png" },
    { name: "Partner 8", logo: "/images/partner-8.png" },
]

export function PartnersSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                    Our <span className="text-gold-500">Partners</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Proud to work with organizations that share our vision of unity and excellence.
                </p>
            </div>

            {/* Marquee Row 1 - Moving Left */}
            <div className="relative mb-8">
                <div className="flex gap-12 animate-marquee-left">
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-none w-40 h-24 bg-white/5 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border border-white/10 hover:border-gold-500/50"
                        >
                            <span className="text-gray-500 text-sm font-bold">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 - Moving Right */}
            <div className="relative">
                <div className="flex gap-12 animate-marquee-right">
                    {[...[...partners].reverse(), ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-none w-40 h-24 bg-white/5 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border border-white/10 hover:border-gold-500/50"
                        >
                            <span className="text-gray-500 text-sm font-bold">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
