import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoDB connected ${db.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};



