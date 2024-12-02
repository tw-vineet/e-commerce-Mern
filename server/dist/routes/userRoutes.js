import express from 'express';
import { controllers } from '../controllers/index.js';
const Router = express.Router();
const { userController } = controllers;
//Routes
Router.post("/user-details", userController.userDetails);
const userRouter = Router;
export { userRouter };
