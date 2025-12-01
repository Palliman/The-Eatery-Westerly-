import Script from "next/script"

interface ReviewSchemaProps {
  author: string
  reviewBody: string
  ratingValue: string
  datePublished: string
}

export default function ReviewSchema({ author, reviewBody, ratingValue, datePublished }: ReviewSchemaProps) {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Restaurant",
      name: "The Eatery",
      image: "https://theeatery.com/eatery-exterior.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "55 Beach Street",
        addressLocality: "Westerly",
        addressRegion: "RI",
        postalCode: "02891",
        addressCountry: "US",
      },
      telephone: "+14013150777",
      url: "https://theeatery.com",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    reviewBody,
  }

  return (
    <Script id={`review-schema-${author.toLowerCase().replace(/\s+/g, "-")}`} type="application/ld+json">
      {JSON.stringify(reviewData)}
    </Script>
  )
}
