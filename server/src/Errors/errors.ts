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

// validation error class
export class ValidationError extends BaseError {
    errorData: Record<string, string>
    constructor(data: Record<string, string>) {
        super("Validation Error", false, 400);
        this.errorData = data;
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}