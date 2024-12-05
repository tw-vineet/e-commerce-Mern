import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./verifyToken.js";
import { UnAuthorizedError } from "./errorHandler.js";

export const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        verifyToken(req, res, () => {
            const { isAdmin, userId } = req.user
            console.log("req.usersss", req.user);
            if (isAdmin) {
                next()
            } else {
                next(new UnAuthorizedError("Unathorizes access"))
            }
        })

    } catch (error) {
        next(error)
    }
}