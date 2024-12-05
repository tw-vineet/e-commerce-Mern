import express from 'express';
import { controllers } from '../controllers/index.js';
import { verifyToken } from '../middleware/verifyToken.js';
const Router = express.Router();
const { userController } = controllers;
//Routes
Router.post("/user-details", verifyToken, userController.userDetails);
const userRouter = Router;
export { userRouter };
