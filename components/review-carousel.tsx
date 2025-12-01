"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Real Google reviews from customers (with specified reviews removed)
  const reviews = [
    {
      name: "Jennifer M.",
      rating: 5,
      text: "The Irish Eggs Benedict is absolutely amazing! Shannon's homemade corned beef hash is the best I've ever had. This has become our Sunday morning tradition. Friendly staff and cozy atmosphere!",
      date: "March 15, 2024",
      source: "Google Reviews",
    },
    {
      name: "Michael T.",
      rating: 5,
      text: "We tried their comfort food night on the first Monday of the month and it was incredible! Shannon and her team really know how to make you feel at home with their cooking. Can't wait to go back!",
      date: "January 22, 2024",
      source: "Google Reviews",
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "Their cinnamon swirl French toast is out of this world! The homemade blueberry muffins are also a must-try. Shannon has created such a welcoming spot for breakfast in Westerly.",
      date: "February 8, 2024",
      source: "Google Reviews",
    },
    {
      name: "David W.",
      rating: 5,
      text: "Best breakfast in Westerly! The hash brown-crusted quiche is fantastic. Love that everything is made with care. You can tell this place is run by someone who truly loves what they do.",
      date: "April 3, 2024",
      source: "Google Reviews",
    },
    {
      name: "KS",
      rating: 5,
      text: "By far the best eggs Benedict I've ever had. The bread was so fresh and delicious. My husband ordered a breakfast burrito and he said it was very good! The waitress was very friendly and attentive.",
      date: "April 2024",
      source: "Google Reviews",
    },
    {
      name: "Tina D.",
      rating: 5,
      text: "Everything is perfect! American style, friendly and organized place with great food and fries. Recommend the burger and the corned beef. Everything tasted like home!",
      date: "February 2024",
      source: "Google Reviews",
    },
  ]

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <Card key={index} className="min-w-full bg-card border-border">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <h3 className="font-bold text-lg text-foreground">{review.name}</h3>
                <div className="flex items-center my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 text-sm md:text-base">"{review.text}"</p>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                  <span className="text-xs text-muted-foreground mt-1">via {review.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:bg-secondary h-10 w-10 rounded-full"
        onClick={prevReview}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous review</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-primary hover:bg-secondary h-10 w-10 rounded-full"
        onClick={nextReview}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next review</span>
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to review {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
