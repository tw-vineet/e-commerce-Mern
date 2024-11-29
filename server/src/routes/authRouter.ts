import express from 'express';
import { authController } from '../controllers/authController.js';
import { signupValidation } from '../validations/validation.js';

const Router = express.Router();

Router.post("/signup", signupValidation, authController.signup);

const authRouter = Router

export { authRouter };