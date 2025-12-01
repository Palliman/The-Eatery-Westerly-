import mongoose, { Schema, type Document } from "mongoose"

export interface IUser extends Document {
  username: string
  passwordHash?: string // In a real app, this would store a hashed password
  isAdmin: boolean
  email?: string
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true, index: true },
    // For a real application, store a HASHED password here.
    // The current demo auth uses client-side hardcoded credentials.
    // This field is for future database-backed authentication.
    passwordHash: { type: String },
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true, sparse: true }, // sparse allows multiple nulls if email is optional
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
