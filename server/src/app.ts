import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

import connectDB from './config/db/database.js';
import { authRouter } from './routes/authRouter.js';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler.js';
import { NotFoundError } from './Errors/errors.js';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true, // Ensure this is enabled to use tempFilePath
    tempFileDir: '/tmp/' // Directory for storing temporary files
}));

//routes
app.use("/api/auth", authRouter);
app.use("*", (req, res, next) => {
    next(new NotFoundError("Innvalid requested url"))
});

//Error handler middleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running at: http://localhost:${process.env.PORT}`);
});


