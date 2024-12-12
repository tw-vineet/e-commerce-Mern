import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { messages } from "../helper/utils/messages.js";
import Category from "../models/Category.js";
import User from "../models/Users.js";
import { UploadedImage } from "../DataTypes/dataTypes.js";
import { uploadImageToCloudinary } from "../helper/utils/imageUpload.js";
import { ValidationError } from "../middleware/errorHandler.js";

const { CATEGORY_ADDED, CATEGORY_LIST, USER_DETAILS, USER_DELETED, ALREADY_EXIST } = messages;

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userIds }: { userIds: string[] } = req.body
        const objectIds = userIds.map((id: string) => new mongoose.Types.ObjectId(id));

        await User.updateMany(
            { _id: { $in: objectIds } },
            { $set: { isDeleted: false } }
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
        const allUserList = await User.find({ isAdmin: false });
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: allUserList,
            message: USER_DETAILS,
        });
        return;
    } catch (error) {
        next(error)
    }
};
const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    let cloudnaryResult: UploadedImage[] = []
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

        if (imageFile) {
            const result = await uploadImageToCloudinary(imageFile, next);
            cloudnaryResult = result || []                  //In case if it returns undefined
            payLoad.categoryIcon = cloudnaryResult[0]?.secure_url || ""
        };

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

const categoryList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryList = await Category.find();
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: categoryList,
            message: CATEGORY_LIST,
        });
    } catch (error) {
        next(error)
    }
};


export const adminController = {
    deleteUser,
    userList,
    addCategory,
    categoryList
}