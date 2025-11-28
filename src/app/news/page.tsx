import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "News & Updates | Motherland 2025",
    description: "Latest news, announcements, and stories from the Motherland Football Tournament.",
}

const newsArticles = [
    {
        id: 1,
        slug: "motherland-cup-dates-announced",
        title: "Motherland Cup 2025 Dates Announced",
        excerpt: "The inaugural Motherland Cup: BAT Edition is set to take place in Lagos this December.",
        date: "Nov 25, 2025",
        author: "Press Team",
        category: "Announcement",
        image: "/images/news-1.jpg"
    },
    {
        id: 2,
        slug: "star-players-confirmed",
        title: "Global Stars Confirm Attendance",
        excerpt: "Top players from the Premier League and La Liga have confirmed their participation in the charity match.",
        date: "Nov 20, 2025",
        author: "Sports Desk",
        category: "Players",
        image: "/images/news-2.jpg"
    },
    {
        id: 3,
        slug: "business-summit-speakers",
        title: "Business Summit Keynote Speakers Revealed",
        excerpt: "Leading African entrepreneurs and policymakers will headline the Africa Business Summit.",
        date: "Nov 15, 2025",
        author: "Business Team",
        category: "Business",
        image: "/images/news-3.jpg"
    },
    {
        id: 4,
        slug: "lagos-host-city",
        title: "Lagos Ready to Host the World",
        excerpt: "The vibrant city of Lagos is preparing to welcome thousands of visitors for the festival.",
        date: "Nov 10, 2025",
        author: "Local Organizing Committee",
        category: "Venue",
        image: "/images/news-4.jpg"
    },
    {
        id: 5,
        slug: "charity-partnerships",
        title: "New Charity Partnerships Formed",
        excerpt: "Motherland 2025 partners with leading NGOs to support genocide victims across the continent.",
        date: "Nov 05, 2025",
        author: "Community Team",
        category: "Charity",
        image: "/images/news-5.jpg"
    },
    {
        id: 6,
        slug: "ticket-sales-open",
        title: "Early Bird Tickets Now Available",
        excerpt: "Secure your spot at the historic match with our limited time early bird offers.",
        date: "Nov 01, 2025",
        author: "Ticketing",
        category: "Tickets",
        image: "/images/news-6.jpg"
    }
]

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Latest <span className="text-gold-500">News</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stay updated with the latest announcements, stories, and insights from Motherland 2025.
                    </p>
                </div>

                {/* Categories - Placeholder for now */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["All", "Announcements", "Players", "Business", "Charity", "Venue"].map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${idx === 0
                                    ? "bg-gold-500 text-black"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <Link key={article.id} href={`/news/${article.slug}`} className="group">
                            <Card className="h-full border-white/10 bg-white/5 overflow-hidden hover:border-gold-500/50 transition-colors">
                                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                        <span className="font-display font-bold text-2xl opacity-20">MOTHERLAND</span>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {article.category}
                                    </div>
                                </div>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-gold-500" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3 text-gold-500" />
                                            {article.author}
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center text-gold-500 text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">
                        Load More Articles
                    </Button>
                </div>
            </div>
        </div>
    )
}
