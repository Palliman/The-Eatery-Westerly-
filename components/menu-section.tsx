"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import BreakfastSides from "@/components/breakfast-sides"

interface MenuSectionProps {
  category: "breakfast" | "lunch" | "dinner" | "dessert" | "drinks" | "sides" | "kids"
}

export default function MenuSection({ category }: MenuSectionProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Handle image errors by checking if images load properly
  useEffect(() => {
    const checkImages = () => {
      const images = document.querySelectorAll(".menu-item-image")
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement
        const itemName = imgElement.getAttribute("data-item-name")

        if (itemName && imgElement.naturalWidth === 0 && imgElement.complete) {
          setImageErrors((prev) => ({
            ...prev,
            [itemName]: true,
          }))
        }
      })
    }

    // Check images after a short delay to allow them to load
    const timer = setTimeout(checkImages, 2000)
    return () => clearTimeout(timer)
  }, [])

  // If the category is sides, render the BreakfastSides component
  if (category === "sides") {
    return <BreakfastSides />
  }

  // Menu data - in a real app, this would come from a database
  const menuItems: Record<string, any[]> = {
    breakfast: [
      {
        section: "From the Griddle",
        note: "SUBSTITUTE BAGEL, CROISSANT OR BISCUIT FOR $.50",
        items: [
          {
            name: "*Sunrise Plate",
            description: "One Extra Large Egg, Homefries & Toast.",
            price: "$4.99",
            image: "/wake-up-special.png",
          },
          {
            name: "*Wake Up Special",
            description: "Two Extra Large Eggs, Homefries & Toast.",
            price: "$6.99",
            image: "/wake-up-special.png",
          },
          {
            name: "*Hearth Plate",
            description:
              "One Extra Large Egg, Two Pieces of Breakfast Meat, Hand-Cut Homefries and One Slice Of Toast.",
            price: "$8.99",
            image: "/breakfast-eggs-meat.png",
          },
          {
            name: "*The Eatery Classic",
            description:
              "Two Extra Large Eggs With Your Choice of Bacon, Sausage or Ham. Served with Homefries & Toast.",
            note: "SUBSTITUTE ANY PREMIUM MEAT for $1.50",
            price: "$10.99",
            image: "/breakfast-eggs-meat.png",
            tags: ["Popular"],
          },
          {
            name: "*Shannon's Kitchen Table",
            description:
              "Two Extra Large Eggs, Two Pancakes or French Toast, Two Bacon and Two Sausage Links Served with Hand-Cut Homefries.",
            price: "$14.99",
            image: "/shannons-kitchen-table-new.png",
            tags: ["Signature", "Hearty"],
          },
          {
            name: "*Morning Ribeye Delight",
            description:
              "A flavorful 6oz Ribeye Steak, Two Extra Large Eggs, Hand-Cut Homefries and Your choice of Toast.",
            note: "Substitute Cinnamon Swirl for $1.50",
            price: "$17.99",
            image: "/breakfast-eggs-meat.png",
            tags: ["Premium"],
          },
        ],
      },
      {
        section: "Breakfast Sandwiches",
        note: "All Sandwiches Served on Your Choice of Toast, Bulky Roll or Jumbo English Muffin. Substitute for a Bagel, Croissant, Ciabatta, Parmesan Focaccia or Biscuit for $0.50. Substitute Chips for Hand-Cut Home fries or Hashbrowns for $2.50.",
        items: [
          {
            name: "*Egg & Cheese (One Egg)",
            description: "One fresh egg and American cheese on your choice of bread.",
            price: "$3.99",
            image: "/breakfast-egg-sandwich.png",
          },
          {
            name: "*Egg & Cheese (Two Eggs)",
            description: "Two fresh eggs and American cheese on your choice of bread.",
            price: "$5.99",
            image: "/breakfast-two-egg-sandwich.png",
          },
          {
            name: "*Egg & Cheese with Bacon, Sausage or Ham (One Egg)",
            description:
              "One fresh egg, American cheese, and your choice of bacon, sausage, or ham on your choice of bread.",
            price: "$5.99",
            image: "/breakfast-sandwich-meat.png",
          },
          {
            name: "*Egg & Cheese with Bacon, Sausage or Ham (Two Eggs)",
            description:
              "Two fresh eggs, American cheese, and your choice of bacon, sausage, or ham on your choice of bread.",
            price: "$7.99",
            image: "/breakfast-sandwich-meat.png",
            tags: ["Popular"],
          },
          {
            name: "*The Westerly Wrap",
            description:
              "Two extra large eggs with mild soupy, roasted red peppers, and onions, topped with provolone cheese in a warm tortilla wrap.",
            note: "Add Premium Meat for $1.50",
            price: "$10.50",
            image: "/breakfast-wrap.png",
          },
          {
            name: "*Breakfast Wrap with Your Choice of Cheese",
            description:
              "2 Extra Large Eggs with your choice of cheese and three fillings of Breakfast Meats, Veggies, or Homefries in a warm tortilla wrap.",
            note: "Add Premium Meat for $1.50",
            price: "$8.99",
            image: "/breakfast-wrap.png",
            tags: ["Popular"],
          },
          {
            name: "*The Ace",
            description:
              "Our Texas Style French Toast Breakfast Sandwich filled with Two Extra Large Eggs, Sausage Patty, and American Cheese. Served with a side of Syrup for Dipping.",
            price: "$8.99",
            image: "/breakfast-ace.png",
            tags: ["Signature"],
          },
          {
            name: "B.L.T.",
            description: "Bacon, lettuce, tomato, and mayo on your choice of bread. Served with chips and a pickle.",
            price: "$9.99",
            image: "/fresh-blt-sandwich.png",
          },
        ],
      },
      {
        section: "Benedicts at The Eatery",
        items: [
          {
            name: "*Classic Eggs Benedict",
            description:
              "Two Poached Eggs On Top of an English Muffin with Canadian Bacon Topped with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$12.99",
            image: "/eggs-benedict.png",
          },
          {
            name: "*Country Benedict",
            description:
              "Two Poached Eggs On Top of an English Muffin with a Juicy Sausage Patty, Topped with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$12.99",
            image: "/eggs-benedict.png",
          },
          {
            name: "*California Eggs Benedict",
            description:
              "Two Poached Eggs on Top of an English Muffin with Tomato, Red Onion & Avocado Topped with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$13.99",
            image: "/eggs-benedict.png",
          },
          {
            name: "*Spinach Florentine Benedict",
            description:
              "Two Poached Eggs On Top of an English Muffin with Spinach, Tomato with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$13.99",
            image: "/eggs-benedict.png",
          },
          {
            name: "*Irish Eggs Benedict",
            description:
              "Two Poached Eggs on Top of an English Muffin with Our House-Made Corned Beef Hash Topped with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$14.99",
            image: "/irish-eggs-benedict.png",
            tags: ["Signature"],
          },
          {
            name: "*Soupy Patty Eggs Benedict",
            description:
              "Two Poached Eggs On Top of an English Muffin a Mild Soupy Patty with Creamy Hollandaise Sauce Served with Hand-Cut Homefries.",
            price: "$14.99",
            image: "/eggs-benedict.png",
          },
        ],
      },
      {
        section: "French Toast, Cakes & Waffles",
        note: "Add Pure Maple Syrup for $2.00",
        items: [
          {
            name: "Texas Style French Toast",
            description:
              "Three Pieces of Double Thick Texas Style Bread Sprinkled with Cinnamon Dipped and Cooked to Perfection, Served with Whipped Butter.",
            price: "$8.99",
            image: "/french-toast.png",
          },
          {
            name: "Cinnamon Swirl French Toast",
            description:
              "Three Pieces of Thick Cinnamon Bread Dipped and Cooked to Perfection Served with Whipped Butter.",
            price: "$9.99",
            image: "/cinnamon-swirl-french-toast.png",
          },
          {
            name: "Cinnamon Swirl French Toast (Short Stack)",
            description:
              "Two Pieces of Thick Cinnamon Bread Dipped and Cooked to Perfection Served with Whipped Butter.",
            price: "$7.99",
            image: "/cinnamon-swirl-french-toast.png",
          },
          {
            name: "Stuffed French Toast",
            description:
              "Four Pieces of French Toast Filled with your Choice of Apple & Cinnamon, Banana & Walnuts, Nutella & Banana or Blueberry & Cream Cheese.",
            price: "$10.99",
            image: "/stuffed-french-toast.png",
            tags: ["Popular"],
          },
          {
            name: "Buttermilk Pancakes",
            description: "Two Large Cakes Served with Whipped Butter.",
            price: "$7.99",
            image: "/buttermilk-pancakes.png",
          },
          {
            name: "Belgium Waffle",
            description: "Plain or With Whipped Cream.",
            note: "Add Fresh Blueberry, Banana or Strawberry, Walnuts or Chocolate Chips for $1.50",
            price: "$5.99",
            image: "/belgium-waffle.png",
          },
          {
            name: "Two and Two",
            description:
              "Two French Toast or Two Texas Style French Toast Served with Two Bacon Strips or Two Sausage Links.",
            price: "$10.99",
            image: "/french-toast.png",
          },
        ],
      },
      {
        section: "Omelettes",
        note: "ALL OMELETTES MADE WITH THREE EXTRA LARGE EGGS SERVED WITH YOUR CHOICE OF TOAST. SUBSTITUTE BAGEL, CROISSANT OR BISCUIT FOR $.50. ADD HAND-CUT HOMEFRIES OR HASHBROWNS FOR $2.00 MORE.",
        items: [
          {
            name: "*Italian Veggie",
            description: "Fresh Grilled Seasoned Squash, Peppers, Tomatoes, Spinach & Provolone Cheese.",
            price: "$13.99",
            image: "/italian-veggie-omelette.png",
          },
          {
            name: "*Soupy & Cheese",
            description: "Local Westerly Meat Packing Mild Soupy, Roasted Peppers, Onions and Provolone Cheese.",
            price: "$14.99",
            image: "/soupy-omelette.png",
            tags: ["Signature"],
          },
          {
            name: "*Western",
            description: "Ham, Green Peppers, Onions & American Cheese.",
            price: "$12.99",
            image: "/western-omelette.png",
            tags: ["Popular"],
          },
          {
            name: "*Hash-Tastic",
            description: "House Made Corned Beef Hash and American Cheese.",
            price: "$13.99",
            image: "/cheese-omelette-sausage-homefries.png",
            tags: ["Signature", "Homemade"],
          },
          {
            name: "*Cheese Omelette",
            description:
              "Your Choice of Cheese: American, Provolone, Swiss, Cheddar, Pepper Jack, Feta, Goat, Mozzarella or Monterey Jack.",
            price: "$8.99",
            image: "/cheese-omelette-sausage-homefries.png",
            notes: [
              "SUBSTITUTE EGG WHITES FOR $1.50",
              "Add Veggies for $1.00 (Tomato, Onion, Spinach, Mushrooms, Roasted, Jalapeno, Green or Banana Peppers)",
              "Add Breakfast Meat for $1.99 (Ham, Bacon, Sausage)",
              "Add Specialty Meat for $2.50 (Kielbasa, Hot Italian Sausage, Chicken Sausage, Chorizo Patty, Soupy Crumble or Hot Soupy Patty)",
            ],
          },
        ],
      },
      {
        section: "Bowls",
        items: [
          {
            name: "*Kielbasa or Local Hot Italian Sausage Bowl",
            description:
              "Three Extra Large Eggs, Roasted Peppers, Onions, Hand-Cut Homefries all Scrambled Together with Your Choice of Melted Cheese on Top. Served with Your Choice of Toast.",
            price: "$13.99",
            image: "/sausage-scrambler.png",
            tags: ["Popular", "Hearty"],
          },
          {
            name: "Cereal",
            description: "Choose from a variety of available cereals.",
            note: "Add Banana or Blueberries for $1.99",
            price: "$4.99",
            image: "/old-fashioned-oats.png",
          },
          {
            name: "Old Fashioned Oats",
            description: "Cooked to Order. Topped with Brown Sugar, Raisins and Walnuts.",
            price: "Small $4.99 / Large $6.99",
            note: "Add Fresh Bananas or Blueberries: Small $1.50 / Large $1.99",
            image: "/old-fashioned-oats.png",
          },
          {
            name: "Low Fat Yogurt",
            description:
              "Low Fat Greek Vanilla Yogurt Layered with Fresh Blueberries and Granola. Served in a 10 oz Mason Jar.",
            price: "$8.99",
            image: "/yogurt-parfait.png",
            tags: ["Healthy"],
          },
        ],
      },
      {
        section: "Eatery Specialties",
        items: [
          {
            name: "Homemade Corned Beef Hash",
            description: "Fresh Brisket Combined with potato and Seasonings that will have you coming back for more.",
            note: "Add Two Eggs & Toast $5.00",
            price: "$7.99",
            image: "/corned-beef-hash.png",
            tags: ["Homemade", "Signature"], // Adjusted tags slightly
          },
          {
            name: "*Sausage Gravy Biscuits",
            description: "Our Very Own Version of a Southern Favorite.",
            price: "Small $5.50 / Large $9.99",
            image: "/sausage-gravy-biscuits.png",
            tags: ["Comfort Food", "Southern Style"],
          },
        ],
      },
    ],
    lunch: [
      {
        section: "Soups & Salads",
        items: [
          {
            name: "Soup Du Jour",
            description: "Chef's daily soup selection, prepared fresh each morning.",
            price: "Priced Daily",
            image: "/soup-du-jour-new.png",
          },
          {
            name: "Rhode Island Clam Chowder",
            description: "Traditional clear broth chowder with fresh clams, potatoes, and vegetables.",
            price: "$5.00",
            image: "/ri-clam-chowder-new.png",
            tags: ["Regional"],
          },
          {
            name: "New England Clam Chowder",
            description: "Classic creamy chowder with tender clams, potatoes, and vegetables.",
            price: "$5.00",
            image: "/ne-clam-chowder-new.png",
            tags: ["Popular"],
          },
          {
            name: "House Salad",
            description:
              "Fresh mixed greens with tomatoes, cucumbers, red onions, olives, and croutons. Add Carrots, Tuna, Chicken or Chicken Salad $4.00",
            price: "$11.99",
            image: "/house-salad.png",
          },
          {
            name: "Caesar Salad",
            description:
              "Crisp romaine lettuce tossed with our house Caesar dressing, parmesan cheese, and croutons. Add Chicken $4.00",
            price: "$11.99",
            image: "/fresh-caesar-salad.png",
          },
        ],
      },
      {
        section: "Sandwiches & Burgers",
        items: [
          {
            name: "Turkey Club",
            description:
              "Triple-decker sandwich with roasted turkey, bacon, lettuce, tomato, and mayo. Served with chips and pickle.",
            price: "$14.99",
            image: "/turkey-club-sandwich.png",
            tags: ["Popular"],
          },
          {
            name: "Turkey Melt",
            description:
              "Roasted turkey with sauteed onions and Swiss cheese on grilled rye bread. Served with a side of mayonnaise or mustard and chips & pickle.",
            price: "$11.99",
            image: "/turkey-melt.png",
          },
          {
            name: "Pastrami Melt",
            description:
              "Premium sliced pastrami with sauteed onions and Swiss cheese on grilled rye bread. Served with a side of mayonnaise or mustard and chips & pickle.",
            price: "$12.99",
            image: "/turkey-melt.png",
            tags: ["Premium"],
          },
          {
            name: "Turkey Reuben",
            description:
              "Roasted turkey with sauerkraut, Swiss cheese, and Russian dressing on grilled rye. Served with chips and pickle.",
            price: "$11.99",
            image: "/fresh-turkey-reuben.png",
            tags: ["Signature"],
          },
          {
            name: "Pastrami Reuben",
            description:
              "Premium sliced pastrami with sauerkraut, Swiss cheese, and Russian dressing on grilled rye. Served with chips and pickle.",
            price: "$12.99",
            image: "/fresh-turkey-reuben.png",
            tags: ["Premium", "Signature"],
          },
          {
            name: "Chicken Caesar Wrap",
            description:
              "Grilled or crispy chicken, Caesar dressing, croutons, romaine lettuce, and Parmesan cheese in a flour tortilla. Served with chips and pickle.",
            price: "$10.99",
            image: "/fresh-caesar-wrap.png",
          },
          {
            name: "B.L.T.",
            description: "Bacon, lettuce, tomato, and mayo on your choice of bread. Served with chips and a pickle.",
            price: "$9.99",
            image: "/fresh-blt-sandwich.png",
          },
          {
            name: "House-Made Chicken or Tuna Salad Wrap",
            description:
              "Your choice of our freshly prepared chicken or tuna salad with mayonnaise, fresh lettuce, tomato, and celery in a flour tortilla. Served with chips and pickle.",
            note: "Add 2 Strips of Crispy Bacon $2.50",
            price: "$9.99",
            image: "/fresh-chicken-salad-wrap.png",
            tags: ["Homemade"],
          },
          {
            name: "Turkey BLT Wrap",
            description:
              "Thinly sliced turkey with lettuce, bacon, avocado, and mayonnaise in a flour tortilla. Served with chips and pickle.",
            price: "$12.99",
            image: "/fresh-turkey-blt-wrap.png",
            tags: ["New"],
          },
          {
            name: "Chicken Teriyaki Wrap",
            description:
              "Grilled or crispy chicken with teriyaki sauce, croutons, romaine lettuce, and tomato in a flour tortilla. Served with chips and pickle.",
            price: "$11.99",
            image: "/chicken-teriyaki-wrap.png",
            tags: ["New"],
          },
          {
            name: "Tuna Salad Sandwich",
            description:
              "Albacore tuna salad with mayonnaise, fresh tomato, and lettuce on sourdough toast. Served with chips and pickle.",
            note: "Add 2 Strips of Crispy Bacon $2.50",
            price: "$9.99",
            image: "/tuna-salad-sandwich.png",
            tags: ["New"],
          },
          {
            name: "Buffalo Chicken Sandwich",
            description:
              "Crispy Chicken, Buffalo Sauce and Lettuce on a Bulky Roll with Your Choice of Ranch or Blue Cheese. Served with chips and pickle.",
            price: "$11.99",
            image: "/chicken-teriyaki-wrap.png", // Placeholder image
            tags: ["Spicy", "New"],
          },
          {
            name: "Foot Long Hot Dog",
            description: "Premium all-beef hot dog served on a toasted bun. Served with fries and pickle.",
            price: "$8.99",
            image: "/fresh-foot-long-hotdog.png",
          },
          {
            name: "Classic Burger",
            description:
              "Six-ounce Angus beef patty with lettuce, tomato, and your choice of cheese. Served with chips and pickle.",
            price: "$11.99",
            image: "/fresh-classic-burger.png",
            tags: ["Popular"],
          },
          {
            name: "California Burger",
            description:
              "Six-ounce Angus beef patty topped with fresh avocado, tomato, pepper jack cheese, and aioli. Served with chips and pickle.",
            price: "$13.99",
            image: "/fresh-california-burger.png",
          },
        ],
      },
    ],
    dinner: [
      {
        section: "Seafood Specialties",
        items: [
          {
            name: "Fish & Chips",
            description:
              "Premium Atlantic haddock in a crispy batter, served with our hand-cut fries, house-made tartar sauce, and coleslaw.",
            price: "$15.99",
            image: "/fish-and-chips-new.png",
            tags: ["Signature", "Popular"],
          },
          {
            name: "Fried Whole Belly Clams & Fries",
            description:
              "Fresh whole belly clams lightly breaded and fried to golden perfection, served with hand-cut fries, coleslaw, and house-made tartar sauce.",
            price: "Market Price",
            note: "When Available",
            image: "/fried-clams-fries-new.png",
            tags: ["Local Favorite", "Seafood"],
          },
          {
            name: "Clam Strips & Fries",
            description:
              "Fresh clam strips lightly breaded and fried to golden perfection, served with hand-cut fries, coleslaw, and house-made tartar sauce.",
            price: "$13.99",
            image: "/clam-strips.png",
            tags: ["Seafood", "Popular"],
          },
        ],
      },
    ],
    dessert: [
      {
        section: "Desserts",
        items: [
          {
            name: "Lemon Cake",
            description:
              "Light and refreshing lemon-infused cake with a delicate citrus glaze. Served with vanilla ice cream.",
            price: "$8.99",
            image: "/lemon-cake-new.png",
          },
          {
            name: "Chocolate Neapolitan Cake",
            description:
              "Layers of chocolate cake and rich chocolate cream, topped with chocolate ganache. Served with vanilla ice cream.",
            price: "$7.99",
            image: "/chocolate-napoleon-cake-new.png",
            tags: ["Popular"],
          },
          {
            name: "Belgian Chocolate Mousse Cake",
            description:
              "Decadent Belgian chocolate mousse layered between moist chocolate cake. Served with vanilla ice cream.",
            price: "$7.99",
            image: "/belgian-chocolate-cake-new.png",
            tags: ["Signature"],
          },
          {
            name: "Carrot Cake",
            description:
              "Moist spiced cake with fresh carrots, walnuts, and cream cheese frosting. Served with vanilla ice cream.",
            price: "$8.99",
            image: "/carrot-cake-new.png",
          },
        ],
      },
    ],
    drinks: [
      {
        section: "Hot Beverages",
        items: [
          {
            name: "Bottomless Coffee or Tea",
            description: "Freshly brewed coffee or premium tea, available hot or iced with unlimited refills.",
            price: "$2.99",
            image: "/coffee-new.png",
          },
          {
            name: "Hot Cocoa",
            description: "Rich and creamy hot chocolate topped with whipped cream.",
            price: "$2.99",
            image: "/hot-cocoa-new.png",
          },
        ],
      },
      {
        section: "Cold Beverages",
        items: [
          {
            name: "20 Oz Bottled Soda",
            description: "Assorted popular bottled soda brands.",
            price: "$3.50",
            image: "/soda-new.png",
          },
          {
            name: "Bottled Water",
            description: "Chilled spring water.",
            price: "$3.00",
            image: "/bottled-water.png",
          },
          {
            name: "Club Soda",
            description: "Refreshing sparkling club soda.",
            price: "$2.00",
            image: "/club-soda-glass.png",
          },
          {
            name: "Fountain",
            description: "Your choice of a fountain drink.",
            price: "$2.99",
            image: "/soda-new.png",
          },
          {
            name: "Kids Fountain",
            description: "Smaller portion fountain drink for kids.",
            price: "$1.99",
            image: "/soda-new.png",
          },
          {
            name: "Granny Squibb's Iced Tea",
            description: "Locally crafted Rhode Island bottled iced tea available in a variety of refreshing flavors.",
            price: "$3.50",
            image: "/granny-squibbs-new.png",
            tags: ["Local", "Rhode Island"],
          },
          {
            name: "Unsweetened Iced Tea",
            description: "Freshly brewed unsweetened iced tea.",
            note: "ONE FREE REFILL",
            price: "$2.99",
            image: "/unsweetened-iced-tea-glass.png",
          },
          {
            name: "Milk",
            description: "Fresh cold milk available in 12oz or 16oz servings.",
            price: "$1.99+",
            image: "/milk-new.png",
          },
          {
            name: "Chocolate Milk",
            description: "Creamy chocolate milk available in 12oz or 16oz servings.",
            price: "$2.99+",
            image: "/chocolate-milk-new.png",
          },
          {
            name: "Juice",
            description:
              "Fresh juices including apple, orange, cranberry, and tomato. Available in 12oz or 16oz servings.",
            price: "$3.99",
            image: "/juice-new.png",
          },
          // {
          //   name: "Assorted Juices",
          //   description:
          //     "Selection of fresh juices including apple, orange, cranberry, and tomato. Available in 12oz or 16oz servings.",
          //   price: "$2.99+",
          //   image: "/juice-varieties.png",
          //   tags: ["Fresh"],
          // },
        ],
      },
    ],
    kids: [
      {
        section: "Kids Menu",
        items: [
          {
            name: "Crispy Chicken Tenders and French Fries",
            description: "Golden brown chicken tenders served with a side of crispy french fries.",
            price: "$6.99",
            image: "/kids-chicken-tenders-fries.png",
          },
          {
            name: "Grilled Cheese with Chips & A Pickle",
            description: "Classic grilled cheese sandwich served with potato chips and a pickle spear.",
            price: "$5.99",
            image: "/kids-grilled-cheese-chips.png",
          },
          {
            name: "Kraft Mac & Cheese with French Fries",
            description: "Creamy Kraft macaroni and cheese served with a side of french fries.",
            price: "$6.99",
            image: "/kids-mac-cheese-fries.png",
          },
          {
            name: "Kids French Fries",
            description: "A smaller portion of our crispy golden french fries.",
            price: "$1.75",
            image: "/side-fries.png",
          },
          {
            name: "Fruit Bowl",
            description: "A healthy and refreshing bowl of assorted fresh seasonal fruit.",
            price: "$5.99",
            image: "/fruit-bowl.png",
          },
          {
            name: "Cheese Quesadilla",
            description: "A warm flour tortilla filled with melted cheese, served with a side of mild salsa.",
            price: "$5.99",
            image: "/chicken-quesadilla.png",
          },
        ],
      },
    ],
  }

  // Check if the category exists in menuItems
  if (!menuItems[category]) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No menu items available for this category.</p>
      </div>
    )
  }

  // Check if the category has sections
  const categoryData = menuItems[category]
  const hasMenuSections = categoryData && categoryData.length > 0 && categoryData[0]?.section !== undefined

  if (hasMenuSections) {
    return (
      <div className="space-y-12 menu-section-content">
        {categoryData.map((section: any, sectionIndex: number) => (
          <div key={sectionIndex}>
            <h3 className="text-xl font-bold mb-2 text-foreground border-b border-border pb-2">{section.section}</h3>
            {section.note && <p className="text-sm font-medium text-primary mb-6">{section.note}</p>}
            <div className="grid gap-4 md:gap-8 mt-6">
              {section.items.map((item: any, index: number) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 border-b border-border pb-6 menu-item-card">
                  {/* Removed the image container */}
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-foreground menu-item-title">{item.name}</h3>
                      <span className="font-bold text-primary menu-item-price">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-3 menu-item-description">{item.description}</p>
                    {item.note && !Array.isArray(item.note) && (
                      <p className="text-sm font-medium text-primary mb-3">{item.note}</p>
                    )}
                    {item.notes &&
                      Array.isArray(item.notes) &&
                      item.notes.map((note: string, noteIdx: number) => (
                        <p key={noteIdx} className="text-sm font-medium text-primary mb-1">
                          {note}
                        </p>
                      ))}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {item.tags.map((tag: string, i: number) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-secondary text-foreground border-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    // Original rendering for categories without sections
    return (
      <div className="grid gap-4 md:gap-8">
        {categoryData.map((item: any, index: number) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 border-b border-border pb-6 menu-item-card">
            {/* Removed the image container */}
            <div className="w-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-foreground menu-item-title">{item.name}</h3>
                <span className="font-bold text-primary menu-item-price">{item.price}</span>
              </div>
              <p className="text-muted-foreground mb-3 menu-item-description">{item.description}</p>
              {item.note && !Array.isArray(item.note) && (
                <p className="text-sm font-medium text-primary mb-3">{item.note}</p>
              )}
              {item.notes &&
                Array.isArray(item.notes) &&
                item.notes.map((note: string, noteIdx: number) => (
                  <p key={noteIdx} className="text-sm font-medium text-primary mb-1">
                    {note}
                  </p>
                ))}
              {item.tags && item.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {item.tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs bg-secondary text-foreground border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
