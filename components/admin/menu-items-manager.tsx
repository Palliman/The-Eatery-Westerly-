"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Save,
  X,
  ChevronDown,
  Upload,
  Check,
  AlertCircle,
  Filter,
  ImageIcon,
} from "lucide-react" // Renamed Image to ImageIcon
import NextImage from "next/image" // Use NextImage for actual image rendering
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define menu item type (should match your database schema)
type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  section?: string
  tags?: string[]
  note?: string
  created_at?: string // Added from DB
}

export default function MenuItemsManager() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<MenuItem | null>(null)
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: "",
    description: "",
    price: "",
    image: "/diverse-food-spread.png",
    category: "breakfast",
    section: "",
    tags: [],
  })
  const [newTag, setNewTag] = useState("")
  const [notification, setNotification] = useState({ show: false, message: "", type: "success" })
  const [selectedTab, setSelectedTab] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  const recentImagesForSelection = [
    "/irish-eggs-benedict.png",
    "/turkey-club-sandwich.png",
    "/fish-and-chips-new.png",
    "/hungry-man-breakfast.png",
    "/cinnamon-swirl-french-toast.png",
    "/cheese-omelette.png",
  ]

  const galleryImagesForSelection = [
    "/diverse-food-spread.png",
    "/eatery-interior.png",
    "/fresh-muffins.png",
    "/fruit-platter.png",
    "/eggs-benedict.png",
    "/wake-up-special.png",
    "/breakfast-eggs-meat.png",
    "/french-toast.png",
    "/breakfast-egg-sandwich.png",
    "/breakfast-two-egg-sandwich.png",
    "/breakfast-wrap.png",
    "/breakfast-ace.png",
    "/stuffed-french-toast.png",
    "/buttermilk-pancakes.png",
    "/shannons-kitchen-table.png",
  ]

  // Show notification
  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: "", type: "success" }), 3000)
  }

  // Fetch menu items from API
  const fetchMenuItems = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/menu-items")
      if (!response.ok) {
        throw new Error(`Failed to fetch menu items: ${response.statusText}`)
      }
      const data = await response.json()
      setMenuItems(data || []) // Ensure data is an array
    } catch (error) {
      console.error("Error fetching menu items:", error)
      showNotification("Could not load menu items from server.", "error")
      setMenuItems([]) // Set to empty array on error
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMenuItems()
  }, [fetchMenuItems])

  // Update filtered items when search term, category, or items change
  useEffect(() => {
    let filtered = [...menuItems]

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    if (selectedTab !== "all") {
      filtered = filtered.filter((item) => {
        if (selectedTab === "featured" && item.tags?.includes("Popular")) return true
        if (selectedTab === "signature" && item.tags?.includes("Signature")) return true
        return false
      })
    }
    setFilteredItems(filtered)
  }, [menuItems, searchTerm, selectedCategory, selectedTab])

  // Handle adding a new menu item
  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !newItem.category) {
      showNotification("Please fill in all required fields", "error")
      return
    }

    try {
      const response = await fetch("/api/admin/menu-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to add menu item: ${response.statusText}`)
      }
      // const addedItem = await response.json(); // Get the item back from the server with ID
      // setMenuItems(prevItems => [...prevItems, addedItem]); // Add to local state
      await fetchMenuItems() // Refetch all items to get the latest state including the new one
      setIsAddDialogOpen(false)
      setNewItem({
        name: "",
        description: "",
        price: "",
        image: "/diverse-food-spread.png",
        category: "breakfast",
        section: "",
        tags: [],
      })
      showNotification("Menu item added successfully")
    } catch (error: any) {
      console.error("Error adding menu item:", error)
      showNotification(error.message || "Could not add menu item.", "error")
    }
  }

  // Handle editing a menu item
  const handleEditItem = async () => {
    if (!currentItem || !currentItem.id) return

    try {
      const response = await fetch(`/api/admin/menu-items/${currentItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentItem),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to update menu item: ${response.statusText}`)
      }
      // const updatedItem = await response.json();
      // setMenuItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
      await fetchMenuItems() // Refetch all items
      setIsEditDialogOpen(false)
      setCurrentItem(null)
      showNotification("Menu item updated successfully")
    } catch (error: any) {
      console.error("Error updating menu item:", error)
      showNotification(error.message || "Could not update menu item.", "error")
    }
  }

  // Handle deleting a menu item
  const handleDeleteItem = async () => {
    if (!currentItem || !currentItem.id) return

    try {
      const response = await fetch(`/api/admin/menu-items/${currentItem.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to delete menu item: ${response.statusText}`)
      }
      // setMenuItems(prevItems => prevItems.filter(item => item.id !== currentItem.id));
      await fetchMenuItems() // Refetch all items
      setIsDeleteDialogOpen(false)
      setCurrentItem(null)
      showNotification("Menu item deleted successfully")
    } catch (error: any) {
      console.error("Error deleting menu item:", error)
      showNotification(error.message || "Could not delete menu item.", "error")
    }
  }

  // Handle adding a tag
  const handleAddTag = (isNewItem = false) => {
    if (!newTag.trim()) return

    if (isNewItem) {
      setNewItem((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }))
    } else if (currentItem) {
      setCurrentItem({
        ...currentItem,
        tags: [...(currentItem.tags || []), newTag.trim()],
      })
    }
    setNewTag("")
  }

  // Handle removing a tag
  const handleRemoveTag = (tag: string, isNewItem = false) => {
    if (isNewItem) {
      setNewItem((prev) => ({
        ...prev,
        tags: prev.tags?.filter((t) => t !== tag) || [],
      }))
    } else if (currentItem) {
      setCurrentItem({
        ...currentItem,
        tags: currentItem.tags?.filter((t) => t !== tag) || [],
      })
    }
  }

  // Handle image selection
  const handleImageSelect = (imagePath: string, isNewItem = false) => {
    if (isNewItem) {
      setNewItem((prev) => ({ ...prev, image: imagePath }))
    } else if (currentItem) {
      setCurrentItem({ ...currentItem, image: imagePath })
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-foreground">Loading menu items...</p>
      </div>
    )
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
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <DropdownMenuItem onClick={() => setSelectedCategory("all")}>All Categories</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("breakfast")}>Breakfast</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("lunch")}>Lunch</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("dinner")}>Dinner</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("dessert")}>Dessert</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("drinks")}>Drinks</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("sides")}>Sides</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Menu Item
        </Button>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="bg-card">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            All Items
          </TabsTrigger>
          <TabsTrigger
            value="featured"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Featured
          </TabsTrigger>
          <TabsTrigger
            value="signature"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Signature
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <NextImage // Changed from Image to NextImage
                  src={item.image || "/diverse-food-spread.png"}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => (e.currentTarget.src = "/generic-food-item.png")}
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-foreground">{item.name}</CardTitle>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
                {item.category && (
                  <Badge variant="outline" className="mt-2 bg-secondary text-foreground border-border">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-secondary text-foreground border-border">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex justify-end gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCurrentItem(JSON.parse(JSON.stringify(item))) // Deep copy
                      setIsEditDialogOpen(true)
                    }}
                    className="border-primary text-primary hover:bg-secondary"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCurrentItem(item)
                      setIsDeleteDialogOpen(true)
                    }}
                    className="border-destructive text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-8 text-muted-foreground">
            No menu items found. Try adjusting your search or filters.
          </div>
        )}
      </div>

      {/* Add Menu Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-card text-foreground border-border max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground">Add New Menu Item</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill in the details for the new menu item.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  placeholder="Item name"
                  className="bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price" className="text-foreground">
                  Price *
                </Label>
                <Input
                  id="price"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  placeholder="$0.00"
                  className="bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-foreground">
                  Category *
                </Label>
                <select
                  id="category"
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                  required
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                  <option value="sides">Sides</option>
                </select>
              </div>
              <div>
                <Label htmlFor="section" className="text-foreground">
                  Section
                </Label>
                <Input
                  id="section"
                  value={newItem.section}
                  onChange={(e) => setNewItem({ ...newItem, section: e.target.value })}
                  placeholder="Menu section (e.g., 'From the Griddle')"
                  className="bg-background text-foreground"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-foreground">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  placeholder="Item description"
                  className="bg-background text-foreground"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="note" className="text-foreground">
                  Note (optional)
                </Label>
                <Input
                  id="note"
                  value={newItem.note || ""}
                  onChange={(e) => setNewItem({ ...newItem, note: e.target.value })}
                  placeholder="Additional note (e.g., 'Add bacon for $2')"
                  className="bg-background text-foreground"
                />
              </div>
              <div>
                <Label className="text-foreground">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {newItem.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-secondary text-foreground border-border">
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag, true)}
                        className="ml-1 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    className="bg-background text-foreground"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddTag(true)
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => handleAddTag(true)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-foreground">Image</Label>
              <div className="relative h-48 rounded-md overflow-hidden border border-border">
                <NextImage
                  src={newItem.image || "/diverse-food-spread.png"}
                  alt="Menu item preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => (e.currentTarget.src = "/food-preview.png")}
                />
              </div>
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("image-gallery-tab")?.click()}
                  className="border-primary text-primary hover:bg-secondary"
                >
                  <ImageIcon className="h-4 w-4 mr-2" /> Select from Gallery
                </Button>
                <Button type="button" variant="outline" className="border-primary text-primary hover:bg-secondary">
                  <Upload className="h-4 w-4 mr-2" /> Upload New Image
                </Button>
              </div>
              <Tabs defaultValue="recent" className="w-full">
                <TabsList className="bg-background">
                  <TabsTrigger
                    value="recent"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Recent
                  </TabsTrigger>
                  <TabsTrigger
                    id="image-gallery-tab"
                    value="gallery"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Gallery
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="recent" className="border border-border rounded-md p-2">
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {recentImagesForSelection.map((img, index) => (
                      <div
                        key={index}
                        className={`relative h-16 rounded-md overflow-hidden cursor-pointer border-2 ${newItem.image === img ? "border-primary" : "border-transparent"}`}
                        onClick={() => handleImageSelect(img, true)}
                      >
                        <NextImage
                          src={img || "/placeholder.svg"}
                          alt="Gallery image"
                          fill
                          className="object-cover"
                          sizes="64px"
                          onError={(e) => (e.currentTarget.src = "/generic-thumbnail.png")}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="gallery" className="border border-border rounded-md p-2">
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {galleryImagesForSelection.map((img, index) => (
                      <div
                        key={index}
                        className={`relative h-16 rounded-md overflow-hidden cursor-pointer border-2 ${newItem.image === img ? "border-primary" : "border-transparent"}`}
                        onClick={() => handleImageSelect(img, true)}
                      >
                        <NextImage
                          src={img || "/placeholder.svg"}
                          alt="Gallery image"
                          fill
                          className="object-cover"
                          sizes="64px"
                          onError={(e) => (e.currentTarget.src = "/generic-thumbnail.png")}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
              className="border-border text-foreground hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button onClick={handleAddItem} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Menu Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-card text-foreground border-border max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-foreground">Edit Menu Item</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Update the details for this menu item.
            </DialogDescription>
          </DialogHeader>
          {currentItem && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="edit-name"
                    value={currentItem.name}
                    onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                    placeholder="Item name"
                    className="bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="edit-price" className="text-foreground">
                    Price *
                  </Label>
                  <Input
                    id="edit-price"
                    value={currentItem.price}
                    onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })}
                    placeholder="$0.00"
                    className="bg-background text-foreground"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="edit-category" className="text-foreground">
                    Category *
                  </Label>
                  <select
                    id="edit-category"
                    value={currentItem.category}
                    onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                    required
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                    <option value="sides">Sides</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="edit-section" className="text-foreground">
                    Section
                  </Label>
                  <Input
                    id="edit-section"
                    value={currentItem.section || ""}
                    onChange={(e) => setCurrentItem({ ...currentItem, section: e.target.value })}
                    placeholder="Menu section (e.g., 'From the Griddle')"
                    className="bg-background text-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-description" className="text-foreground">
                    Description
                  </Label>
                  <Textarea
                    id="edit-description"
                    value={currentItem.description}
                    onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                    placeholder="Item description"
                    className="bg-background text-foreground"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-note" className="text-foreground">
                    Note (optional)
                  </Label>
                  <Input
                    id="edit-note"
                    value={currentItem.note || ""}
                    onChange={(e) => setCurrentItem({ ...currentItem, note: e.target.value })}
                    placeholder="Additional note (e.g., 'Add bacon for $2')"
                    className="bg-background text-foreground"
                  />
                </div>
                <div>
                  <Label className="text-foreground">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {currentItem.tags?.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-secondary text-foreground border-border">
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      className="bg-background text-foreground"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleAddTag()
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => handleAddTag()}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Label className="text-foreground">Image</Label>
                <div className="relative h-48 rounded-md overflow-hidden border border-border">
                  <NextImage
                    src={currentItem.image || "/diverse-food-spread.png"}
                    alt="Menu item preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => (e.currentTarget.src = "/food-preview.png")}
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("edit-image-gallery-tab")?.click()}
                    className="border-primary text-primary hover:bg-secondary"
                  >
                    <ImageIcon className="h-4 w-4 mr-2" /> Select from Gallery
                  </Button>
                  <Button type="button" variant="outline" className="border-primary text-primary hover:bg-secondary">
                    <Upload className="h-4 w-4 mr-2" /> Upload New Image
                  </Button>
                </div>
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="bg-background">
                    <TabsTrigger
                      value="recent"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Recent
                    </TabsTrigger>
                    <TabsTrigger
                      id="edit-image-gallery-tab"
                      value="gallery"
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Gallery
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="border border-border rounded-md p-2">
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {recentImagesForSelection.map((img, index) => (
                        <div
                          key={index}
                          className={`relative h-16 rounded-md overflow-hidden cursor-pointer border-2 ${currentItem.image === img ? "border-primary" : "border-transparent"}`}
                          onClick={() => handleImageSelect(img)}
                        >
                          <NextImage
                            src={img || "/placeholder.svg"}
                            alt="Gallery image"
                            fill
                            className="object-cover"
                            sizes="64px"
                            onError={(e) => (e.currentTarget.src = "/generic-thumbnail.png")}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="gallery" className="border border-border rounded-md p-2">
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {galleryImagesForSelection.map((img, index) => (
                        <div
                          key={index}
                          className={`relative h-16 rounded-md overflow-hidden cursor-pointer border-2 ${currentItem.image === img ? "border-primary" : "border-transparent"}`}
                          onClick={() => handleImageSelect(img)}
                        >
                          <NextImage
                            src={img || "/placeholder.svg"}
                            alt="Gallery image"
                            fill
                            className="object-cover"
                            sizes="64px"
                            onError={(e) => (e.currentTarget.src = "/generic-thumbnail.png")}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
              className="border-border text-foreground hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button onClick={handleEditItem} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Save className="h-4 w-4 mr-2" /> Save Changes
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
              Are you sure you want to delete this menu item? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {currentItem && (
            <div className="py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <NextImage
                    src={currentItem.image || "/diverse-food-spread.png"}
                    alt={currentItem.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    onError={(e) => (e.currentTarget.src = "/generic-food-item.png")}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{currentItem.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentItem.price}</p>
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
              onClick={handleDeleteItem}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4 mr-2" /> Delete Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
