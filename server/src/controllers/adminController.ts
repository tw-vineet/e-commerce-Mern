import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { messages } from "../helper/utils/messages.js";
import Category from "../models/Category.js";
import User from "../models/Users.js";
import { UploadedImage } from "../DataTypes/dataTypes.js";
import { uploadImageToCloudinary } from "../helper/utils/imageUpload.js";
import { ValidationError } from "../middleware/errorHandler.js";
import { getObjectIds } from "../helper/utils/HelperFunctions.js";
import Product from "../models/Products.js";

const { CATEGORY_ADDED, CATEGORY_LIST, USER_DETAILS, USER_DELETED, ALREADY_EXIST, USER_LIST, PRODUCT_DELETED } = messages;

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userIds }: { userIds: string | string[] } = req.body;
        const idArray = Array.isArray(userIds) ? userIds : [userIds];
        const objectIds = getObjectIds(idArray);

        await User.updateMany(
            { _id: { $in: objectIds } },
            { $set: { isDeleted: true } }
        );

        res.status(200).json({
            status: true,
            statusCode: 200,
            message: USER_DELETED,
        });

    } catch (error) {
        next(error)
    }
}

const userList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allUserList = await User.find({ isAdmin: false }).sort({ createdAt: -1 });
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: allUserList,
            message: USER_LIST,
        });
        return;
    } catch (error) {
        next(error)
    }
};
const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payLoad = {
            ...req.body,
            categoryCode: req.body.categoryCode.toUpperCase(),
            categoryName: req.body.categoryName.charAt(0).toUpperCase() + req.body.categoryName.slice(1)
        };
        const { categoryName, categoryCode } = payLoad;
        const imageFile = req.files?.categoryIcon;

        //========Check for duplicate values==========
        const errors: Record<string, string> = {};
        const listWithName = await Category.findOne({ categoryName: categoryName });
        const listWithCode = await Category.findOne({ categoryCode: categoryCode });  //capatalized code

        if (listWithName) {
            errors.categoryName = `${categoryName}: ${ALREADY_EXIST}`
        }
        if (listWithCode) {
            errors.categoryCode = `${payLoad.categoryCode}: ${ALREADY_EXIST}`
        }
        if (listWithName || listWithCode) {
            return next(new ValidationError(errors))
        }
        // ========================================================

        const newCategory = new Category(payLoad);
        const addedCategory = await newCategory.save();
        res.status(201).json({
            status: true,
            statusCode: 201,
            data: addedCategory,
            message: CATEGORY_ADDED,
        });
    } catch (error) {
        next(error)
    }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productIds }: { productIds: string | string[] } = req.body;
        const idArray = Array.isArray(productIds) ? productIds : [productIds];
        const objectIds = getObjectIds(idArray);

        await Product.updateMany(
            { _id: { $in: objectIds } },
            { $set: { isDeleted: true } }
        );

        res.status(200).json({
            status: true,
            statusCode: 200,
            message: PRODUCT_DELETED,
        });

    } catch (error) {
        next(error)
    }
}

export const adminController = {
    deleteUser,
    userList,
    addCategory,
    deleteProduct
}