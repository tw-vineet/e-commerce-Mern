import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import connectDB from './config/db/database.js';
import { authRouter } from './routes/authRouter.js';
import bodyParser from 'body-parser';
import { Routes } from './routes/index.js';

import { errorHandler } from './middleware/index.js';
import { NotFoundError } from './middleware/errorHandler.js';
import { logger } from './helper/services/logger.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true, // Ensure this is enabled to use tempFilePath
    tempFileDir: '/tmp/' // Directory for storing temporary files
}));

//routes
app.use("/api", Routes)
app.use("*", (req, res, next) => {
    next(new NotFoundError("Invalid requested url"))
});

//Error handler middleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    connectDB();
    logger.info(`Server is running at: http://localhost:${process.env.PORT}`)
});
