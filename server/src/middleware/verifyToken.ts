import { Request, Response, NextFunction } from "express";
import { NotFoundError, UnAuthorizedError } from "./errorHandler.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { jwtCredential } from "../DataTypes/dataTypes.js";

dotenv.config();
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const headers = req.headers.authorization;
        if (!headers) {
            return next(new NotFoundError("Access token required"))
        };

        const accessToken: string = headers.split(" ")[1];
        const secretKey = process.env.JWT_TOKEN_SECRET_KEY;

        if (!secretKey) {
            throw new Error("JWT secret key is not configured in environment variables.");
        }
        if (!accessToken) {
            return next(new NotFoundError("Access token required"))
        }

        jwt.verify(accessToken, secretKey, (err, data) => {
            if (err) {
                if (err.name == "JsonWebTokenError") {
                    return next(new UnAuthorizedError("Invalid access token."))
                } else if (err.name == "TokenExpiredError") {
                    return next(new UnAuthorizedError("Token has been expired."))
                } else {
                    return next(new UnAuthorizedError("Something wrong with token."))
                }
            };

            // const user = data as jwtCredential;
            req.user = data as jwtCredential;
            next();
        })

    } catch (error) {
        next(error)
    }
}