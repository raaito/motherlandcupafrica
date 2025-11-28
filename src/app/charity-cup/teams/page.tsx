import { Metadata } from "next"
import { Users, Shirt } from "lucide-react"
import { TiltCard } from "@/components/ui/TiltCard"

export const metadata: Metadata = {
    title: "The Teams | Motherland Cup 2025",
    description: "Meet the legends representing Team Africa and Team Diaspora in the historic Motherland Cup match.",
}

const teams = [
    {
        id: "africa",
        name: "Team Africa",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/20",
        captain: "Victor Osimhen",
        coach: "Pitso Mosimane",
        startingXI: [
            { name: "Victor Osimhen", country: "Nigeria", position: "Forward", number: 9 },
            { name: "Mohamed Salah", country: "Egypt", position: "Forward", number: 11 },
            { name: "Sadio Mané", country: "Senegal", position: "Forward", number: 10 },
            { name: "Thomas Partey", country: "Ghana", position: "Midfielder", number: 5 },
            { name: "Wilfred Ndidi", country: "Nigeria", position: "Midfielder", number: 4 },
            { name: "Franck Kessié", country: "Ivory Coast", position: "Midfielder", number: 8 },
            { name: "Achraf Hakimi", country: "Morocco", position: "Defender", number: 2 },
            { name: "Kalidou Koulibaly", country: "Senegal", position: "Defender", number: 3 },
            { name: "Edmond Tapsoba", country: "Burkina Faso", position: "Defender", number: 6 },
            { name: "Reinildo Mandava", country: "Mozambique", position: "Defender", number: 12 },
            { name: "André Onana", country: "Cameroon", position: "Goalkeeper", number: 1 },
        ],
        reserves: [
            { name: "Riyad Mahrez", country: "Algeria", position: "Forward", number: 7 },
            { name: "Yves Bissouma", country: "Mali", position: "Midfielder", number: 14 },
            { name: "Chancel Mbemba", country: "DR Congo", position: "Defender", number: 15 },
            { name: "Mohammed Kudus", country: "Ghana", position: "Midfielder", number: 20 },
            { name: "Serhou Guirassy", country: "Guinea", position: "Forward", number: 19 },
        ]
    },
    {
        id: "diaspora",
        name: "Team Diaspora",
        color: "text-gold-500",
        bgColor: "bg-gold-500/10",
        borderColor: "border-gold-500/20",
        captain: "Bukayo Saka",
        coach: "Patrick Vieira",
        startingXI: [
            { name: "Bukayo Saka", country: "UK/Nigeria", position: "Forward", number: 7 },
            { name: "Kylian Mbappé", country: "France/Cameroon", position: "Forward", number: 10 },
            { name: "Rafael Leão", country: "Portugal/Angola", position: "Forward", number: 11 },
            { name: "Jude Bellingham", country: "UK/Africa", position: "Midfielder", number: 5 },
            { name: "Aurélien Tchouaméni", country: "France/Cameroon", position: "Midfielder", number: 8 },
            { name: "Eduardo Camavinga", country: "France/Angola", position: "Midfielder", number: 6 },
            { name: "Alphonso Davies", country: "Canada/Liberia", position: "Defender", number: 19 },
            { name: "David Alaba", country: "Austria/Nigeria", position: "Defender", number: 4 },
            { name: "Antonio Rüdiger", country: "Germany/Sierra Leone", position: "Defender", number: 2 },
            { name: "Reece James", country: "UK/Grenada", position: "Defender", number: 24 },
            { name: "Mike Maignan", country: "France/Guadeloupe", position: "Goalkeeper", number: 16 },
        ],
        reserves: [
            { name: "Marcus Rashford", country: "UK/St Kitts", position: "Forward", number: 10 },
            { name: "Leroy Sané", country: "Germany/Senegal", position: "Forward", number: 19 },
            { name: "William Saliba", country: "France/Cameroon", position: "Defender", number: 12 },
            { name: "Cody Gakpo", country: "Netherlands/Togo", position: "Forward", number: 11 },
            { name: "Jeremy Doku", country: "Belgium/Ghana", position: "Forward", number: 21 },
        ]
    }
]

export default function TeamsPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16">
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 rounded-full px-6 py-2 mb-6">
                        <Users className="w-4 h-4 text-gold-500" />
                        <span className="text-gold-500 font-bold">The Squads</span>
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Meet the <span className="text-gold-500">Legends</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Two star-studded teams. One historic match.
                        Witness the greatest gathering of African football talent.
                    </p>
                </div>
            </section>

            {/* Teams Display */}
            <div className="container mx-auto px-4 py-20">
                <div className="space-y-32">
                    {teams.map((team) => (
                        <section key={team.id} className="relative">
                            {/* Team Header */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                                <div>
                                    <h2 className={`font-display text-5xl md:text-6xl font-bold mb-2 ${team.color}`}>
                                        {team.name}
                                    </h2>
                                    <div className="flex items-center gap-6 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">Coach:</span> {team.coach}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">Captain:</span> {team.captain}
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-6 py-3 rounded-lg border ${team.borderColor} ${team.bgColor}`}>
                                    <span className={`font-display font-bold text-xl ${team.color}`}>
                                        STARTING XI
                                    </span>
                                </div>
                            </div>

                            {/* Starting XI Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {team.startingXI.map((player, idx) => (
                                    <TiltCard key={idx} className="group">
                                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                                            {/* Placeholder for player image */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                                                <Users className="w-20 h-20 opacity-20" />
                                            </div>

                                            {/* Player Info Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                                <div className="flex items-end justify-between mb-2">
                                                    <span className={`text-5xl font-display font-bold opacity-20 ${team.color}`}>
                                                        {player.number}
                                                    </span>
                                                    <Shirt className={`w-6 h-6 ${team.color}`} />
                                                </div>
                                                <h3 className="font-display text-2xl font-bold text-white leading-none mb-1">
                                                    {player.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <span className="text-gold-500">{player.position}</span>
                                                    <span>•</span>
                                                    <span>{player.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>

                            {/* Reserves Section */}
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-gray-400" />
                                    Reserves & Substitutes
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {team.reserves.map((player, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-gold-500/30 transition-colors">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${team.bgColor} ${team.color}`}>
                                                {player.number}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">{player.name}</h4>
                                                <div className="text-xs text-gray-400 flex gap-2">
                                                    <span>{player.position}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <span>{player.country}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}
