import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// console.log("MONGO_URI:", process.env.MONGO_URI);
const MONGO_URI: string = process.env.MONGO_URI || "localhost";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully.");

    } catch (error) {
        console.log("Database connection error", error);
        throw new Error("Database connection error")
    }
}

export default connectDB;
