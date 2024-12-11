import { Request, Response, NextFunction } from "express";
import { NotFoundError, UnAuthorizedError } from "./errorHandler.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { jwtCredential } from "../DataTypes/dataTypes.js";
import { messages } from "../helper/utils/messages.js";

dotenv.config();
const { ACCESS_TOKEN_REQUIRED, JWT_NOT_CONGIGURED, INVALID_ACCESS_TOKEN, TOKEN_EXPIRED,
    SOMETHING_WRONG_WITH_TOKEN } = messages
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body;
        const headers = req.headers.authorization;
        if (!headers) {
            return next(new NotFoundError(ACCESS_TOKEN_REQUIRED))
        };

        const accessToken: string = headers.split(" ")[1];
        const secretKey = process.env.JWT_TOKEN_SECRET_KEY;

        if (!secretKey) {
            throw new Error(JWT_NOT_CONGIGURED);
        }
        if (!accessToken) {
            return next(new NotFoundError(ACCESS_TOKEN_REQUIRED))
        }

        jwt.verify(accessToken, secretKey, (err, data) => {
            if (err) {
                if (err.name == "JsonWebTokenError") {
                    return next(new UnAuthorizedError(INVALID_ACCESS_TOKEN))
                } else if (err.name == "TokenExpiredError") {
                    return next(new UnAuthorizedError(TOKEN_EXPIRED))
                } else {
                    return next(new UnAuthorizedError(SOMETHING_WRONG_WITH_TOKEN))
                }
            };
            req.user = data as jwtCredential;
            next();
        })

    } catch (error) {
        next(error)
    }
}