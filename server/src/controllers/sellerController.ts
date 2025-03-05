import { Request, Response, NextFunction } from "express";
import Product from "../models/Products.js";
import { messages } from "../helper/utils/messages.js";
import mongoose from "mongoose";
import { getObjectIds } from "../helper/utils/HelperFunctions.js";

const { PRODUCT_ADDED } = messages
const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categories = [], tags = [] } = req.body as { categories?: string | string[], tags?: string | string[] };
        const formattedCategories = Array.isArray(categories) ? categories : [categories];

        const categoriesId = getObjectIds(formattedCategories);
        const product = {
            ...req.body,
            seller: req.user.id,
            categories: categoriesId,
        };

        const newProduct = new Product(product)
        const savedProduct = await newProduct.save();

        res.status(200).json({
            status: true,
            statusCode: 200,
            message: PRODUCT_ADDED,
            data: savedProduct
        });

    } catch (error) {
        next(error)
    }
}
export const sellerController = {
    addProduct
}