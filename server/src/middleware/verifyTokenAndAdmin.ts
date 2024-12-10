import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "./errorHandler.js";
import { verifyToken } from "./verifyToken.js";
import { messages } from "../helper/utils/messages.js";

const { UNAUTHORIZED_ACCESS } = messages;
export const verifyTokenAndAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await verifyToken(req, res, () => { });
        const { isAdmin } = req.user;
        if (isAdmin) {
            next();
        } else {
            next(new UnAuthorizedError(UNAUTHORIZED_ACCESS))
        }
    } catch (error) {
        next(error)
    }
}