import Script from "next/script"

export default function StructuredData() {
  // Enhanced restaurant/local business data with more complete information
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://theeatery.com/#restaurant",
    name: "The Eatery",
    alternateName: "The Eatery 55",
    description:
      "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Known for breakfast favorites like Irish Eggs Benedict, cinnamon swirl French toast, hash brown-crusted quiche, and homemade muffins.",
    url: "https://theeatery.com",
    telephone: "+14013150777",
    email: "theeaterywesterly@gmail.com",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    logo: "https://theeatery.com/the-eatery-logo.png",
    image: [
      "https://theeatery.com/eatery-exterior.png",
      "https://theeatery.com/eatery-interior.png",
      "https://theeatery.com/fresh-muffins.png",
    ],
    photo: [
      {
        "@type": "ImageObject",
        contentUrl: "https://theeatery.com/eatery-exterior.png",
        name: "The Eatery exterior with Fish & Chip Fridays sign",
      },
      {
        "@type": "ImageObject",
        contentUrl: "https://theeatery.com/eatery-interior.png",
        name: "Cozy interior waiting area with navy blue walls and The Eatery logo",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "55 Beach Street",
      addressLocality: "Westerly",
      addressRegion: "RI",
      postalCode: "02891",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3779,
      longitude: -71.8301,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.3779,
        longitude: -71.8301,
      },
      geoRadius: "15000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "20:00",
      },
    ],
    servesCuisine: ["American", "Breakfast", "Comfort Food"],
    menu: "https://theeatery.com/#menu",
    acceptsReservations: "Yes",
    founder: {
      "@type": "Person",
      name: "Shannon Holdredge",
    },
    foundingDate: "2023-07",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "55 Beach Street",
        addressLocality: "Westerly",
        addressRegion: "RI",
        postalCode: "02891",
        addressCountry: "US",
      },
    },
    hasMenu: {
      "@type": "Menu",
      name: "Restaurant Menu",
      description: "Our full menu featuring breakfast, lunch, dinner, and dessert options",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Breakfast",
          description: "Served all day",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Irish Eggs Benedict",
              description: "Poached Eggs on Corned Beef Hash, Hollandaise",
              offers: {
                "@type": "Offer",
                price: "13.99",
                priceCurrency: "USD",
              },
            },
            {
              "@type": "MenuItem",
              name: "Shannon's Kitchen Table",
              description: "2 Eggs, 2 Pancakes, 2 Bacon, 2 Sausage, Homefries",
              offers: {
                "@type": "Offer",
                price: "14.99",
                priceCurrency: "USD",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Lunch",
          description: "Served from 11am",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Turkey Club",
              description: "Served with chips & pickle",
              offers: {
                "@type": "Offer",
                price: "14.99",
                priceCurrency: "USD",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Dinner",
          description: "Friday Fish & Chips special",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Fish & Chips",
              description: "Premium crispy-battered Atlantic haddock with tartar sauce and fries",
              offers: {
                "@type": "Offer",
                price: "15.99",
                priceCurrency: "USD",
              },
            },
            {
              "@type": "MenuItem",
              name: "Whole Belly Clams",
              description:
                "Premium whole belly clams lightly breaded and fried to a golden crisp, served with fries, tartar sauce, and coleslaw",
              offers: {
                "@type": "Offer",
                price: "27.99",
                priceCurrency: "USD",
              },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Dessert",
          description: "Sweet treats to finish your meal",
          hasMenuItem: [],
        },
      ],
    },
    specialEvents: [
      {
        "@type": "Event",
        name: "Monthly Comfort Food Night",
        description:
          "Join us for our popular comfort food nights where we offer a choice of three different meals, typically chosen as our favorite comfort foods. Each meal can be complemented with an optional salad or dessert for a complete dining experience. Pre-orders are recommended.",
        startDate: "2025-07-07T16:00", // Example: First Monday of July 2025, adjust as needed or use eventSchedule for recurrence
        endDate: "2025-07-07T19:00", // Example: First Monday of July 2025
        eventSchedule: {
          // Indicates recurrence
          "@type": "Schedule",
          repeatFrequency: "P1M", // Repeats monthly
          byDay: "1MO", // First Monday of the month
          startTime: "16:00",
          endTime: "19:00",
        },
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
        image: "https://theeatery.com/family-style-dinner.png",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/LimitedAvailability",
          description: "Pre-orders recommended. Call (401) 315-0777.",
        },
      },
      {
        "@type": "Event",
        name: "Fish & Chips Fridays",
        description: "Enjoy our signature Fish & Chips, made with premium Atlantic haddock. A Friday tradition!",
        eventSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W", // Repeats weekly
          byDay: "Friday",
          startTime: "11:00", // First slot
          // Schema.org doesn't easily support split times like 11-2 & 4-7.
          // We'll represent the overall availability window.
          // Or, create two separate event schedules if critical.
          // For simplicity, using the broader window.
          endTime: "19:00", // Covering up to the end of the second slot
        },
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
        image: "https://theeatery.com/fish-and-chips-new.png",
        offers: {
          "@type": "Offer",
          itemOffered: {
            "@type": "MenuItem",
            name: "Fish & Chips",
          },
        },
      },
      {
        "@type": "Event",
        name: "To-Go Station Launch",
        description: "Our new To-Go Station for convenient pick-ups is launching soon. Stay tuned for details!",
        startDate: "2025-08-01T00:00:00Z", // Placeholder future date for "Coming Soon"
        eventStatus: "https://schema.org/EventScheduled",
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
        image: "https://theeatery.com/placeholder.svg?query=restaurant+takeout+station+concept",
      },
    ],
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Jennifer M.",
        },
        datePublished: "2024-03-15",
        reviewBody:
          "The Irish Eggs Benedict is absolutely amazing! Shannon's homemade corned beef hash is the best I've ever had.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael T.",
        },
        datePublished: "2024-01-22",
        reviewBody: "We tried their comfort food night on the first Monday of the month and it was incredible!",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    sameAs: [
      "https://www.facebook.com/p/The-Eatery-100094082984298/",
      "https://www.instagram.com/theeaterywesterly/?hl=en",
    ],
    // Additional business-specific properties
    keywords:
      "breakfast, lunch, dinner, comfort food, homestyle cooking, Irish Eggs Benedict, Fish and Chips, Westerly RI, family restaurant",
    slogan: "Homestyle cooking in a warm, inviting atmosphere",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15",
    },
    award: "Best Breakfast in Westerly - Local Choice Awards 2023",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "The Eatery Menu",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Breakfast Menu",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MenuItem",
                name: "Irish Eggs Benedict",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MenuItem",
                name: "Shannon's Kitchen Table",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Lunch Menu",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MenuItem",
                name: "Turkey Club",
              },
            },
          ],
        },
      ],
    },
  }

  // Add breadcrumb schema for better navigation structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://theeatery.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: "https://theeatery.com/#menu",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://theeatery.com/#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Events",
        item: "https://theeatery.com/#events",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://theeatery.com/#contact",
      },
    ],
  }

  // Add LocalBusiness schema as an additional, more specific type
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theeatery.com/#localbusiness",
    name: "The Eatery",
    image: "https://theeatery.com/eatery-exterior.png",
    telephone: "+14013150777",
    email: "theeaterywesterly@gmail.com",
    url: "https://theeatery.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "55 Beach Street",
      addressLocality: "Westerly",
      addressRegion: "RI",
      postalCode: "02891",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3779,
      longitude: -71.8301,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: ["American", "Breakfast", "Comfort Food"],
    paymentAccepted: "Cash, Credit Card",
    founder: "Shannon Holdredge",
    foundingDate: "2023-07",
    telephone: "+14013150777",
    hasMap: "https://maps.google.com/?q=Merchant+Square,+55+Beach+Street,+Westerly,+RI",
  }

  return (
    <>
      <Script id="restaurant-schema" type="application/ld+json">
        {JSON.stringify(businessData)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  )
}
