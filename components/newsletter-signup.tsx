"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Send } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className={`border-0 shadow-lg bg-blush-50 ${className}`}>
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-coral-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Welcome to our community!</h3>
          <p className="text-slate-600">
            Thank you for subscribing. You'll receive our latest updates, inspirational content, and community news.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`bg-blush-50 rounded-lg p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="h-6 w-6 text-coral-600" />
          <h3 className="text-lg font-semibold text-slate-900">Stay Connected</h3>
        </div>
        <p className="text-slate-600 mb-4 text-sm">
          Get weekly encouragement and ministry updates delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            disabled={isSubmitting}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full bg-powder-500 hover:bg-powder-600 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isSubmitting}
          />
          <Button type="submit" className="bg-white text-coral-600 hover:bg-coral-50 px-6" disabled={isSubmitting}>
            {isSubmitting ? <Send className="h-4 w-4 animate-pulse" /> : "Subscribe"}
          </Button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    )
  }

  return (
    <Card className={`border-0 shadow-lg bg-gradient-to-br from-blush-50 to-powder-50 ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-coral-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay Connected</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Join our newsletter to receive weekly encouragement, ministry updates, event announcements, and inspirational
          content delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-center"
            disabled={isSubmitting}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-coral-500 hover:bg-coral-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
        <p className="text-xs text-slate-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </CardContent>
    </Card>
  )
}
