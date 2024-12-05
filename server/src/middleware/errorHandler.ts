import { Request, Response, NextFunction } from "express";

// base error class
export class BaseError extends Error {
    status: boolean;
    statusCode: number;

    constructor(message: string, status: boolean, statusCode: number) {
        super(message);
        this.status = status;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, BaseError.prototype);
    }
}

// 404 error class
export class NotFoundError extends BaseError {          // missing user input
    constructor(message: string) {
        super(message, false, 404);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
// Unauthorized error class
export class UnAuthorizedError extends BaseError {          // missing user input
    constructor(message: string) {
        super(message, false, 401);
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    }
}

// validation error class
export class ValidationError extends BaseError {
    errorData: Record<string, string>
    constructor(data: Record<string, string>) {
        super("Validation Error", false, 400);
        this.errorData = data;
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

// error handler middleware
export const errorHandler: any = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("error::", err)
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

    } if (err instanceof UnAuthorizedError) {
        return res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
        })
    }
    else {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: "Something went wrong"
        })
    }
}