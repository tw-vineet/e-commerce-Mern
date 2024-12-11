import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { messages } from "../helper/utils/messages.js";
import Category from "../models/Category.js";
import User from "../models/Users.js";

const { CATEGORY_ADDED, CATEGORY_LIST, USER_DETAILS, USER_DELETED } = messages;

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userIds }: { userIds: string[] } = req.body
        const objectIds = userIds.map((id: string) => new mongoose.Types.ObjectId(id));

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
    try {
        const newCategory = new Category(req.body)
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