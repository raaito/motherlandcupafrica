import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Heart, Globe, Trophy, Target } from "lucide-react"

export const metadata: Metadata = {
    title: "About Us | Motherland 2025",
    description: "Learn about the vision, mission, and team behind the Motherland Football Tournament - uniting the African diaspora through sport.",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-hero">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                        Our <span className="text-gold-500">Story</span>
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Uniting the African diaspora through the beautiful game
                    </p>
                </div>
            </section>

            {/* Why Motherland Cup? */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                        Why <span className="text-gold-500">Motherland Cup?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <Card className="text-center hover:border-gold-500/50 transition-colors">
                            <CardHeader>
                                <Target className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                                <CardTitle className="text-2xl">Promoting Unity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 leading-relaxed">
                                    To foster a sense of belonging and unity among African nations and the diaspora through the shared passion for football.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:border-gold-500/50 transition-colors">
                            <CardHeader>
                                <Trophy className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                                <CardTitle className="text-2xl">Showcasing Talent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 leading-relaxed">
                                    To provide a platform for African players, both on the continent and abroad, to showcase their skills on a global stage.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:border-gold-500/50 transition-colors">
                            <CardHeader>
                                <Globe className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                                <CardTitle className="text-2xl">Enhancing the Festival</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 leading-relaxed">
                                    To add a dynamic sporting dimension to the week-long cultural and economic extravaganza called Motherland Festival 2025.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:border-gold-500/50 transition-colors">
                            <CardHeader>
                                <Heart className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                                <CardTitle className="text-2xl">Inspiring Youth</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300 leading-relaxed">
                                    To inspire the next generation of African footballers by bringing them closer to their heroes.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* The Charity Cause */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <Heart className="w-20 h-20 text-gold-500 mx-auto mb-6" />
                        <h2 className="font-display text-5xl font-bold text-white mb-4">
                            Supporting <span className="text-gold-500">Genocide Victims</span>
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            At Motherland 2025, we believe in using the power of sport to make a real difference.
                            A significant portion of our proceeds from the Charity Cup goes directly to supporting
                            victims of genocide and violent conflicts across Africa.
                        </p>
                        <p>
                            We partner with established humanitarian organizations to ensure funds reach those who
                            need them most, providing medical care, psychological support, education, and rebuilding assistance.
                        </p>
                        <Card variant="outlined" className="mt-8">
                            <CardContent className="pt-6">
                                <h3 className="font-bold text-white text-xl mb-4">Our Partner Organizations:</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• International Red Cross & Red Crescent</li>
                                    <li>• African Union Humanitarian Fund</li>
                                    <li>• Local NGOs in affected regions</li>
                                    <li>• Peace-building initiatives</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* A Landmark Tournament */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                        A Landmark <span className="text-gold-500">Tournament</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            The Motherland Cup 2025 is not just a competition; it is a celebration of our shared heritage and a testament to the unifying power of sports.
                        </p>
                        <p>
                            This inaugural edition, tagged the <span className="text-gold-500 font-bold">B.A.T EDITION</span>, sets the stage for what will become an annual tradition, rotating through different African nations and potentially expanding to include teams from the Caribbean, South America, and Europe in future editions.
                        </p>
                        <p>
                            By bringing together the best of African football talent from around the world, we are creating a unique platform for cultural exchange, economic growth, and global recognition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-5xl font-bold text-white mb-12 text-center">
                        Our <span className="text-gold-500">Values</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: Globe, title: "Unity", description: "Bringing the diaspora together" },
                            { icon: Trophy, title: "Excellence", description: "World-class tournament standards" },
                            { icon: Heart, title: "Compassion", description: "Supporting those in need" },
                            { icon: Target, title: "Impact", description: "Creating lasting change" }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <value.icon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                                <h3 className="font-display text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
