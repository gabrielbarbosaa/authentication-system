import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  try {
    const uri = process.env.DATABASE_URL!;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("An error occurred while connecting to MongoDB", error);
  }
}