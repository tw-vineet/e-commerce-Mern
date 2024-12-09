import { Request, Response, NextFunction } from "express";

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {


        // res.status(201).json({
        //     status: true,
        //     statusCode: 200,
        //     message: "User registered successfully",
        // });
    } catch (error) {
        next(error)
    }
};