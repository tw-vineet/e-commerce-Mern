import express from 'express';
import { controllers } from '../controllers/index.js';
import { categoryValidation } from '../validations/validation.js';
import { verifyTokenAndAdmin } from '../middleware/verifyTokenAndAdmin.js';

const Router = express.Router();
const { adminController } = controllers;

//Routes
Router.post("/add-category", verifyTokenAndAdmin, categoryValidation, adminController.addCategory);
Router.post("/category-list", verifyTokenAndAdmin, categoryValidation, adminController.categoryList);

const adminRouter = Router;
export { adminRouter };