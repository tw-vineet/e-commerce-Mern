import express from 'express';
import { controllers } from "../controllers/index.js";
import { productValidation } from '../validations/validation.js';
import { uploadImages, verifyToken } from '../middleware/index.js';

const Router = express.Router();
const { sellerController } = controllers;

//Routes
Router.post("/add-product", verifyToken, productValidation, uploadImages, sellerController.addProduct);

const sellerRouter = Router;
export { sellerRouter };