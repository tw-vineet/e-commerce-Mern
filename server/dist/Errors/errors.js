// base error class
export class BaseError extends Error {
    constructor(message, status, statusCode) {
        super(message);
        this.status = status;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, BaseError.prototype);
    }
}
// 404 error class
export class NotFoundError extends BaseError {
    constructor(message) {
        super(message, false, 404);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
// validation error class
export class ValidationError extends BaseError {
    constructor(data) {
        super("Validation Error", false, 400);
        this.errorData = data;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
