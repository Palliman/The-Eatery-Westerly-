import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import MenuItem from "@/models/MenuItem"

export async function GET() {
  // IMPORTANT: Add authentication and authorization checks here!
  await dbConnect()

  try {
    const menuItems = await MenuItem.find({}).sort({ createdAt: -1 })
    return NextResponse.json(menuItems)
  } catch (error: any) {
    console.error("API error fetching menu items:", error)
    return NextResponse.json({ error: "Error fetching menu items" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  // IMPORTANT: Add authentication and authorization checks here!
  await dbConnect()

  try {
    const body = await request.json()
    const menuItem = await MenuItem.create(body)
    return NextResponse.json(menuItem, { status: 201 })
  } catch (error: any) {
    console.error("API error creating menu item:", error)
    // Handle validation errors specifically
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Error creating menu item" }, { status: 500 })
  }
}
