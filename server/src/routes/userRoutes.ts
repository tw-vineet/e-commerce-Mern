
import express from 'express';
import { controllers } from '../controllers/index.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { updateUserValidation } from '../validations/validation.js';

const Router = express.Router();
const { userController } = controllers;

//Routes
Router.post("/user-details", verifyToken, userController.userDetails);
Router.post("/update-user-details", verifyToken, updateUserValidation, userController.updateUserDetails);
Router.get("/delete-user", userController.deleteUser);

const userRouter = Router;
export { userRouter };