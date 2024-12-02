import { Request, Response, NextFunction } from "express";
import User, { createUser, getUserDetailsByEmail } from "../models/Users.js";
import { getDecryptedPassword, getEncryptedPassword } from "../helper/services/crypto.js";
import { string } from "joi";
import { NotFoundError, UnAuthorizedError } from "../middleware/errorHandler.js";
import { generateJwtToken } from "../helper/services/jwtToken.js";
import { jwtCredential } from "../DataTypes/dataTypes.js";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password } = req.body;
        const encryptedPassword = await getEncryptedPassword(password, next);
        const values = {
            ...req.body,
            password: encryptedPassword,
        };

        await createUser(values, next);
        res.status(201).json({
            status: true,
            statusCode: 200,
            message: "User registered successfully",
        });
    } catch (error) {
        next(error)
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const userDetails = await getUserDetailsByEmail(email, next);
        if (!userDetails) {
            return next(new NotFoundError("User with provided email not found"))
        };

        const decriptedPassword = await getDecryptedPassword(userDetails.password, next);
        if (decriptedPassword !== password) {
            return next(new UnAuthorizedError("Incorrect password"))
        };

        const credential: jwtCredential = {
            userId: userDetails._id,
            isAdmin: false
        };
        const accessToken = await generateJwtToken(credential, next);

        res.status(201).json({
            status: true,
            statusCode: 200,
            message: "You have been loggedin successfully",
            data: { accessToken }
        });

    } catch (error) {
        next(error)
    }
}

export const authController = {
    signup,
    login
}