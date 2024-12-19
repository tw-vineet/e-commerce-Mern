import { Request, Response, NextFunction } from "express";
import User, { createUser, getUserDetailsByEmail } from "../models/Users.js";
import { getDecryptedPassword, getEncryptedPassword } from "../helper/services/crypto.js";
import { string } from "joi";
import { AlreadyExistError, NotFoundError, UnAuthorizedError, ValidationError } from "../middleware/errorHandler.js";
import { generateJwtToken } from "../helper/services/jwtToken.js";
import { jwtCredential } from "../DataTypes/dataTypes.js";
import { messages } from "../helper/utils/messages.js";

const { USER_REGISTERED, USER_NOT_FOUND, INCORRECT_PASSWORD, LOGIN_SUCCESS, USER_WITH_EMAIL_EXIST } = messages;
const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const userDetails = await getUserDetailsByEmail(email, next);
        if (userDetails) {
            const error = {
                email: USER_WITH_EMAIL_EXIST
            }
            return next(new ValidationError(error))
        }

        const encryptedPassword = await getEncryptedPassword(password, next);
        const values = {
            ...req.body,
            password: encryptedPassword,
        };

        await createUser(values, next);
        res.status(201).json({
            status: true,
            statusCode: 200,
            message: USER_REGISTERED,
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
            return next(new NotFoundError(USER_NOT_FOUND))
        };

        const decriptedPassword = await getDecryptedPassword(userDetails.password, next);
        if (decriptedPassword !== password) {
            return next(new UnAuthorizedError(INCORRECT_PASSWORD))
        };

        const credential: jwtCredential = {
            id: userDetails._id,
            isAdmin: userDetails.isAdmin || false
        };

        const accessToken = await generateJwtToken(credential, next);

        res.status(200).json({
            status: true,
            statusCode: 200,
            message: LOGIN_SUCCESS,
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