import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "./errorHandler.js";
import { verifyToken } from "./verifyToken.js";
import { messages } from "../helper/utils/messages.js";

const { UNAUTHORIZED_ACCESS } = messages;
export const verifyTokenAndAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await new Promise<void>((resolve, reject) => {
            verifyToken(req, res, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        const { isAdmin } = req.user;
        if (!isAdmin) {
            return next(new UnAuthorizedError(UNAUTHORIZED_ACCESS))
        }
        next();
    } catch (error) {
        next(error);
    }
}