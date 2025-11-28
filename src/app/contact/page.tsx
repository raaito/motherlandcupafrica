"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        setIsSuccess(true)
    }

    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Get in <span className="text-gold-500">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions about the tournament, tickets, or partnerships? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 lg:col-span-1">
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                                        <p className="text-gray-400 text-sm mb-2">General Inquiries:</p>
                                        <a href="mailto:info@motherland2025.com" className="text-gold-500 hover:underline block">info@motherland2025.com</a>
                                        <p className="text-gray-400 text-sm mt-4 mb-2">Partnerships:</p>
                                        <a href="mailto:partners@motherland2025.com" className="text-gold-500 hover:underline block">partners@motherland2025.com</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Visit Us</h3>
                                        <p className="text-gray-400">
                                            Motherland Festival HQ<br />
                                            Victoria Island<br />
                                            Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Call Us</h3>
                                        <p className="text-gray-400 mb-2">Mon-Fri from 9am to 5pm WAT</p>
                                        <a href="tel:+2348000000000" className="text-gold-500 hover:underline">+234 800 000 0000</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white/5 border-white/10 h-full">
                            <CardContent className="pt-8">
                                {isSuccess ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-gold-500" />
                                        </div>
                                        <h3 className="font-display text-3xl font-bold text-white mb-4">Message Sent!</h3>
                                        <p className="text-gray-300 mb-8 max-w-md">
                                            Thank you for reaching out. Our team will get back to you as soon as possible.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Name</label>
                                                <Input required placeholder="Your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Email</label>
                                                <Input required type="email" placeholder="Your email" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Subject</label>
                                            <Input required placeholder="What is this regarding?" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Message</label>
                                            <Textarea required placeholder="How can we help you?" className="min-h-[200px]" />
                                        </div>

                                        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
