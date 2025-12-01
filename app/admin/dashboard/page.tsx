"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import AdminHeader from "@/components/admin/admin-header"
import AdminSidebar from "@/components/admin/admin-sidebar"
import MenuItemsManager from "@/components/admin/menu-items-manager"
import ImageGallery from "@/components/admin/image-gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("menu-items")

  useEffect(() => {
    // Redirect if not authenticated
    if (!isLoading && !user) {
      router.push("/admin/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
              <TabsTrigger
                value="menu-items"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Menu Items
              </TabsTrigger>
              <TabsTrigger
                value="image-gallery"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Image Gallery
              </TabsTrigger>
            </TabsList>
            <TabsContent value="menu-items">
              <MenuItemsManager />
            </TabsContent>
            <TabsContent value="image-gallery">
              <ImageGallery />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
