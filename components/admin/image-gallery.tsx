"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, Search, Copy, Trash2, Check, AlertCircle, FolderOpen, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define image type
type GalleryImage = {
  id: string
  path: string
  name: string
  category: string
  uploadDate: string
}

export default function ImageGallery() {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: "1",
      path: "/irish-eggs-benedict.png",
      name: "Irish Eggs Benedict",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "2",
      path: "/turkey-club-sandwich.png",
      name: "Turkey Club Sandwich",
      category: "lunch",
      uploadDate: "2024-05-15",
    },
    {
      id: "3",
      path: "/fish-and-chips-new.png",
      name: "Fish and Chips",
      category: "dinner",
      uploadDate: "2024-05-15",
    },
    {
      id: "4",
      path: "/hungry-man-breakfast.png",
      name: "Hungry Man Breakfast",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "5",
      path: "/cinnamon-swirl-french-toast.png",
      name: "Cinnamon Swirl French Toast",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "6",
      path: "/cheese-omelette.png",
      name: "Cheese Omelette",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "7",
      path: "/diverse-food-spread.png",
      name: "Diverse Food Spread",
      category: "general",
      uploadDate: "2024-05-15",
    },
    {
      id: "8",
      path: "/eatery-interior.png",
      name: "Eatery Interior",
      category: "location",
      uploadDate: "2024-05-15",
    },
    {
      id: "9",
      path: "/fresh-muffins.png",
      name: "Fresh Muffins",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "10",
      path: "/fruit-platter.png",
      name: "Fruit Platter",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "11",
      path: "/eggs-benedict.png",
      name: "Eggs Benedict",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
    {
      id: "12",
      path: "/wake-up-special.png",
      name: "Wake Up Special",
      category: "breakfast",
      uploadDate: "2024-05-15",
    },
  ])

  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [notification, setNotification] = useState({ show: false, message: "", type: "success" })
  const [newImage, setNewImage] = useState<File | null>(null)
  const [newImageName, setNewImageName] = useState("")
  const [newImageCategory, setNewImageCategory] = useState("general")
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Filter images based on search term and category
  const filterImages = () => {
    let filtered = [...images]

    if (searchTerm) {
      filtered = filtered.filter((image) => image.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((image) => image.category === selectedCategory)
    }

    setFilteredImages(filtered)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    filterImages()
  }

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterImages()
  }

  // Show notification
  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: "", type: "success" }), 3000)
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNewImage(file)
      setNewImageName(file.name.split(".")[0].replace(/[-_]/g, " "))

      // Create preview
      const reader = new FileReader()
      reader.onload = () => {
        setNewImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle image upload
  const handleUploadImage = () => {
    if (!newImage || !newImageName) {
      showNotification("Please select an image and provide a name", "error")
      return
    }

    // --- Start of Simulation Logic for Demo Purposes ---
    // In a real application, this function would involve:
    // 1. Sending the `newImage` file to a backend server.
    // 2. The server would store the file (e.g., in a cloud storage bucket).
    // 3. The server would return the URL or path of the stored image.
    // 4. This path would then be used in `newImageObj`.
    // The current implementation simulates this process for `next-lite` environment.
    const newId = (images.length + 1).toString()
    const fileName = newImage.name.toLowerCase().replace(/\s+/g, "-")
    const newImagePath = `/uploaded-${fileName}` // This path is part of the simulation. In a real app, it would be the server-returned path.
    // --- End of Simulation Logic ---

    const newImageObj: GalleryImage = {
      id: newId,
      path: newImagePreview || newImagePath, // Use preview for demo purposes
      name: newImageName,
      category: newImageCategory,
      uploadDate: new Date().toISOString().split("T")[0],
    }

    const updatedImages = [...images, newImageObj]
    setImages(updatedImages)
    setFilteredImages(updatedImages)

    // Reset form
    setNewImage(null)
    setNewImageName("")
    setNewImageCategory("general")
    setNewImagePreview(null)
    setIsUploadDialogOpen(false)

    showNotification("Image uploaded successfully")
  }

  // Handle image deletion
  const handleDeleteImage = () => {
    if (!selectedImage) return

    const updatedImages = images.filter((image) => image.id !== selectedImage.id)
    setImages(updatedImages)
    setFilteredImages(updatedImages)
    setIsDeleteDialogOpen(false)
    setSelectedImage(null)

    showNotification("Image deleted successfully")
  }

  // Copy image path to clipboard
  const copyImagePath = (path: string) => {
    navigator.clipboard.writeText(path)
    showNotification("Image path copied to clipboard")
  }

  return (
    <div className="space-y-6">
      {notification.show && (
        <Alert variant={notification.type === "error" ? "destructive" : "default"} className="mb-4">
          {notification.type === "error" ? <AlertCircle className="h-4 w-4" /> : <Check className="h-4 w-4" />}
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search images..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-8 bg-background text-foreground"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto border-border text-foreground">
                <Filter className="h-4 w-4 mr-2" />
                Category:{" "}
                {selectedCategory === "all"
                  ? "All"
                  : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card text-foreground border-border">
              <DropdownMenuItem onClick={() => handleCategoryChange("all")}>All Categories</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("breakfast")}>Breakfast</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("lunch")}>Lunch</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("dinner")}>Dinner</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("dessert")}>Dessert</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("drinks")}>Drinks</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("general")}>General</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryChange("location")}>Location</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          onClick={() => setIsUploadDialogOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Image
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <Card key={image.id} className="bg-card border-border overflow-hidden">
              <div className="relative h-40 group">
                <Image
                  src={image.path || "/placeholder.svg"}
                  alt={image.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyImagePath(image.path)}
                      className="bg-background/80 border-primary text-primary hover:bg-secondary"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setSelectedImage(image)
                        setIsDeleteDialogOpen(true)
                      }}
                      className="bg-background/80 border-destructive text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-3">
                <div className="text-sm font-medium text-foreground truncate">{image.name}</div>
                <div className="text-xs text-muted-foreground mt-1 flex justify-between">
                  <span>{image.category}</span>
                  <span>{image.uploadDate}</span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-8 text-muted-foreground">
            No images found. Try adjusting your search or filters.
          </div>
        )}
      </div>

      {/* Upload Image Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="bg-card text-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Upload New Image</DialogTitle>
            <DialogDescription className="text-muted-foreground">Upload a new image to the gallery.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div
                className="border-2 border-dashed border-border rounded-lg p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/20"
                onClick={() => fileInputRef.current?.click()}
              >
                {newImagePreview ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={newImagePreview || "/placeholder.svg"}
                      alt="Image preview"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <>
                    <FolderOpen className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Click to select an image or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG or JPEG (max. 5MB)</p>
                  </>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileChange}
                />
              </div>

              <div className="w-full space-y-4">
                <div>
                  <Label htmlFor="image-name" className="text-foreground">
                    Image Name *
                  </Label>
                  <Input
                    id="image-name"
                    value={newImageName}
                    onChange={(e) => setNewImageName(e.target.value)}
                    placeholder="Enter image name"
                    className="bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image-category" className="text-foreground">
                    Category
                  </Label>
                  <select
                    id="image-category"
                    value={newImageCategory}
                    onChange={(e) => setNewImageCategory(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                  >
                    <option value="general">General</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                    <option value="location">Location</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsUploadDialogOpen(false)}
              className="border-border text-foreground hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUploadImage}
              disabled={!newImage || !newImageName}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="bg-card text-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Confirm Deletion</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Are you sure you want to delete this image? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <Image
                    src={selectedImage.path || "/placeholder.svg"}
                    alt={selectedImage.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{selectedImage.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="border-border text-foreground hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteImage}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Image
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
