import express from 'express';
import { controllers } from '../controllers/index.js';
import { categoryValidation } from '../validations/validation.js';
import { checkAdmin } from '../middleware/checkAdmin.js';
import { verifyToken } from '../middleware/verifyToken.js';

const Router = express.Router();
const { adminController } = controllers;

//Routes
Router.post("/add-category", verifyToken, checkAdmin, categoryValidation, adminController.addCategory);
Router.post("/category-list", verifyToken, checkAdmin, categoryValidation, adminController.categoryList);

const adminRouter = Router;
export { adminRouter };