import { ObjectId } from "mongodb";

export type jwtCredential = {
    id: ObjectId,
    isAdmin: boolean
}

declare global {
    namespace Express {
        interface Request {
            user: jwtCredential;
        }
    }
}

export interface fileWithTempPath {
    tempFilePath: string,
}

export interface UploadedImage {
    public_id: string;
    secure_url: string;
}

export type arrayObject = {
    [key: string]: string
}

type signupObject = {
    firstName: string,
    lastName: string,
    email: string,
    phoneCode: number
    mobileNumber: number
    password: string,
}

type updateUserObject = {
    firstName: string,
    lastName: string,
    phoneCode: number
    mobileNumber: number
    password: string,
    newPassword: string,
    confirmPassword: string,
    profileImage: UploadedImage
}

export type dynamicObject = signupObject | updateUserObject

export interface ExtendedError extends Error {
    code: number;
    keyPattern: Record<string, string>;
    keyValue: Record<string, string>;
    errorResponse: Record<string, string>;
}

export interface errorResponse {
    status: boolean,
    statusCode: number,
    message: string,
    data: arrayObject
}

export interface CategoryDuplicateErrors {
    categoryCode?: string;
    categoryName?: string;
}