import express from 'express';
import { authRouter } from "./authRouter.js";
import { userRouter } from './userRoutes.js';
import { adminRouter } from './adminRoutes.js';

const Router = express.Router();

Router.use("/auth", authRouter);
Router.use("/user", userRouter);
Router.use("/admin", adminRouter);

const Routes = Router;
export { Routes };