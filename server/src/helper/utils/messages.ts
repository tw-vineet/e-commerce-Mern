import { arrayObject } from "../../DataTypes/dataTypes";

export const messages: arrayObject = {
    USER_REGISTERED: "User registered successfully",
    USER_NOT_FOUND: "User not found",
    INCORRECT_PASSWORD: "Incorrect password",
    LOGIN_SUCCESS: "You have been loggedin successfully",
    USER_DETAILS: "User details",
    USER_DETAIL_UPDATED: "User details updated successfully",
    USER_DELETED: "User deleted successfully",
    CATEGORY_ADDED: "New category added successfully",
    CATEGORY_LIST: "Category list",
    VALIDATION_ERROR: "Validation Error",
    SOMETHING_WENT_WRONG: "Something went wrong",
    PASSWORD_CRITERIA: "Password must be of 8-16 character with uppercase, lowercase, number, and special characters(@$!%*?&)",
    IS_REQUIRED: "is required",
    DIGITS_ONLY: "must be in digits only",
    PHONE_CODE_CRITERIA: "must contain between 1 and 3 digits only",
    MOBILE_NUMBER_CRITERIA: "must contain between 8 to 12 digits only",
    INVALID_IMAGE_FORMATE: "Invalid image formate: Only jpg,jpeg and png formate allowed",
    INVALID_URL_FORMATE: "Invalid image URL format.",
    ONE_IMAGE_ALLOWED: "Only 1 image file is allowed",
    ACCESS_TOKEN_REQUIRED: "Access token required",
    JWT_NOT_CONGIGURED: "JWT secret key is not configured in environment variables.",
    INVALID_ACCESS_TOKEN: "Invalid access token.",
    TOKEN_EXPIRED: "Token has been expired.",
    SOMETHING_WRONG_WITH_TOKEN: "Something wrong with token.",
    UNAUTHORIZED_ACCESS: "Unathorized access",
    INVALID_REQUESTED_URL: "Invalid requested url",
    SERVER_RUNNING_AT: "Server is running at",
    DATABASE_CONNECTED: "Database connected successfully.",
    DATABASE_CONNECTION_ERROR: "Database connection error",
}

