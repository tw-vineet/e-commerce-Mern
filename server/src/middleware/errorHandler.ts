import { Request, Response, NextFunction } from "express";
import { ErrorRequestHandler } from 'express';
import { logger } from "../helper/services/logger.js";
import { messages } from "../helper/utils/messages.js";
import { arrayObject, errorResponse, ExtendedError } from "../DataTypes/dataTypes.js";

const { VALIDATION_ERROR, SOMETHING_WENT_WRONG, IS_ALREADY_TAKEN_FOR } = messages;
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
export class NotFoundError extends BaseError {
    constructor(message: string) {
        super(message, false, 404);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
// Unauthorized error class
export class UnAuthorizedError extends BaseError {
    constructor(message: string) {
        super(message, false, 401);
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    }
}

// Already exist error class
export class AlreadyExistError extends BaseError {
    constructor(message: string) {
        super(message, false, 400);
        Object.setPrototypeOf(this, AlreadyExistError.prototype);
    }
}

// validation error class
export class ValidationError extends BaseError {           // missing user input
    errorData: Record<string, string>
    constructor(data: Record<string, string>) {
        super(VALIDATION_ERROR, false, 400);
        this.errorData = data;
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

// error handler middleware
export const errorHandler = (err: ExtendedError, req: Request, res: Response, next: NextFunction) => {
    logger.error("error::", err)
    if (err instanceof ValidationError) {
        res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
            data: err.errorData
        })
        return;
    }

    if (err instanceof NotFoundError || err instanceof UnAuthorizedError || err instanceof AlreadyExistError) {
        res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
        })
        return;
    }

    if (err.code === 11000) {
        const key = Object.keys(err.errorResponse.keyValue)[0];
        const value = Object.values(err.errorResponse.keyValue)[0];
        let errorData = {
            [key]: `${value} ${IS_ALREADY_TAKEN_FOR} ${key}.`
        }
        res.status(400).json({
            status: false,
            statusCode: 400,
            data: errorData,
            message: ValidationError,
        })
        return
    }

    if (err.stack) {
        const cleanedStack = err.stack
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.startsWith('at'))
            .join('\n');

        res.status(500).json({
            status: false,
            statusCode: 500,
            message: err.message,
            stack: cleanedStack
        })
        return
    }
    res.status(500).json({
        status: false,
        statusCode: 500,
        message: SOMETHING_WENT_WRONG,
        error: err.stack
    })
    return;
}