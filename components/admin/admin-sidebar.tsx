"use client"

import { Home, Menu, ImageIcon } from "lucide-react"
import Link from "next/link"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    { id: "menu-items", label: "Menu Items", icon: <Menu className="h-5 w-5" /> },
    { id: "image-gallery", label: "Image Gallery", icon: <ImageIcon className="h-5 w-5" /> },
  ]

  return (
    <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)]">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary text-foreground">
          <Home className="h-5 w-5 text-primary" />
          <span>Back to Website</span>
        </Link>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-4 px-2">MANAGEMENT</h3>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2 p-2 rounded-md ${
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
