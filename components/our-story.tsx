import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export default function OurStory() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About the Owner</h2>
        <p className="text-muted-foreground mb-4">
          Shannon Holdredge, the heart and soul behind The Eatery in Westerly, Rhode Island, has poured over 25 years of
          restaurant experience into creating a warm, community-focused dining spot. Since opening The Eatery in July
          2023, Shannon has turned the former Beach Street café into a beloved local fixture known for its all-day
          breakfast, delicious home fries, and homemade muffins.
        </p>
        <p className="text-muted-foreground mb-4">
          Shannon's journey in the hospitality world started at just 14 years old. She's done it all—from 15 years at a
          college Subway to stints at exclusive spots like The Preserve. She even spent time working at Electric Boat,
          gaining a whole new set of skills before returning to her true passion.
        </p>
        <p className="text-muted-foreground mb-4">
          What sets Shannon apart is her hands-on approach. She manages everything from front-of-house smiles to
          back-of-house prep, all with a genuine love for the food she serves—especially her famous fish and chips. The
          Eatery isn't just a business for her; it's a family affair, with her children and even her husband playing key
          roles. Looking ahead, Shannon dreams of expanding into a summer food truck and adding grab-and-go options, all
          while keeping that close-knit, neighborhood feel.
        </p>
        <p className="text-muted-foreground mb-6">
          In short, Shannon Holdredge is the driving force of The Eatery, blending decades of experience, a passion for
          hospitality, and a vision for the future—all in one delicious destination.
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
          <Button variant="outline" className="border-primary text-primary hover:bg-secondary bg-transparent" asChild>
            <Link
              href="https://marquistopbusiness.com/2025/11/shannon-holdredge/?utm_campaign=as-npt116018533"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Shannon Holdredge Marquis Profile
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
