import { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Trophy, Globe, Briefcase, Users, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Main Tournament | Motherland 2025",
    description: "The main event: A continental showcase of African football excellence. May-June 2025.",
}

export default function MainTournamentPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-8">
                        <Globe className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold text-sm">The Continental Showpiece</span>
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 uppercase">
                        Motherland <span className="text-gold-500">2025</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-white/90 font-display mb-8">
                        May 23 - June 7, 2025
                    </p>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        16 Nations. 1 Champion. A celebration of African excellence in sports, culture, and commerce.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/main-tournament/register">
                            <Button size="lg" variant="primary" className="w-full md:w-auto">
                                Pre-Register Now
                            </Button>
                        </Link>
                        <Link href="/partners">
                            <Button size="lg" variant="outline" className="w-full md:w-auto">
                                Become a Partner
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tournament Format */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                                The <span className="text-gold-500">Format</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                The Motherland 2025 Main Tournament will feature 16 of the top African national teams, selected based on their performance and heritage.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Group Stage</h4>
                                        <p className="text-gray-400">4 Groups of 4 Teams. Top 2 advance.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <Trophy className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Knockout Phase</h4>
                                        <p className="text-gray-400">Quarter-finals, Semi-finals, and the Grand Final.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-gray-900 border-white/5">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-gold-500 mb-2">16</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Nations</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-white/5">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-gold-500 mb-2">32</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Matches</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-white/5">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-gold-500 mb-2">6</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Venues</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-white/5">
                                <CardContent className="pt-6 text-center">
                                    <div className="text-4xl font-bold text-gold-500 mb-2">1M+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">Fans</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Summit */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            Beyond <span className="text-gold-500">Football</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Motherland 2025 is more than a tournament. It's a convergence of sports, business, and culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-black border-white/10 hover:border-gold-500/30 transition-colors">
                            <CardHeader>
                                <Briefcase className="w-12 h-12 text-gold-500 mb-4" />
                                <CardTitle className="text-2xl">Africa Business Summit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 mb-6">
                                    A 3-day high-level summit bringing together political leaders, investors, and entrepreneurs to discuss the future of African commerce.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Investment Opportunities
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Tech & Innovation Expo
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Networking Galas
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/main-tournament/business-summit">
                                        <Button variant="outline" className="w-full">
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-black border-white/10 hover:border-gold-500/30 transition-colors">
                            <CardHeader>
                                <Globe className="w-12 h-12 text-gold-500 mb-4" />
                                <CardTitle className="text-2xl">Cultural Festival</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 mb-6">
                                    Experience the sights, sounds, and tastes of Africa. A celebration of our diverse heritage through music, art, and fashion.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Afrobeats Concerts
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Art Exhibitions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        Food Festival
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="https://motherland2025.com/" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="w-full">
                                            Visit Festival Site
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-gradient-to-t from-black to-gray-900 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                        Be Part of the <span className="text-gold-500">Legacy</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Registration for the Main Tournament tickets and summit passes will open soon.
                        Join the waitlist to get priority access.
                    </p>
                    <Link href="/main-tournament/register">
                        <Button size="lg" variant="primary" className="px-12 py-6 text-xl h-auto">
                            Join Waitlist
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
