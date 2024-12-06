import mongoose from "mongoose";
import dotenv from 'dotenv';
import { logger } from "../../helper/services/logger.js";

dotenv.config();
const MONGO_URI: string = process.env.MONGO_URI || "localhost";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        logger.info("Database connected successfully.");

    } catch (error) {
        logger.error("Database connection error", error);
        throw new Error("Database connection error");
    }
}

export default connectDB;
