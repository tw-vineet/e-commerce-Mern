import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "./errorHandler.js";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const headers = req.headers.authorization;
        if (!headers) {
            return next(new NotFoundError("Access token required"))
        };

        const accessToken = headers.split(" ")[1]
        console.log("headers", headers);

        res.send(accessToken)
    } catch (error) {
        next(error)
    }
}