import mongoose from "mongoose"
import "dotenv/config"

await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017")
console.log("MongoDB connected");