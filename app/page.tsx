import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import VideoHero from "@/components/video-hero"
import MenuSection from "@/components/menu-section"
import ReviewCarousel from "@/components/review-carousel"
import ImageGallery from "@/components/image-gallery"
import StructuredData from "@/components/structured-data"
import OurStory from "@/components/our-story"
import EventCarousel from "@/components/event-carousel"
import LocalBusinessSEO from "@/components/local-business-seo"
import FaqSchema from "@/components/faq-schema"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationSchema from "@/components/organization-schema"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <StructuredData />
      <FaqSchema />
      <LocalBusinessSEO />
      <OrganizationSchema />
      <Header />

      {/* Hero Section with Video Background */}
      <VideoHero className="pt-16 md:pt-20" />

      {/* Special Events Section */}
      <section id="events" className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Special Events</h2>
        <EventCarousel />
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* About Section */}
        <section id="about" className="py-12 md:py-16 container mx-auto px-4">
          <OurStory />
        </section>

        {/* Welcome Sign Section */}
        <section className="py-12 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Welcome to The Eatery</h2>
              <p className="text-muted-foreground mb-4">
                Step into our cozy restaurant where every meal is prepared with care and served with a smile. We're
                dedicated to creating a warm, inviting atmosphere where friends and family can gather to enjoy delicious
                homestyle cooking.
              </p>
              <p className="text-muted-foreground">
                Whether you're joining us for a hearty breakfast, a satisfying lunch, or our special Friday Fish & Chips
                dinner, we look forward to serving you and making you feel right at home.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">A Glimpse of Our Space</h2>
          <ImageGallery />
        </section>

        {/* Featured Dishes */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Featured Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Shannon's Kitchen Table",
                  description:
                    "Two eggs any style with two pancakes, two strips of bacon, two sausage links, and homefries.",
                  price: "$14.99",
                  image: "/shannons-kitchen-table-new.png",
                  tags: ["Signature", "Breakfast"],
                },
                {
                  name: "Irish Eggs Benedict",
                  description:
                    "Two poached eggs served on our homemade corned beef hash, topped with hollandaise sauce.",
                  price: "$13.99",
                  image: "/irish-eggs-benedict.png",
                  tags: ["Signature", "Breakfast"],
                },
                {
                  name: "Fish & Chips",
                  description:
                    "Premium Atlantic haddock in a crispy batter, served with our hand-cut fries, house-made tartar sauce, and coleslaw.",
                  note: "Available Fridays only, 11am-2pm & 4pm-7pm",
                  price: "$15.99",
                  image: "/fish-and-chips-new.png",
                  tags: ["Dinner", "Seafood", "Friday Special"],
                },
              ].map((dish) => (
                <Card key={dish.name}>
                  <CardContent className="p-4">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={600}
                      height={400}
                      className="rounded-md mb-2 object-cover aspect-video"
                    />
                    <h3 className="text-xl font-semibold text-foreground">{dish.name}</h3>
                    <p className="text-muted-foreground mb-2">{dish.description}</p>
                    {dish.note && <p className="text-sm font-medium text-primary mb-2 italic">{dish.note}</p>}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-foreground">{dish.price}</span>
                      <div>
                        {dish.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="pt-32 pb-12 md:pt-36 md:pb-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Menu</h2>
            <Tabs defaultValue="breakfast" className="w-full menu-tabs">
              <TabsList className="grid w-full grid-cols-4 sm:grid-cols-7 mb-8 md:mb-8 bg-card gap-1 md:gap-0">
                <TabsTrigger
                  value="breakfast"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[10px] md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Breakfast
                </TabsTrigger>
                <TabsTrigger
                  value="sides"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Sides
                </TabsTrigger>
                <TabsTrigger
                  value="lunch"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Lunch
                </TabsTrigger>
                <TabsTrigger
                  value="dinner"
                  className="relative data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Dinner
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] px-1.5 py-0.5 rounded-sm whitespace-nowrap z-20 bg-white/20 text-white backdrop-blur-md border border-white/30 pointer-events-none">
                    Fri
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="dessert"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Dessert
                </TabsTrigger>
                <TabsTrigger
                  value="drinks"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Drinks
                </TabsTrigger>
                <TabsTrigger
                  value="kids"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm px-1 md:px-3 py-2 md:py-2.5"
                >
                  Kids
                </TabsTrigger>
              </TabsList>

              <TabsContent value="breakfast" className="mt-6 md:mt-10">
                <MenuSection category="breakfast" />
              </TabsContent>
              <TabsContent value="sides" className="mt-6 md:mt-10">
                <MenuSection category="sides" />
              </TabsContent>
              <TabsContent value="lunch" className="mt-6 md:mt-10">
                <MenuSection category="lunch" />
              </TabsContent>
              <TabsContent value="dinner" className="mt-6 md:mt-10">
                <MenuSection category="dinner" />
              </TabsContent>
              <TabsContent value="dessert" className="mt-6 md:mt-10">
                <MenuSection category="dessert" />
              </TabsContent>
              <TabsContent value="drinks" className="mt-6 md:mt-10">
                <MenuSection category="drinks" />
              </TabsContent>
              <TabsContent value="kids" className="mt-6 md:mt-10">
                <MenuSection category="kids" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Review Carousel */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">What Our Customers Say</h2>
            <ReviewCarousel />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <Link
                    href="https://maps.google.com/?q=Merchant+Square,+55+Beach+Street,+Westerly,+RI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Merchant Square, 55 Beach St, Westerly, RI 02891
                  </Link>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <Link href="tel:+14013150777" className="text-muted-foreground hover:text-primary">
                    (401) 315-0777 (For general questions & pick-up orders)
                  </Link>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a href="mailto:theeaterywesterly@gmail.com" className="text-muted-foreground hover:text-primary">
                    theeaterywesterly@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Mon-Thu: 11am-9pm, Fri-Sat: 11am-10pm, Sun: 10am-8pm</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Event Planning Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Planning a special event? We'd love to help! Contact Shannon for event inquiries:
                </p>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <a
                    href="mailto:theeaterywesterly@gmail.com?subject=Event%20Planning%20Inquiry"
                    className="text-muted-foreground hover:text-primary"
                  >
                    theeaterywesterly@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <Link href="tel:+14013150777" className="text-muted-foreground hover:text-primary">
                    (401) 315-0777
                  </Link>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Availability: 7:00 am - 2:00 pm, Mon - Sun</span>
                </div>
                <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="mailto:theeaterywesterly@gmail.com?subject=Event%20Planning%20Inquiry">
                    Email Us About Your Event
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Eatery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/theeaterywesterly/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="The Eatery on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/p/The-Eatery-100094082984298/" // Updated Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="The Eatery on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-4 pt-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} The Eatery 55 Beach St. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-primary">
              Sitemap
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
