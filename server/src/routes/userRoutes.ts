
import express from 'express';
import { controllers } from '../controllers/index.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { updateUserValidation } from '../validations/validation.js';
import { uploadImages } from '../middleware/uploadImages.js';

const Router = express.Router();
const { userController } = controllers;

//Routes
Router.post("/user-details", verifyToken, userController.userDetails);
Router.post("/update-user-details", verifyToken, updateUserValidation, uploadImages, userController.updateUserDetails);

const userRouter = Router;
export { userRouter };
