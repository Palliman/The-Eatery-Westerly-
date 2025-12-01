// This script is for Node.js environment to seed the admin user.
// Make sure you have MONGODB_URI in your environment variables.

const mongoose = require("mongoose")

// Define a minimal User schema inline for the script, or ensure models/User.js can be required.
// For simplicity in this script, we'll define it inline.
// In a more complex setup, you might use ts-node or compile your TS models to JS.
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String }, // Placeholder for hashed password
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true, sparse: true },
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model("User", userSchema)

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is not set.")
  process.exit(1)
}

async function seedAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Successfully connected to MongoDB.")

    const adminUsername = "shannon"
    const adminEmail = "shannon@example.com" // Example email

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ username: adminUsername })

    if (existingAdmin) {
      console.log(`Admin user "${adminUsername}" already exists.`)
      if (existingAdmin.isAdmin !== true) {
        existingAdmin.isAdmin = true
        await existingAdmin.save()
        console.log(`Updated "${adminUsername}" to be an admin.`)
      }
    } else {
      // IMPORTANT: In a real application, you would hash the password here.
      // const hashedPassword = await bcrypt.hash('admin123', 10);
      // For this demo, as auth is client-side, we're just creating the user record.
      await User.create({
        username: adminUsername,
        // passwordHash: hashedPassword, // Store the HASHED password
        passwordHash: "password_hash_placeholder_for_demo_auth", // Placeholder
        isAdmin: true,
        email: adminEmail,
      })
      console.log(`Admin user "${adminUsername}" created successfully.`)
      console.log("NOTE: The current login mechanism is still client-side (shannon/admin123).")
      console.log("This database entry is for future use or reference.")
    }
  } catch (error) {
    console.error("Error seeding admin user:", error)
  } finally {
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB.")
  }
}

seedAdminUser()
