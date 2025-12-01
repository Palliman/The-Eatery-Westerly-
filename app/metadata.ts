import type { Metadata } from "next"

// Base metadata that applies to all pages
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://theeatery.com"),
  title: {
    default: "The Eatery | Homestyle Cooking in Westerly, RI",
    template: "%s | The Eatery",
  },
  description:
    "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Family-owned restaurant with breakfast, lunch, and dinner options including our famous Irish Eggs Benedict.",
  keywords: [
    "restaurant",
    "Westerly",
    "Rhode Island",
    "breakfast",
    "lunch",
    "dinner",
    "homestyle cooking",
    "comfort food",
    "Irish Eggs Benedict",
    "Fish and Chips",
    "family restaurant",
    "Shannon Holdredge",
  ],
  authors: [{ name: "The Eatery", url: "https://theeatery.com" }],
  creator: "The Eatery",
  publisher: "The Eatery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theeatery.com",
    title: "The Eatery | Homestyle Cooking in Westerly, RI",
    description:
      "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Family-owned restaurant with breakfast, lunch, and dinner options.",
    siteName: "The Eatery",
    images: [
      {
        url: "/eatery-exterior.png",
        width: 1200,
        height: 630,
        alt: "The Eatery exterior in Westerly, RI",
      },
      {
        url: "/eatery-interior.png",
        width: 1200,
        height: 630,
        alt: "The Eatery interior with cozy atmosphere",
      },
      {
        url: "/irish-eggs-benedict.png",
        width: 1200,
        height: 630,
        alt: "Irish Eggs Benedict - our signature breakfast dish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Eatery | Homestyle Cooking in Westerly, RI",
    description:
      "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Family-owned restaurant with breakfast, lunch, and dinner options.",
    images: ["/eatery-exterior.png"],
    creator: "@theeateryri",
    site: "@theeateryri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://theeatery.com",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
    yandex: "yandex-verification-code", // Replace with actual verification code when available
  },
  category: "Restaurant",
  other: {
    "geo.region": "US-RI",
    "geo.placename": "Westerly",
    "geo.position": "41.3779;-71.8301",
    ICBM: "41.3779, -71.8301",
  },
  // Add new icons configuration
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // Ensure manifest link is present
  manifest: "/site.webmanifest",
}

// Specific metadata for different pages/sections
export const pageMetadata = {
  home: {
    title: "The Eatery | Homestyle Cooking in Westerly, RI",
    description:
      "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Family-owned restaurant with breakfast, lunch, and dinner options.",
    alternates: {
      canonical: "https://theeatery.com",
    },
  },
  menu: {
    title: "Menu | The Eatery",
    description:
      "Explore our menu featuring homestyle breakfast, lunch, and dinner options. From hearty breakfast platters to comfort food classics and our famous Irish Eggs Benedict.",
    alternates: {
      canonical: "https://theeatery.com/#menu",
    },
  },
  about: {
    title: "About Us | The Eatery",
    description:
      "Learn about The Eatery, a family-owned restaurant serving homestyle comfort food in Westerly, RI since 2023. Owner Shannon Holdredge brings years of restaurant experience to create a welcoming atmosphere.",
    alternates: {
      canonical: "https://theeatery.com/#about",
    },
  },
  contact: {
    title: "Contact Us | The Eatery",
    description:
      "Contact The Eatery in Westerly, RI. Call us at (401) 315-0777 for reservations, event planning, or to place a pickup order.",
    alternates: {
      canonical: "https://theeatery.com/#contact",
    },
  },
  events: {
    title: "Events | The Eatery",
    description:
      "Check out upcoming events at The Eatery in Westerly, RI, including our popular Fish & Chips Friday and monthly Comfort Food Night.",
    alternates: {
      canonical: "https://theeatery.com/#events",
    },
  },
  admin: {
    title: "Admin Dashboard | The Eatery",
    description: "Admin dashboard for The Eatery restaurant management.",
    robots: {
      index: false,
      follow: false,
    },
  },
}
