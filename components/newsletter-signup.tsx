"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="flex items-center gap-2 text-green-600">
          <Check className="h-5 w-5" />
          <span>Thank you! You're now subscribed.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-border focus:ring-primary"
          />
          <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      <p className="text-xs text-muted-foreground mt-2">Get 10% off your first order when you sign up!</p>
    </div>
  )
}
