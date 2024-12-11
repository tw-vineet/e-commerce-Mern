import mongoose from "mongoose";
import dotenv from 'dotenv';
import { logger } from "../../helper/services/logger.js";
import { messages } from "../../helper/utils/messages.js";

dotenv.config();
const { DATABASE_CONNECTED, DATABASE_CONNECTION_ERROR } = messages;
const MONGO_URI: string = process.env.MONGO_URI || "localhost";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        logger.info(DATABASE_CONNECTED);

    } catch (error) {
        logger.error(DATABASE_CONNECTION_ERROR, error);
        throw new Error(DATABASE_CONNECTION_ERROR);
    }
}

export default connectDB;
