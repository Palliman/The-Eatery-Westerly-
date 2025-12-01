import Script from "next/script"

interface MenuItemSchemaProps {
  name: string
  description: string
  image: string
  price: string
  category: string
}

export default function MenuItemSchema({ name, description, image, price, category }: MenuItemSchemaProps) {
  const priceValue = price.replace(/[^0-9.]/g, "")

  const menuItemData = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name,
    description,
    image: image.startsWith("http") ? image : `https://theeatery.com${image}`,
    offers: {
      "@type": "Offer",
      price: priceValue,
      priceCurrency: "USD",
    },
    menuAddOn: [],
    suitableForDiet: category === "vegetarian" ? ["https://schema.org/VegetarianDiet"] : [],
  }

  return (
    <Script id={`menu-item-schema-${name.toLowerCase().replace(/\s+/g, "-")}`} type="application/ld+json">
      {JSON.stringify(menuItemData)}
    </Script>
  )
}
