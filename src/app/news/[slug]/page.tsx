import { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { Calendar, User, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Article | Motherland 2025",
    description: "Read the latest news from Motherland 2025.",
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <article className="container mx-auto px-4 max-w-4xl">
                <Link href="/news" className="inline-flex items-center text-gray-400 hover:text-gold-500 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to News
                </Link>

                <header className="mb-12 text-center">
                    <div className="inline-block bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-6">
                        Announcement
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Motherland Cup 2025 Dates Announced
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold-500" />
                            Nov 25, 2025
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gold-500" />
                            Press Team
                        </div>
                    </div>
                </header>

                <div className="aspect-video bg-gray-800 rounded-2xl mb-12 relative overflow-hidden">
                    {/* Placeholder for hero image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        <span className="font-display font-bold text-4xl opacity-20">ARTICLE IMAGE</span>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-white font-medium mb-8">
                        The organizing committee of the Motherland 2025 Football Tournament is thrilled to announce the official dates for the inaugural Motherland Cup: BAT Edition.
                    </p>
                    <p>
                        Scheduled to take place from <strong>December 15th to December 21st, 2025</strong>, this historic event will be hosted in the vibrant city of Lagos, Nigeria. The tournament aims to bring together the African diaspora through the universal language of football, celebrating our shared heritage and fostering unity.
                    </p>
                    <h2 className="text-white font-display font-bold mt-12 mb-6">A Week of Celebration</h2>
                    <p>
                        The week-long festival will not only feature world-class football but also a series of cultural and economic events designed to showcase the best of Africa. From the "Motherland Awards" honoring excellence in the diaspora to the "Afrobeats Concert" closing the festivities, there is something for everyone.
                    </p>
                    <blockquote className="border-l-4 border-gold-500 pl-6 italic text-white my-8">
                        "This is more than just a game. It is a homecoming. It is a statement to the world that Africa is rising, united and strong." - Festival Director
                    </blockquote>
                    <h2 className="text-white font-display font-bold mt-12 mb-6">Get Your Tickets</h2>
                    <p>
                        Tickets for the Charity Cup match and the festival events will go on sale shortly. Fans are encouraged to register for the waitlist to receive priority access and exclusive updates.
                    </p>
                    <p>
                        Stay tuned for more announcements regarding participating players, musical acts, and special guests in the coming weeks.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        Share this article:
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    )
}
