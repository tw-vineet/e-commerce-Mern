import express from 'express';
import { loginValidation, signupValidation } from '../validations/validation.js';
import { controllers } from '../controllers/index.js';

const Router = express.Router();
const { authController } = controllers;

//Routes
Router.post("/signup", signupValidation, authController.signup);
Router.post("/login", loginValidation, authController.login);

const authRouter = Router;
export { authRouter };