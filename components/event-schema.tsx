import Script from "next/script"

interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  image?: string
  url?: string
  organizer?: string
  offers?: {
    price?: string
    priceCurrency?: string
    availability?: string
  }
}

export default function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url = "https://theeatery.com/#events",
  organizer = "The Eatery",
  offers,
}: EventSchemaProps) {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate,
    location: {
      "@type": "Place",
      name: "The Eatery",
      address: {
        "@type": "PostalAddress",
        streetAddress: "55 Beach Street",
        addressLocality: "Westerly",
        addressRegion: "RI",
        postalCode: "02891",
        addressCountry: "US",
      },
    },
    image: image ? (image.startsWith("http") ? image : `https://theeatery.com${image}`) : undefined,
    url,
    organizer: {
      "@type": "Organization",
      name: organizer,
      url: "https://theeatery.com",
    },
    offers: offers
      ? {
          "@type": "Offer",
          price: offers.price,
          priceCurrency: offers.priceCurrency || "USD",
          availability: offers.availability || "https://schema.org/InStock",
          url: "https://theeatery.com/#events",
          validFrom: startDate,
        }
      : undefined,
  }

  return (
    <Script id={`event-schema-${name.toLowerCase().replace(/\s+/g, "-")}`} type="application/ld+json">
      {JSON.stringify(eventData)}
    </Script>
  )
}
