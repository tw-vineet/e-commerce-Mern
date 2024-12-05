import express from 'express';
import { authRouter } from "./authRouter.js";
import { userRouter } from './userRoutes.js';

const Router = express.Router();

Router.use("/auth", authRouter);
Router.use("/user", userRouter);

const Routes = Router;
export { Routes };