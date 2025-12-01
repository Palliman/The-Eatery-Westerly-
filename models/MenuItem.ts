import mongoose, { Schema, type Document } from "mongoose"

export interface IMenuItem extends Document {
  name: string
  description?: string
  price: string
  image?: string
  category: string
  section?: string
  tags?: string[]
  note?: string
}

const MenuItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true }, // For financial calculations, consider using Number or mongoose-currency type
    image: { type: String, default: "/diverse-food-spread.png" },
    category: { type: String, required: true, index: true },
    section: { type: String },
    tags: { type: [String], index: true },
    note: { type: String },
  },
  { timestamps: true }, // Adds createdAt and updatedAt timestamps
)

// Prevent model recompilation in Next.js dev environment
export default mongoose.models.MenuItem || mongoose.model<IMenuItem>("MenuItem", MenuItemSchema)
