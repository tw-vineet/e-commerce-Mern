import { ObjectId } from "mongodb";

export type jwtCredential = {
    userId: ObjectId,
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
    [key: string]: any
}

export interface UploadedImage {
    public_id: string;
    secure_url: string;
    [key: string]: any;
}