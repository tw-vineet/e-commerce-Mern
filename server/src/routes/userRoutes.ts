
import express from 'express';
import { controllers } from '../controllers/index.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { updateUserValidation } from '../validations/validation.js';
import { verifyTokenAndAdmin } from '../middleware/verifyTokenAndAdmin.js';

const Router = express.Router();
const { userController } = controllers;

//Routes
Router.post("/user-details", verifyToken, userController.userDetails);
Router.post("/update-user-details", verifyToken, updateUserValidation, userController.updateUserDetails);
Router.post("/user-list", verifyTokenAndAdmin, userController.userList);
Router.post("/delete-user", verifyTokenAndAdmin, userController.deleteUser);

const userRouter = Router;
export { userRouter };
