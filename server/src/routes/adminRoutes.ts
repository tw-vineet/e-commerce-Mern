import express from 'express';
import { controllers } from '../controllers/index.js';
import { categoryValidation } from '../validations/validation.js';
import { verifyTokenAndAdmin } from '../middleware/verifyTokenAndAdmin.js';
import { uploadImages } from '../middleware/uploadImages.js';

const Router = express.Router();
const { adminController } = controllers;

//Routes
Router.post("/user-list", verifyTokenAndAdmin, adminController.userList);
Router.post("/delete-user", verifyTokenAndAdmin, adminController.deleteUser);
Router.post("/add-category", verifyTokenAndAdmin, categoryValidation, uploadImages, adminController.addCategory);
Router.post("/delete-product", verifyTokenAndAdmin, adminController.deleteProduct);

const adminRouter = Router;
export { adminRouter };