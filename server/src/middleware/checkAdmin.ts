import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "./errorHandler.js";

export const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { isAdmin } = req.user;
        if (isAdmin) {
            next()
        } else {
            next(new UnAuthorizedError("Unathorized access"))
        }
    } catch (error) {
        next(error)
    }
}