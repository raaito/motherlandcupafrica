import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="font-display text-2xl font-bold tracking-tighter text-white">
                                MOTHERLAND<span className="text-gold-500">2025</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Uniting the African diaspora through the beautiful game. One tournament. One heritage. One motherland.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Twitter} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Youtube} href="#" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/charity-cup">Charity Cup</FooterLink>
                            <FooterLink href="/main-tournament">Main Tournament</FooterLink>
                            <FooterLink href="/news">News & Updates</FooterLink>
                            <FooterLink href="/about">Our Mission</FooterLink>
                            <FooterLink href="/partners">Partners</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/contact">Contact Us</FooterLink>
                            <FooterLink href="/faq">FAQs</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and ticket releases.
                        </p>
                        <div className="mb-4">
                            <span className="text-gold-500 font-bold text-sm">December 15-21, 2025</span>
                        </div>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <Button variant="primary" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2025 Motherland Football Tournament. All rights reserved.</p>
                    <p>Designed with African Pride 🌍</p>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <Link href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all duration-300">
            <Icon size={20} />
        </Link>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                {children}
            </Link>
        </li>
    )
}
