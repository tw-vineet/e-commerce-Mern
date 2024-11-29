import { Request, Response, NextFunction } from "express";
import { BaseError, NotFoundError, ValidationError } from "../Errors/errors.js";

// error handler middleware
export const errorHandler: any = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("error:", err)
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
            data: err.errorData
        })
    } if (err instanceof NotFoundError) {
        return res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
        })

    } else if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: 'Something went wrong'
        })

    }
}

// export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
//     // console.log("Error:", error);
//     console.log("message:", error.message);
//     // console.log("status:", error.status);
//     // console.log("statusCode:", error.statusCode);

//     // let status: boolean;
//     // let statusCode: number;
//     // let message: string;

//     // return next({
//     //     status: false,
//     //     statusCode: error.statusCode || 500,
//     //     message: error.message,
//     //     errors: error.errors,
//     //     errorStack: error.errorStack,
//     // })
// }