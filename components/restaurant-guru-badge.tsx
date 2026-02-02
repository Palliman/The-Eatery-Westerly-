import Image from "next/image"

export default function RestaurantGuruBadge() {
  return (
    <a 
      href="https://restaurantguru.com/The-Eatery-Westerly" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-105"
      aria-label="The Eatery - Recommended on Restaurant Guru 2025"
    >
      <Image
        src="/images/restaurant-guru-badge.png"
        alt="Restaurant Guru Recommended 2025 - The Eatery"
        width={180}
        height={180}
        className="drop-shadow-md"
      />
    </a>
  )
}
