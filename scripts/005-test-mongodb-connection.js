// File: /scripts/005-test-mongodb-connection.js
// This script tests the MongoDB connection without creating any data.

const mongoose = require("mongoose")

// Replace this with your actual MongoDB URI
const MONGODB_URI = "mongodb+srv://PallimanOG:G0dsn1p3r$@cluster0.lfhcg1c.mongodb.net/restaurant"

// Check if the URI has been replaced
if (MONGODB_URI === "mongodb+srv://PallimanOG:G0dsn1p3r$@cluster0.lfhcg1c.mongodb.net/restaurant") {
  console.error("ERROR: Please replace 'REPLACE_WITH_YOUR_MONGODB_URI' with your actual MongoDB connection string.")
  console.error("Your MongoDB URI should look like: mongodb+srv://username:password@cluster.mongodb.net/database_name")
  process.exit(1)
}

async function testConnection() {
  try {
    console.log("Testing MongoDB connection...")
    console.log("Attempting to connect...")

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("✅ Successfully connected to MongoDB!")

    // Test basic database operations
    const db = mongoose.connection.db
    const collections = await db.listCollections().toArray()

    console.log(`📊 Database name: ${db.databaseName}`)
    console.log(`📁 Number of collections: ${collections.length}`)

    if (collections.length > 0) {
      console.log("📋 Existing collections:")
      collections.forEach((collection) => {
        console.log(`   - ${collection.name}`)
      })
    } else {
      console.log("📋 No collections found (this is normal for a new database)")
    }
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:")
    console.error("Error:", error.message)

    if (error.message.includes("authentication failed")) {
      console.error("\n🔐 Authentication Error: Check your username and password in the connection string.")
    } else if (error.message.includes("ENOTFOUND")) {
      console.error("\n🌐 Network Error: Check your cluster URL and network connection.")
    } else if (error.message.includes("bad auth")) {
      console.error("\n🔑 Bad Authentication: Verify your database credentials.")
    }
  } finally {
    await mongoose.disconnect()
    console.log("🔌 Disconnected from MongoDB.")
  }
}

testConnection()
