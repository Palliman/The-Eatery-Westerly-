"use client"

// This component is used for the "Sides & Additions" tab.
// The content is based on the "SIDES & ADDITIONS" section of the provided menu image.

export default function BreakfastSides() {
  const sidesAndAdditions = [
    {
      name: "*Single Egg",
      description: "One egg, cooked to order.",
      price: "$1.99",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "*Egg White",
      description: "One egg white, cooked to order.",
      price: "$2.99",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Hand-Cut Homefries",
      description: "Our signature seasoned homefries, cut fresh daily.",
      price: "$4.00",
      image: "/home-fries.png",
    },
    {
      name: "Shredded Hashbrowns",
      description: "Crispy shredded hashbrown potatoes.",
      price: "$4.00",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "English Muffin",
      description: "Toasted English muffin, served with butter.",
      price: "$2.00",
      image: "/english-muffin.png",
    },
    {
      name: "Specialty Rolls or Croissants",
      description: "Daily variety of fresh specialty rolls or croissants.",
      price: "$2.99",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Toast",
      description: "Your choice of White, Wheat, Rye, Raisin, Sourdough & Italian.",
      price: "$1.75",
      image: "/golden-brown-toast.png",
    },
    {
      name: "Bagels (with Butter)",
      description: "Choose from Plain, Everything, Asiago, or Jalapeno Cheddar. Served with butter.",
      price: "$2.99",
      image: "/bagel-assortment.png",
    },
    {
      name: "Cream Cheese",
      description: "A side of cream cheese.",
      price: "$1.55",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Peanut Butter",
      description: "A side of peanut butter.",
      price: "$1.55",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Nutella",
      description: "A side of Nutella.",
      price: "$1.55",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Single Pancake",
      description: "One fluffy buttermilk pancake.",
      price: "$3.99",
      image: "/buttermilk-pancakes.png", // Using existing pancake image
    },
    {
      name: "Sliced Avocado",
      description: "Freshly sliced avocado.",
      price: "$1.99",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Extra Cheese",
      description: "Add extra cheese to any dish.",
      price: "$0.75",
      image: "/placeholder.svg?width=80&height=80",
    },
    {
      name: "Breakfast Meats",
      description: "Your choice of Ham, Bacon, or Sausage.",
      price: "$4.99",
      image: "/side-bacon.png", // Using bacon as representative
    },
    {
      name: "Premium Meats",
      description:
        "Kielbasa, Canadian Bacon, Hot Italian Sausage, Turkey Sausage Links, Chicken Sausage Patty, Chorizo Patty, or Hot Soupy Patty.",
      price: "$5.50",
      image: "/grilled-sausage.png", // Using sausage as representative
    },
    {
      name: "Fresh Baked Muffin",
      description: "Muffin of the day, weighing in at 8oz each.",
      price: "$4.99",
      image: "/fresh-muffins.png", // Using existing muffin image
    },
    {
      name: "French Fries",
      description: "Golden crispy french fries.",
      price: "$3.50", // Price might need adjustment if different from Hand-Cut Homefries
      image: "/side-fries.png",
    },
    {
      name: "Coleslaw",
      description: "Fresh, crisp coleslaw made daily.",
      price: "$3.50",
      image: "/placeholder.svg?width=80&height=80",
    },
  ]

  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sidesAndAdditions.map((item, index) => (
          <div key={index} className="border border-border rounded-lg p-4">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground">{item.name}</h3>
                <span className="font-bold text-primary whitespace-nowrap pl-2">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
