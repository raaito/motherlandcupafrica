import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Award, Star, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Partners & Sponsors | Motherland 2025",
    description: "Join leading brands supporting the Motherland Tournament. Explore partnership opportunities.",
}

const sponsorTiers = [
    {
        tier: "Title Sponsor",
        icon: Award,
        benefits: [
            "Exclusive naming rights",
            "Premium brand visibility across all channels",
            "VIP hospitality packages",
            "Player meet & greet access",
            "Custom activation opportunities",
            "Media and PR exposure"
        ],
        partners: ["Available"]
    },
    {
        tier: "Gold Partner",
        icon: Star,
        benefits: [
            "Logo on all official materials",
            "Stadium branding",
            "VIP tickets allocation",
            "Social media features",
            "Event activation space"
        ],
        partners: ["Partner 1", "Partner 2"]
    },
    {
        tier: "Silver Partner",
        icon: TrendingUp,
        benefits: [
            "Website logo placement",
            "Social media recognition",
            "Premium tickets",
            "Newsletter feature"
        ],
        partners: ["Partner 3", "Partner 4", "Partner 5"]
    }
]

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-hero text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                        Our <span className="text-gold-500">Partners</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Join industry leaders supporting African unity and excellence
                    </p>
                </div>
            </section>

            {/* Patrons & Stakeholders */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    {/* Grand Patron */}
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                            Grand <span className="text-gold-500">Patron</span>
                        </h2>
                        <div className="max-w-md mx-auto">
                            <Card className="text-center border-gold-500/50 bg-gold-500/5">
                                <CardContent className="pt-8">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                                        <Users className="w-16 h-16 text-black" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                                        Bola Ahmed Tinubu
                                    </h3>
                                    <p className="text-gold-500 font-bold uppercase tracking-wider text-sm">
                                        President of the Federal Republic of Nigeria
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Patron */}
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                            <span className="text-gold-500">Patron</span>
                        </h2>
                        <div className="max-w-md mx-auto">
                            <Card className="text-center border-white/10 bg-white/5">
                                <CardContent className="pt-8">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-700 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-gray-400" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-2">
                                        Godswill Akpabio
                                    </h3>
                                    <p className="text-gray-400 uppercase tracking-wider text-xs">
                                        Senate President of Nigeria
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Stakeholders */}
                    <div className="mb-20">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Stakeholder <span className="text-gold-500">Partners</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Abdul Ahmed Ningi", role: "Chairman, Senate Committee on Sports Development" },
                                { name: "Shehu Dikko", role: "Chairman, National Sports Commission" },
                                { name: "Bukola Olopade", role: "Director General, National Sports Commission" },
                                { name: "Ibrahim Musa Gusau", role: "President, Nigeria Football Federation" },
                            ].map((person, index) => (
                                <Card key={index} className="text-center hover:border-gold-500/30 transition-colors">
                                    <CardContent className="pt-6">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                                            <Users className="w-10 h-10 text-gray-500" />
                                        </div>
                                        <h3 className="font-display text-lg font-bold text-white mb-2">
                                            {person.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs uppercase tracking-wide">
                                            {person.role}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Tiers */}
            <section className="py-20 bg-black border-t border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Sponsorship <span className="text-gold-500">Opportunities</span>
                    </h2>
                    <div className="space-y-12 max-w-5xl mx-auto">
                        {sponsorTiers.map((tier, index) => (
                            <Card key={index} variant={index === 0 ? "outlined" : "default"}>
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-4">
                                        <tier.icon className="w-12 h-12 text-gold-500" />
                                        <CardTitle className="text-3xl">{tier.tier}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Benefits:</h4>
                                            <ul className="space-y-2">
                                                {tier.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-300">
                                                        <span className="text-gold-500">✓</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Current Partners:</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                {tier.partners.map((partner, i) => (
                                                    <div
                                                        key={i}
                                                        className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/10"
                                                    >
                                                        <span className="text-gray-500 font-bold">{partner}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA */}
            <section className="py-32 bg-gradient-to-br from-green-900 to-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">
                        Become a <span className="text-gold-500">Partner</span>
                    </h2>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                        Align your brand with African unity, excellence, and social impact.
                        Reach millions across the diaspora.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer text-xl px-12 py-6 h-auto bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}
