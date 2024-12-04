import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import connectDB from './config/db/database.js';
import bodyParser from 'body-parser';
import { Routes } from './routes/index.js';
import { errorHandler } from './middleware/index.js';
import { NotFoundError } from './middleware/errorHandler.js';
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true, // Ensure this is enabled to use tempFilePath
    tempFileDir: '/tmp/' // Directory for storing temporary files
}));
//routes
app.use("/api", Routes);
app.use("*", (req, res, next) => {
    next(new NotFoundError("Invalid requested url"));
});
//Error handler middleware
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running at: http://localhost:${process.env.PORT}`);
});
