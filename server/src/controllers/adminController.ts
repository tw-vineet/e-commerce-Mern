import { Request, Response, NextFunction } from "express";
import Category from "../models/Category.js";

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newCategory = new Category(req.body)
        const addedCategory = await newCategory.save();

        res.status(201).json({
            status: true,
            statusCode: 201,
            data: addedCategory,
            message: "New category added successfully",
        });
    } catch (error) {
        next(error)
    }
};

const categoryList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryList = await Category.find();
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: categoryList,
            message: "Category list",
        });
    } catch (error) {
        next(error)
    }
};

export const adminController = {
    addCategory,
    categoryList
}