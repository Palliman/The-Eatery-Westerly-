"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/eatery-exterior.png",
    alt: "The Eatery exterior with Fish & Chip Fridays sign",
    className: "md:col-span-2",
  },
  {
    src: "/dining-room-interior.png",
    alt: "The Eatery dining room with blue walls, wooden tables, and cozy booth seating",
  },
  {
    src: "/french-toast-with-bacon.png",
    alt: "Golden French toast triangles served with crispy bacon and whipped butter at The Eatery",
  },
  {
    src: "/fresh-muffins.png",
    alt: "Freshly baked blueberry muffins with sunflowers in the background",
  },
  {
    src: "/stuffed-french-toast-plated.png",
    alt: "Stuffed French toast cut in half showing cream cheese and berry filling",
  },
  {
    src: "/fruit-platter.png",
    alt: "Fresh fruit platter with strawberries, blueberries, pineapple and grapes",
  },
  {
    src: "/eggs-benedict.png",
    alt: "Eggs Benedict with hollandaise sauce and home fries",
    className: "md:col-span-2",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]",
              image.className,
            )}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-background/0 hover:bg-background/20 transition-colors" />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
