"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const events = [
  {
    title: "Monthly Comfort Food Night",
    description:
      "Join us for our popular comfort food nights! We offer a choice of three different meals, typically our favorite comfort foods. Each meal can be complemented with an optional salad or dessert. Pre-orders recommended!",
    timing: "First of each month",
    image: "/images/comfort-food-fireplace.png",
    alt: "Comfort food dishes including meatloaf, ribs, and lasagna by the fireplace",
    category: "Monthly Special",
    link: "tel:+14013150777",
    linkText: "Call to Pre-order",
    status: "Monthly Special",
  },
  {
    title: "Fish & Chips Fridays",
    description:
      "Enjoy our signature Fish & Chips, made with premium Atlantic haddock in a crispy batter. Served with hand-cut fries, house-made tartar sauce, and coleslaw. A true Friday tradition!",
    timing: "Every Friday, 11 AM - 2 PM & 4 PM - 7 PM",
    image: "/images/fish-chips-friday.png",
    alt: "Delicious platter of Fish and Chips, a Friday special at The Eatery",
    category: "Weekly Special",
    link: "/#menu?category=dinner",
    linkText: "View Menu",
  },
  {
    title: "To-Go Station Launch",
    description:
      "Exciting news! We're working on a brand new dedicated To-Go Station for quick and easy pick-ups of your favorite Eatery meals. Stay tuned for the official launch date!",
    timing: "Coming Soon!",
    image: null,
    alt: "Concept image for The Eatery's new to-go station",
    category: "New Feature",
    status: "Coming Soon",
  },
]

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <Card key={index} className="min-w-full bg-card border-border relative">
              {event.status && (
                <Badge variant="secondary" className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">
                  {event.status}
                </Badge>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Event Image */}
                {event.image && (
                  <div className="relative h-[300px] md:h-[400px] bg-muted">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.alt}
                      fill
                      className="object-contain rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Event Content */}
                <CardContent className={`p-6 flex flex-col justify-center ${!event.image ? "md:col-span-2" : ""}`}>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">{event.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.timing}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">{event.description}</p>
                  {event.link && event.linkText && (
                    <Button
                      asChild
                      className="mt-auto w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link href={event.link}>{event.linkText}</Link>
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-primary hover:bg-secondary h-10 w-10 rounded-full bg-background/50 hover:bg-background/80"
        onClick={prevEvent}
        aria-label="Previous event"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-primary hover:bg-secondary h-10 w-10 rounded-full bg-background/50 hover:bg-background/80"
        onClick={nextEvent}
        aria-label="Next event"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary scale-125" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
