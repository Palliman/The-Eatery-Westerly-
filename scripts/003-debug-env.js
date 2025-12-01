// File: /scripts/003-debug-env.js
// This script helps debug environment variable access.

console.log("--- Environment Variable Debug Script ---")

const mongoUri = process.env.MONGODB_URI

if (mongoUri) {
  console.log("SUCCESS: MONGODB_URI is accessible in this script.")
  console.log("MONGODB_URI length:", mongoUri.length)
  // For security, we are not printing the full MONGODB_URI value here.
  // If you need to verify the start or end of the URI, you can uncomment and modify the next line carefully:
  // console.log("MONGODB_URI starts with:", mongoUri.substring(0, 15) + "...");
} else {
  console.error("ERROR: MONGODB_URI is NOT accessible in this script's environment.")
}

console.log("\n--- Available Environment Variables (Keys Only) ---")
const envKeys = Object.keys(process.env)
if (envKeys.length > 0) {
  console.log(envKeys.join("\n"))
} else {
  console.log("No environment variables found.")
}

console.log("\n--- End of Debug Script ---")
