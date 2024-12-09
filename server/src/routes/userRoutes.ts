
import express from 'express';
import { controllers } from '../controllers/index.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { updateUserValidation } from '../validations/validation.js';
import { checkAdmin } from '../middleware/checkAdmin.js';

const Router = express.Router();
const { userController } = controllers;

//Routes
Router.post("/user-details", verifyToken, userController.userDetails);
Router.post("/update-user-details", verifyToken, updateUserValidation, userController.updateUserDetails);
Router.post("/user-list", verifyToken, checkAdmin, userController.userList);
Router.post("/delete-user", verifyToken, checkAdmin, userController.deleteUser);

const userRouter = Router;
export { userRouter };
