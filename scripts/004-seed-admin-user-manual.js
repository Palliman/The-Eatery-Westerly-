// File: /scripts/004-seed-admin-user-manual.js
// This script allows manual input of MongoDB URI for seeding the admin user.

const mongoose = require("mongoose")

// Define a minimal User schema inline for the script
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

// For this manual version, you'll need to replace this with your actual MongoDB URI
// Format: mongodb+srv://username:password@cluster.mongodb.net/database_name
const MONGODB_URI = "mongodb+srv://PallimanOG:G0dsn1p3r$@cluster0.lfhcg1c.mongodb.net/restaurant"

// Check if the URI has been replaced
if (MONGODB_URI === "mongodb+srv://PallimanOG:G0dsn1p3r$@cluster0.lfhcg1c.mongodb.net/restaurant") {
  console.error("ERROR: Please replace 'REPLACE_WITH_YOUR_MONGODB_URI' with your actual MongoDB connection string.")
  console.error("Your MongoDB URI should look like: mongodb+srv://username:password@cluster.mongodb.net/database_name")
  process.exit(1)
}

async function seedAdminUser() {
  try {
    console.log("Attempting to connect to MongoDB...")
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Successfully connected to MongoDB.")

    const adminUsername = "shannon"
    const adminEmail = "shannon@theeatery.com"

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ username: adminUsername })

    if (existingAdmin) {
      console.log(`Admin user "${adminUsername}" already exists.`)
      if (existingAdmin.isAdmin !== true) {
        existingAdmin.isAdmin = true
        await existingAdmin.save()
        console.log(`Updated "${adminUsername}" to be an admin.`)
      }
      console.log("Admin user details:")
      console.log(`- Username: ${existingAdmin.username}`)
      console.log(`- Email: ${existingAdmin.email}`)
      console.log(`- Is Admin: ${existingAdmin.isAdmin}`)
      console.log(`- Created: ${existingAdmin.createdAt}`)
    } else {
      // Create new admin user
      const newAdmin = await User.create({
        username: adminUsername,
        passwordHash: "password_hash_placeholder_for_demo_auth", // Placeholder
        isAdmin: true,
        email: adminEmail,
      })
      console.log(`Admin user "${adminUsername}" created successfully.`)
      console.log("Admin user details:")
      console.log(`- Username: ${newAdmin.username}`)
      console.log(`- Email: ${newAdmin.email}`)
      console.log(`- Is Admin: ${newAdmin.isAdmin}`)
      console.log(`- Created: ${newAdmin.createdAt}`)
    }

    console.log("\nNOTE: The current login mechanism is still client-side (shannon/admin123).")
    console.log("This database entry is for future use when implementing proper authentication.")
  } catch (error) {
    console.error("Error seeding admin user:", error.message)
    if (error.name === "MongoServerError" && error.code === 11000) {
      console.error("This appears to be a duplicate key error. The user might already exist.")
    }
  } finally {
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB.")
  }
}

seedAdminUser()
