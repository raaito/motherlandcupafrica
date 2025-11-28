import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Calendar, MapPin, Heart, Users, Trophy, Music } from "lucide-react"

export const metadata: Metadata = {
    title: "Motherland Cup 2025: BAT Edition | Motherland Football Tournament",
    description: "The inaugural Motherland Cup 2025, BAT Edition. An international invitational football tournament celebrating unity and shared heritage.",
}

export default function CharityCupPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16">
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="absolute inset-0 bg-[url('/images/stadium-pattern.png')] opacity-10 z-0" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-8">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold text-sm">December 15-21, 2025</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase">
                        Motherland Cup<br />
                        <span className="text-gold-500">2025</span>
                    </h1>

                    <div className="mb-8">
                        <span className="block text-2xl md:text-3xl text-white/80 font-body italic">
                            BAT Edition
                        </span>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        A celebration of African heritage through football, music, and culture.
                        Supporting genocide victims and promoting peace.
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-5 h-5 text-gold-500" />
                            <span>Lagos International Stadium, Nigeria</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/charity-cup/tickets"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                        >
                            Get Your Tickets
                        </Link>
                        <Link
                            href="/charity-cup/schedule"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-transparent border-2 border-white/20 text-white hover:border-gold-500 hover:text-gold-500"
                        >
                            View Schedule
                        </Link>
                    </div>
                </div>
            </section>

            {/* Event Overview */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center hover:border-gold-500/50">
                            <CardHeader>
                                <Music className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                                <CardTitle>Cultural Festival</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Dec 18-19: Experience African music, art, food, and heritage celebrations
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:border-gold-500/50">
                            <CardHeader>
                                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                                <CardTitle>Charity Match</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Dec 20: Star-studded football match featuring Africa's finest players
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:border-gold-500/50">
                            <CardHeader>
                                <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                                <CardTitle>Support the Cause</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Proceeds go towards supporting genocide victims and promoting peace
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                            About the <span className="text-gold-500">Motherland Cup</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg">
                            <p>
                                An international invitational football tournament set to add a dynamic sporting dimension
                                to the week-long cultural and economic extravaganza called Motherland Festival 2025.
                            </p>
                            <p className="text-gray-400">
                                While the broader festival in Lagos and Abuja focuses on cultural revival, economic advancement,
                                and diaspora connection, the Motherland Cup will serve as a powerful symbol of unity
                                and shared heritage through the universal language of football.
                            </p>
                            <p className="text-gold-500 font-bold">
                                Join us in December 2025 as we unite through the beautiful game.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Confirmed Stars */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-gold-500">Star</span> Players
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Watch Africa's finest talents unite for a common cause
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { name: "Victor Osimhen", country: "Nigeria", position: "Forward", status: "Confirmed" },
                            { name: "More Stars", country: "TBA", position: "Various", status: "Coming Soon" },
                            { name: "More Stars", country: "TBA", position: "Various", status: "Coming Soon" },
                            { name: "More Stars", country: "TBA", position: "Various", status: "Coming Soon" },
                        ].map((player, index) => (
                            <Card key={index} className="text-center group hover:border-gold-500/50 cursor-pointer">
                                <CardContent className="pt-6">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-black" />
                                    </div>
                                    <h3 className="font-display font-bold text-white mb-1">{player.name}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{player.country}</p>
                                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${player.status === "Confirmed"
                                        ? "bg-green-500/20 text-green-500"
                                        : "bg-gray-500/20 text-gray-400"
                                        }`}>
                                        {player.status}
                                    </span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/charity-cup/teams"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-11 px-6 bg-transparent border-2 border-white/20 text-white hover:border-gold-500 hover:text-gold-500"
                        >
                            View All Players
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ticket Tiers Preview */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                            Get Your <span className="text-gold-500">Tickets</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose your experience level and be part of history
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { tier: "Standard", price: "₦15,000", features: ["Festival Access", "Match Ticket", "General Seating"] },
                            { tier: "Premium", price: "₦35,000", features: ["All Standard", "Better Seating", "Merchandise"] },
                            { tier: "VIP", price: "₦75,000", features: ["All Premium", "VIP Lounge", "Meet & Greet"] },
                            { tier: "VVIP", price: "₦150,000", features: ["All VIP", "Private Box", "Full Hospitality"] },
                        ].map((ticket, index) => (
                            <Card key={index} variant={index === 2 ? "outlined" : "default"} className="relative">
                                {index === 2 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                                        POPULAR
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-center">{ticket.tier}</CardTitle>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold text-gold-500">{ticket.price}</span>
                                        <span className="text-gray-400 text-sm block">per person</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {ticket.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="text-gold-500 mt-1">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/charity-cup/tickets"
                                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-11 px-6 w-full ${index === 2
                                            ? "bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                                            : "bg-transparent border-2 border-white/20 text-white hover:border-gold-500 hover:text-gold-500"
                                            }`}
                                    >
                                        Select
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-900 to-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        Be Part of <span className="text-gold-500">History</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Join thousands in Lagos this December for an unforgettable celebration of
                        African unity and football excellence
                    </p>
                    <Link
                        href="/charity-cup/tickets"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                    >
                        Get Your Tickets Now
                    </Link>
                </div>
            </section>
        </div>
    )
}
