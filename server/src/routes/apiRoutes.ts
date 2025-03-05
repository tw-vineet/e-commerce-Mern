import express from 'express';
import { controllers } from '../controllers/index.js';

const { apiController } = controllers
const Router = express.Router();

//Routes
Router.post("/category-list", apiController.categoryList);
Router.post("/product-list", apiController.productList);
Router.post("/country-list", apiController.countryList);
Router.post("/product-details", apiController.productDetails);

const apiRouter = Router;
export { apiRouter };