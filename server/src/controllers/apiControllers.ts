import { Request, Response, NextFunction } from "express";
import Product from "../models/Products.js";
import { messages } from "../helper/utils/messages.js";
import Category from "../models/Category.js";
import Country from "../models/Country.js";
import { NotFoundError } from "../middleware/errorHandler.js";

const { CATEGORY_LIST, PRODUCT_LIST, COUNTRY_LIST, PRODUCT_DETAILS, PRODUCT_NOT_FOUND } = messages

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

const productList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const productList = await Product.aggregate([
        //     {
        //         $lookup: {
        //             from: "users",
        //             localField: "sellerId",
        //             foreignField: "_id",
        //             as: "seller"
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: "categories",
        //             localField: "categories",
        //             foreignField: "_id",
        //             as: "categories"
        //         }
        //     }
        // ]).sort({ createdAt: -1 })
        const productList = await Product.find()
            .populate('seller', 'firstName lastName email profileImage role')
            .populate('categories')
            .sort({ createdAt: -1 })

        res.status(200).json({
            status: true,
            statusCode: 200,
            data: productList,
            message: PRODUCT_LIST
        });

    } catch (error) {
        next(error)
    }
}

const productDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.body;
        const productDetails = await Product.findById(productId).populate("categories");

        if (!productDetails) {
            return next(new NotFoundError(PRODUCT_NOT_FOUND))
        }

        res.status(200).json({
            status: true,
            statusCode: 200,
            data: productDetails,
            message: PRODUCT_DETAILS,
        });
    } catch (error) {
        next(error)
    }
};

const countryList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countryList = await Country.find();
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: countryList,
            message: COUNTRY_LIST
        });

    } catch (error) {
        next(error)
    }
}

export const apiController = {
    categoryList,
    productList,
    countryList,
    productDetails
}