import Script from "next/script"

export default function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are The Eatery's hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Eatery is open Monday-Thursday 11:00 AM - 9:00 PM, Friday-Saturday 11:00 AM - 10:00 PM, and Sunday 10:00 AM - 8:00 PM.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Eatery take reservations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, The Eatery accepts reservations. Please call us at (401) 315-0777 to make a reservation.",
        },
      },
      {
        "@type": "Question",
        name: "What is The Eatery known for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Eatery is known for our homestyle comfort food, especially our Irish Eggs Benedict, cinnamon swirl French toast, hash brown-crusted quiche, and homemade muffins. We're also popular for our Friday Fish & Chips special and monthly Comfort Food Night.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Eatery offer takeout?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, The Eatery offers takeout. Call us at (401) 315-0777 to place your order for pickup.",
        },
      },
      {
        "@type": "Question",
        name: "Does The Eatery cater events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, The Eatery offers catering services for events. Please contact us for more information about our catering options.",
        },
      },
    ],
  }

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(faqData)}
    </Script>
  )
}
