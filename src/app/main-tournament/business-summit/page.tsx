import { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Briefcase, Users, TrendingUp, Calendar, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Africa Business Summit | Motherland 2025",
    description: "Connect with global leaders and investors at the Motherland 2025 Africa Business Summit.",
}

export default function BusinessSummitPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/main-tournament" className="inline-flex items-center text-gray-400 hover:text-gold-500 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Main Tournament
                </Link>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-8">
                        <Briefcase className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold text-sm">The Economic Engine</span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Africa Business <span className="text-gold-500">Summit</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A 3-day high-level gathering bringing together political leaders, investors, and entrepreneurs to discuss the future of African commerce.
                    </p>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                    <Card className="bg-white/5 border-white/10 text-center">
                        <CardContent className="pt-8">
                            <Calendar className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                            <h3 className="font-bold text-white text-lg mb-2">Date</h3>
                            <p className="text-gray-400">May 25-27, 2025</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10 text-center">
                        <CardContent className="pt-8">
                            <MapPin className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                            <h3 className="font-bold text-white text-lg mb-2">Venue</h3>
                            <p className="text-gray-400">Eko Convention Center, Lagos</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10 text-center">
                        <CardContent className="pt-8">
                            <Users className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                            <h3 className="font-bold text-white text-lg mb-2">Attendees</h3>
                            <p className="text-gray-400">5,000+ Global Delegates</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Agenda Highlights */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Summit <span className="text-gold-500">Highlights</span>
                    </h2>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors">
                            <div className="w-16 h-16 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-8 h-8 text-gold-500" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold text-white mb-2">Investment Forum</h3>
                                <p className="text-gray-300 mb-4">
                                    Connecting African startups and SMEs with global venture capital and angel investors. Pitch competitions, deal rooms, and networking sessions.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors">
                            <div className="w-16 h-16 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <Users className="w-8 h-8 text-gold-500" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold text-white mb-2">Policy Roundtable</h3>
                                <p className="text-gray-300 mb-4">
                                    Discussions between government officials and private sector leaders on improving the ease of doing business and fostering cross-border trade.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors">
                            <div className="w-16 h-16 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                <Briefcase className="w-8 h-8 text-gold-500" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl font-bold text-white mb-2">Tech & Innovation Expo</h3>
                                <p className="text-gray-300 mb-4">
                                    Showcasing the latest technological advancements from across the continent, from fintech to agritech and renewable energy solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="font-display text-3xl font-bold text-white mb-6">
                        Secure Your Pass
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Registration for the Africa Business Summit is now open. Early bird rates apply for a limited time.
                    </p>
                    <Link href="/main-tournament/register">
                        <Button size="lg" variant="primary" className="px-12 py-6 text-xl h-auto">
                            Register Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
