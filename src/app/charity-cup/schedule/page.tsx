import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Calendar, MapPin, Clock, Users, Trophy, Music } from "lucide-react"

export const metadata: Metadata = {
    title: "Event Schedule | Motherland Cup 2025",
    description: "Full schedule for the Motherland Cup 2025, BAT Edition - December 15-21 in Lagos & Abuja.",
}

type Event = {
    time: string
    title: string
    description?: string
    icon: any
    type: string
    highlight?: boolean
}

type DaySchedule = {
    day: string
    date: string
    events: Event[]
}

const scheduleData: DaySchedule[] = [
    {
        day: "Day 1-2",
        date: "Dec 15-16, 2025",
        events: [
            { time: "All Day", title: "Arrivals & Welcome", description: "Delegates and teams arrive in Lagos & Abuja", icon: Users, type: "festival" },
            { time: "6:00 PM", title: "Welcome Cocktail", description: "Networking for stakeholders and VIPs", icon: Music, type: "festival" },
        ]
    },
    {
        day: "Day 3",
        date: "Wednesday, Dec 17, 2025",
        events: [
            { time: "7:00 PM", title: "Motherland Awards", description: "Celebrating diaspora excellence at State Banquet Hall, Aso Villa, Abuja", icon: Trophy, type: "festival", highlight: true },
        ]
    },
    {
        day: "Day 4-6",
        date: "Dec 18-20, 2025",
        events: [
            { time: "10:00 AM", title: "Cultural Festival & Expo", description: "Cultural displays, tracks, and business roundtables", icon: Users, type: "festival" },
            { time: "4:00 PM", title: "Motherland Cup Matches", description: "Group stages and semi-finals", icon: Trophy, type: "match" },
        ]
    },
    {
        day: "Day 7",
        date: "Sunday, Dec 21, 2025",
        events: [
            { time: "4:00 PM", title: "Motherland Cup Final", description: "The grand finale match", icon: Trophy, type: "match", highlight: true },
            { time: "8:00 PM", title: "Afrobeats Concert", description: "Closing concert featuring top artists", icon: Music, type: "festival", highlight: true },
        ]
    }
]

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16">
                <div className="absolute inset-0 bg-black/50 z-0" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-6">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold">December 15-21, 2025</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
                        Event <span className="text-gold-500">Schedule</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                        Three days of football, culture, and celebration
                    </p>

                    <div className="flex items-center justify-center gap-2 text-gray-300">
                        <MapPin className="w-5 h-5 text-gold-500" />
                        <span>Lagos International Stadium, Nigeria</span>
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-16">
                        {scheduleData.map((day, dayIndex) => (
                            <div key={dayIndex}>
                                {/* Day Header */}
                                <div className="mb-8">
                                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                                        {day.day}
                                    </h2>
                                    <p className="text-xl text-gold-500">{day.date}</p>
                                </div>

                                {/* Events */}
                                <div className="space-y-4">
                                    {day.events.map((event, eventIndex) => (
                                        <Card
                                            key={eventIndex}
                                            variant={event.highlight ? "outlined" : "default"}
                                            className={`${event.highlight ? 'border-gold-500' : ''} hover:border-gold-500/50 transition-colors`}
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                                    {/* Time */}
                                                    <div className="flex items-center gap-3 md:min-w-[140px]">
                                                        <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                                        <span className="font-bold text-gold-500 text-lg">{event.time}</span>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="hidden md:block">
                                                        <event.icon className={`w-8 h-8 ${event.highlight ? 'text-gold-500' : 'text-gray-500'}`} />
                                                    </div>

                                                    {/* Details */}
                                                    <div className="flex-1">
                                                        <h3 className={`font-display text-xl font-bold mb-1 ${event.highlight ? 'text-gold-500' : 'text-white'}`}>
                                                            {event.title}
                                                        </h3>
                                                        {event.description && (
                                                            <p className="text-gray-400">{event.description}</p>
                                                        )}
                                                    </div>

                                                    {/* Type Badge */}
                                                    <div className="md:ml-auto">
                                                        <span className={`inline-block px-5 py-1 rounded-full text-xs font-bold uppercase ${event.type === 'match'
                                                            ? 'bg-gold-500/20 text-gold-500'
                                                            : event.type === 'football'
                                                                ? 'bg-green-500/20 text-green-500'
                                                                : 'bg-blue-500/20 text-blue-500'
                                                            }`}>
                                                            {event.type === 'match' ? 'Main Event' : event.type === 'football' ? 'Football' : 'Festival'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Info */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        Important <span className="text-gold-500">Information</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-gold-500" />
                                    Venue Access
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400 text-sm">
                                <ul className="space-y-2">
                                    <li>• Festival (Dec 18-19): Open grounds around stadium</li>
                                    <li>• Match Day (Dec 20): Ticketed stadium entry</li>
                                    <li>• VIP/VVIP: Separate entrance and lounge access</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-gold-500" />
                                    What to Bring
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400 text-sm">
                                <ul className="space-y-2">
                                    <li>• Valid ID and ticket (digital or printed)</li>
                                    <li>• Comfortable clothing for outdoor activities</li>
                                    <li>• Sunscreen and hat for daytime events</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-gold-500" />
                                    Timing Notes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400 text-sm">
                                <ul className="space-y-2">
                                    <li>• All times are in West Africa Time (WAT)</li>
                                    <li>• Schedule subject to minor changes</li>
                                    <li>• Arrive 30 mins early for main match</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-gold-500" />
                                    Prohibited Items
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400 text-sm">
                                <ul className="space-y-2">
                                    <li>• Outside food and beverages</li>
                                    <li>• Professional cameras without permit</li>
                                    <li>• Weapons, fireworks, or flares</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-green-900 to-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Join <span className="text-gold-500">Us?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Secure your spot for this historic three-day celebration
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/charity-cup/tickets"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-gradient-cta text-black font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
                        >
                            Get Tickets
                        </Link>
                        <Link
                            href="/charity-cup"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer h-12 px-8 bg-transparent border-2 border-white/20 text-white hover:border-gold-500 hover:text-gold-500"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
