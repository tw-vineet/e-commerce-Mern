import express from 'express';
import { controllers } from "../controllers/index.js";

const Router = express.Router();
const { sellerController } = controllers;

//Routes
Router.post("/add-product", sellerController.addProduct);

const sellerRouter = Router;
export { sellerRouter };