"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function RegistrationPage() {
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

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <Card className="max-w-md w-full text-center border-gold-500/30 bg-gold-500/5">
                    <CardContent className="pt-12 pb-12">
                        <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10 text-gold-500" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-white mb-4">
                            You're on the list!
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Thank you for registering your interest in Motherland 2025. We'll keep you updated with the latest news and ticket releases.
                        </p>
                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                            Register Another Person
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
                        Join the <span className="text-gold-500">Waitlist</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Be the first to know when tickets and packages become available for the Main Tournament.
                    </p>
                </div>

                <Card className="border-white/10 bg-white/5">
                    <CardHeader>
                        <CardTitle>Registration Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">First Name</label>
                                    <Input required placeholder="Enter your first name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                                    <Input required placeholder="Enter your last name" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <Input required type="email" placeholder="Enter your email" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Country of Residence</label>
                                <Input required placeholder="e.g. Nigeria, UK, USA" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">I am interested in...</label>
                                <Select
                                    options={[
                                        { label: "Match Tickets", value: "tickets" },
                                        { label: "Business Summit", value: "business" },
                                        { label: "Sponsorship", value: "sponsorship" },
                                        { label: "Volunteering", value: "volunteer" },
                                        { label: "Press/Media", value: "media" }
                                    ]}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message (Optional)</label>
                                <Textarea placeholder="Tell us more about your interest..." />
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="newsletter" className="rounded border-gray-600 bg-gray-700 text-gold-500 focus:ring-gold-500" />
                                <label htmlFor="newsletter" className="text-sm text-gray-300">
                                    Subscribe to our newsletter for updates
                                </label>
                            </div>

                            <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Registration"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
