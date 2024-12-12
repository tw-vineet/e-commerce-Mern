import express from 'express';
import url from 'url'
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import connectDB from './config/db/database.js';
import bodyParser from 'body-parser';
import { Routes } from './routes/index.js';

import { errorHandler } from './middleware/index.js';
import { NotFoundError } from './middleware/errorHandler.js';
import { logger } from './helper/services/logger.js';
import { messages } from './helper/utils/messages.js';

const { INVALID_REQUESTED_URL, SERVER_RUNNING_AT } = messages;
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
app.use("/api", Routes);
app.use("*", (req, res, next) => {
    next(new NotFoundError(INVALID_REQUESTED_URL))
});

//Error handler middleware
app.use(errorHandler);
app.listen(process.env.PORT, () => {
    connectDB();
    logger.info(`${SERVER_RUNNING_AT}: http://localhost:${process.env.PORT}`)
});

