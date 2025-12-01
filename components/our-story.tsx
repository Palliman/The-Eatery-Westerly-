import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export default function OurStory() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Story</h2>
        <p className="text-muted-foreground mb-4">
          The Eatery opened in July 2023 in the heart of Westerly, bringing a warm and welcoming spot for the community
          to enjoy a hearty breakfast with family. Owner Shannon Holdredge, who has worked in the restaurant business
          all her life, took over the former Beach Street cafe from Steve Burns, who had owned the establishment for
          eleven years.
        </p>
        <p className="text-muted-foreground mb-6">
          Having grown up in Westerly, Shannon knew this was the perfect place to realize her dream of owning a
          breakfast spot. Our extensive menu features sweet and savory classics including Irish eggs benedict, cinnamon
          swirl French toast, hash brown-crusted quiche, and homemade muffins. We're also known for our delicious home
          fries and corned beef hash. Shannon's hope is to create such a bond with her customers that her legacy can be
          passed on to her seven children and four grandchildren.
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">100+ 5-star reviews on Google</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="#menu">View Our Menu</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-secondary" asChild>
            <Link href="https://www.rimonthly.com/the-eatery-westerly/" target="_blank" rel="noopener noreferrer">
              Read Full Story
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/fresh-muffins.png"
          alt="Freshly baked blueberry muffins at The Eatery"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
