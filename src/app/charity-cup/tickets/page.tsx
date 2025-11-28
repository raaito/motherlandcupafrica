import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Check, Ticket, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Get Tickets | Motherland Cup 2025",
    description: "Secure your spot for the Motherland Cup 2025. Choose from Standard, Premium, VIP, and VVIP packages.",
}

const ticketTiers = [
    {
        name: "Standard",
        price: "₦15,000",
        description: "Experience the thrill from the stands",
        features: [
            "Access to Festival Grounds (Dec 18-19)",
            "Match Day Ticket (Dec 20)",
            "General Seating Area",
            "Access to Public Food Court",
            "Digital Event Guide"
        ],
        cta: "Buy Standard",
        highlight: false
    },
    {
        name: "Premium",
        price: "₦35,000",
        description: "Enhanced view and comfort",
        features: [
            "All Standard Benefits",
            "Premium Seating Section",
            "Fast Track Entry",
            "Official Tournament T-Shirt",
            "Access to Premium Lounge"
        ],
        cta: "Buy Premium",
        highlight: true
    },
    {
        name: "VIP",
        price: "₦75,000",
        description: "Luxury experience for true fans",
        features: [
            "All Premium Benefits",
            "VIP Box Seating",
            "Complimentary Food & Drinks",
            "Meet & Greet with Legends",
            "VIP Parking Pass",
            "Exclusive Merchandise Pack"
        ],
        cta: "Buy VIP",
        highlight: false
    },
    {
        name: "VVIP",
        price: "₦150,000",
        description: "The ultimate tournament experience",
        features: [
            "All VIP Benefits",
            "Private Suite Access",
            "Chauffeur Service (Lagos)",
            "Backstage Access at Concert",
            "Gala Dinner Invitation",
            "Personal Concierge"
        ],
        cta: "Buy VVIP",
        highlight: false
    }
]

export default function TicketsPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-hero text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-8">
                        <Ticket className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold text-sm">Tickets On Sale Now</span>
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                        Get Your <span className="text-gold-500">Tickets</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Be part of history at the Lagos International Stadium
                    </p>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gold-500" />
                            <span>December 15-21, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-gold-500" />
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticket Tiers */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {ticketTiers.map((tier, index) => (
                            <Card
                                key={index}
                                className={`relative flex flex-col ${tier.highlight ? 'border-gold-500 shadow-lg shadow-gold-500/20' : 'hover:border-gold-500/50 transition-colors'}`}
                            >
                                {tier.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Best Value
                                    </div>
                                )}
                                <CardHeader className="text-center pb-8 border-b border-white/10">
                                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                                    <div className="text-4xl font-bold text-gold-500 mb-2">{tier.price}</div>
                                    <p className="text-sm text-gray-400">{tier.description}</p>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col pt-8">
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                <Check className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/checkout"
                                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 w-full font-bold ${tier.highlight
                                                ? "bg-gradient-cta text-black shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                                                : "bg-white/10 text-white hover:bg-white/20"
                                            }`}
                                    >
                                        {tier.cta}
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Frequently Asked <span className="text-gold-500">Questions</span>
                    </h2>
                    <div className="space-y-6">
                        {[
                            { q: "Can I buy tickets at the venue?", a: "We strongly recommend purchasing online as tickets are likely to sell out. A limited number may be available at the gate." },
                            { q: "Are tickets refundable?", a: "Tickets are non-refundable but can be transferred to another person up to 48 hours before the event." },
                            { q: "Is there an age limit?", a: "Children under 5 enter free for the festival grounds. Everyone needs a ticket for the stadium match." },
                            { q: "Do you offer group discounts?", a: "Yes, for groups of 10 or more, please contact our sales team for special rates." }
                        ].map((faq, index) => (
                            <Card key={index} className="bg-black border-white/10">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-white text-lg mb-2">{faq.q}</h3>
                                    <p className="text-gray-400">{faq.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
