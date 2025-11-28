"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

const newsArticles = [
    {
        title: "Victor Osimhen Confirmed for Charity Cup",
        excerpt: "Nigeria's star striker joins the lineup for the historic December event in Lagos.",
        date: "Nov 20, 2025",
        category: "Player News",
        image: "/images/news-1.jpg",
        featured: true
    },
    {
        title: "Festival Schedule Announced",
        excerpt: "Two days of culture, music, and celebration before the big match.",
        date: "Nov 18, 2025",
        category: "Event",
        image: "/images/news-2.jpg"
    },
    {
        title: "Tickets Go On Sale Next Week",
        excerpt: "All tier options will be available starting December 1st.",
        date: "Nov 15, 2025",
        category: "Tickets",
        image: "/images/news-3.jpg"
    },
    {
        title: "Motherland 2025 Nations Revealed",
        excerpt: "Over 50 countries to compete in the main tournament next year.",
        date: "Nov 10, 2025",
        category: "Tournament",
        image: "/images/news-4.jpg"
    }
]

export function NewsSection() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                            Latest <span className="text-gold-500">News</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            Stay updated with the latest announcements and stories.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/news" className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500 relative text-gray-300">
                            View All <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsArticles.map((article, index) => (
                        <Link
                            key={index}
                            href={`/news/${article.title.toLowerCase().replace(/ /g, '-')}`}
                            className={`group relative overflow-hidden rounded-lg bg-gray-900 border border-white/10 hover:border-gold-500/50 transition-all duration-300 ${article.featured && index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                        >
                            <div className={`relative ${article.featured && index === 0 ? 'h-[500px]' : 'h-[300px]'} overflow-hidden`}>
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600 group-hover:scale-110 transition-transform duration-500">
                                    News Image {index + 1}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-gold-500 text-xs font-bold tracking-wider uppercase">{article.category}</span>
                                        <span className="text-gray-500 text-xs">•</span>
                                        <span className="text-gray-400 text-xs">{article.date}</span>
                                    </div>
                                    <h3 className={`font-display font-bold text-white mb-2 ${article.featured && index === 0 ? 'text-3xl' : 'text-xl'}`}>
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>

                                    <div className="mt-4 flex items-center text-gold-500 text-sm font-bold group-hover:gap-2 transition-all">
                                        Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden text-center mt-8">
                    <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500 relative text-gray-300">
                        View All News <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
