import { Request, Response, NextFunction } from "express";
import User, { getUserDetails, updateUser } from "../models/Users.js";
import { uploadImageToCloudinary } from "../helper/utils/imageUpload.js";
import { UploadedImage } from "../DataTypes/dataTypes.js";
import { NotFoundError, ValidationError } from "../middleware/errorHandler.js";

import { getDecryptedPassword, getEncryptedPassword } from "../helper/services/crypto.js";
import { messages } from "../helper/utils/messages.js";

const { USER_DETAILS, USER_NOT_FOUND, INCORRECT_PASSWORD, USER_DETAIL_UPDATED, INCORRECT_CURRENT_PASSWORD } = messages;
const userDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = req.user.id;
        // If admin, allow fetching other user details
        if (req.user.isAdmin === true && req.body.userId) {
            userId = req.body.userId;
        };

        const userDetails = await getUserDetails(userId, next);
        if (!userDetails) {
            return next(new NotFoundError(USER_NOT_FOUND))
        }

        const { password, ...userData } = userDetails.toObject(); // user details without password
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: userData,
            message: USER_DETAILS,
        });
    } catch (error) {
        next(error)
    }
};

const updateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, currentPassword, newPassword, isPasswordChange } = req.body;
        const updatingData = {
            ...req.body
        }
        const userDetails = await getUserDetails(userId, next);

        if (!userDetails) {
            return next(new NotFoundError(USER_NOT_FOUND))
        }

        if (isPasswordChange) {
            const decryptedPassword = await getDecryptedPassword(userDetails.password, next);
            if (decryptedPassword !== currentPassword) {
                const errors: Record<string, string> = {};
                errors.currentPassword = `${INCORRECT_CURRENT_PASSWORD}`
                return next(new ValidationError(errors))
            };
            const encryptedPassword = await getEncryptedPassword(newPassword, next);
            updatingData.password = encryptedPassword;
        }

        const updatedUser = await updateUser(userId, updatingData, next);
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: updatedUser,
            message: USER_DETAIL_UPDATED,
        });
    } catch (error) {
        next(error)
    }
};

export const userController = {
    userDetails,
    updateUserDetails,
}