import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { baseMetadata } from "./metadata"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import MaintenanceOverlay from "@/components/maintenance-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = baseMetadata

// Set this to true to enable the maintenance overlay, false to disable
const IS_MAINTENANCE_MODE = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {IS_MAINTENANCE_MODE && <MaintenanceOverlay />}
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
