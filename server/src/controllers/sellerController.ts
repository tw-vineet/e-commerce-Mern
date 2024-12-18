import { Request, Response, NextFunction } from "express";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(req.body)
    } catch (error) {
        next(error)
    }
}
export const sellerController = {
    addProduct
}