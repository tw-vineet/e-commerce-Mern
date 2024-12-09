import { Request, Response, NextFunction } from "express";
import User, { getUserDetails, updateUser } from "../models/Users.js";
import { uploadImageToCloudinary } from "../helper/utils/imageUpload.js";
import { UploadedImage } from "../DataTypes/dataTypes.js";
import { NotFoundError } from "../middleware/errorHandler.js";
import mongoose from "mongoose";
import { string } from "joi";
import { getDecryptedPassword, getEncryptedPassword } from "../helper/services/crypto.js";

const userDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;

        const userDetails = await getUserDetails(id, next);
        if (!userDetails) {
            return next(new NotFoundError("User not found"))
        }

        const { password, ...safeUserDetails } = userDetails.toObject(); // user details without password
        console.log("safeUserDetails", safeUserDetails);

        res.status(200).json({
            status: true,
            statusCode: 200,
            data: safeUserDetails,
            message: "User details",
        });
    } catch (error) {
        next(error)
    }
};

const updateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    let cloudnaryResult: UploadedImage[] = []
    try {
        const { userId, currentPassword, newPassword, isPasswordChange } = req.body;
        const imageFile = req.files?.profileImage;

        const updatingData = {
            ...req.body
        }

        const userDetails = await getUserDetails(userId, next);
        if (!userDetails) {
            return next(new NotFoundError("User not found"))
        }

        if (isPasswordChange == "true") {
            const decriptedPassword = await getDecryptedPassword(userDetails.password, next);
            if (decriptedPassword !== currentPassword) {
                return next(new NotFoundError("Incorrect password"))
            };
            const encryptedPassword = await getEncryptedPassword(newPassword, next);
            updatingData.password = encryptedPassword;
        }

        if (imageFile) {
            const result = await uploadImageToCloudinary(imageFile, next);
            cloudnaryResult = result || []                  //In case if it returns undefined
            updatingData.profileImage = cloudnaryResult[0]?.secure_url || ""
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

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userIds }: { userIds: string[] } = req.body
        const objectIds = userIds.map((id: string) => new mongoose.Types.ObjectId(id));

        const response = await User.deleteMany({ _id: { $in: objectIds } });
        res.status(200).json({
            status: true,
            statusCode: 200,
            message: "User deleted successfully",
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
            message: "User details",
        });
    } catch (error) {
        next(error)
    }
};

export const userController = {
    userDetails,
    updateUserDetails,
    deleteUser,
    userList
}