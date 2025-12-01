import Script from "next/script"

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://theeatery.com/#organization",
    name: "The Eatery",
    legalName: "The Eatery LLC",
    url: "https://theeatery.com",
    logo: "https://theeatery.com/the-eatery-logo.png",
    foundingDate: "2023-07",
    founders: [
      {
        "@type": "Person",
        name: "Shannon Holdredge",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+14013150777",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+14013150777",
        contactType: "reservations",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/The-Eatery-100094082984298/",
      "https://www.instagram.com/theeaterywesterly/?hl=en",
    ],
    description:
      "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI. Family-owned restaurant with breakfast, lunch, and dinner options including our famous Irish Eggs Benedict.",
  }

  return (
    <Script id="organization-schema" type="application/ld+json">
      {JSON.stringify(organizationData)}
    </Script>
  )
}
