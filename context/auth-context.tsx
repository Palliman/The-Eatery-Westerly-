"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  username: string
  isAdmin: boolean
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // IMPORTANT SECURITY NOTE:
  // The authentication logic below uses hardcoded credentials ("shannon" / "admin123")
  // and stores user information in localStorage. This is for DEMONSTRATION PURPOSES ONLY
  // in a simplified environment.
  //
  // !!! DO NOT USE THIS IN A PRODUCTION APPLICATION !!!
  //
  // In a real application, you MUST implement secure authentication:
  // - Use a proper backend authentication system (e.g., OAuth, JWT with a secure server).
  // - Never hardcode credentials in client-side code.
  // - Store session tokens securely (e.g., HTTP-only cookies).
  // - Validate credentials against a secure user database.
  const login = async (username: string, password: string) => {
    // Simple authentication - in a real app, this would be an API call
    if (username === "shannon" && password === "admin123") {
      const user = { username, isAdmin: true }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
