import express from 'express';
import { loginValidation, signupValidation } from '../validations/validation.js';
import { controllers } from '../controllers/index.js';
import upload from '../helper/services/multer.js';

const Router = express.Router();
const { authController } = controllers;

//Routes
Router.post("/signup", signupValidation, authController.signup);
Router.post("/login", loginValidation, authController.login);
// Router.post("/login", authController.login);
Router.post("/test", upload.single("image"), authController.test);
// Router.post("/test", upload.array("image", 10), authController.test);

const authRouter = Router;
export { authRouter };