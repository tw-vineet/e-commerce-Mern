import { Request, Response, NextFunction } from "express";
import User, { getUserDetails, updateUser } from "../models/Users.js";
import { uploadImageToCloudinary } from "../helper/utils/imageUpload.js";
import { UploadedImage } from "../DataTypes/dataTypes.js";

const userDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.user;

        const userDetails = await getUserDetails(userId, next);
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: userDetails,
            message: "User details",
        });
    } catch (error) {
        next(error)
    }
};

const updateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    let cloudnaryResult: UploadedImage[] = []
    try {
        const { userId } = req.user;
        const imageFile = req.files?.profileImage;

        if (imageFile) {
            const result = await uploadImageToCloudinary(imageFile, next);
            cloudnaryResult = result || []     //In case if it returns undefined
        };

        const updatingData = {
            ...req.body,
            profileImage: cloudnaryResult[0]?.secure_url || ""
        };

        const updatedUser = await updateUser(userId, updatingData, next);
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: updatedUser,
            message: "User details updated successfully",
        });
    } catch (error) {
        next(error)
    }
};

export const userController = {
    userDetails,
    updateUserDetails
}