import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import MenuItem from "@/models/MenuItem"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  // IMPORTANT: Add authentication and authorization checks here!
  const { id } = params
  await dbConnect()

  try {
    const body = await request.json()
    const menuItem = await MenuItem.findByIdAndUpdate(id, body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on update
    })

    if (!menuItem) {
      return NextResponse.json({ error: "Menu item not found" }, { status: 404 })
    }

    return NextResponse.json(menuItem)
  } catch (error: any) {
    console.error(`API error updating menu item ${id}:`, error)
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Error updating menu item" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  // IMPORTANT: Add authentication and authorization checks here!
  const { id } = params
  await dbConnect()

  try {
    const deletedMenuItem = await MenuItem.findByIdAndDelete(id)

    if (!deletedMenuItem) {
      return NextResponse.json({ error: "Menu item not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Menu item deleted successfully" }, { status: 200 })
  } catch (error: any) {
    console.error(`API error deleting menu item ${id}:`, error)
    return NextResponse.json({ error: "Error deleting menu item" }, { status: 500 })
  }
}
