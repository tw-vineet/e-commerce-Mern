import { Request, Response, NextFunction } from "express";

import { v2 as cloudinary } from 'cloudinary';
import { fileWithTempPath, UploadedImage } from "../../DataTypes/dataTypes";

// Configure Cloudinary with credentials
cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET_KEY
});

export const uploadImageToCloudinary = async (files: fileWithTempPath | fileWithTempPath[], next: NextFunction, folder = "uploads") => {
    try {
        const uploadedImages: UploadedImage[] = []
        const uploadFile = async (file: fileWithTempPath) => {
            const tempFilePath = file.tempFilePath
            const result = await cloudinary.uploader.upload(tempFilePath, { folder });
            return result;
        };

        if (Array.isArray(files)) {
            for (let file of files) {
                const uploadedImage = await uploadFile(file);
                uploadedImages.push(uploadedImage);
            }

        } else {
            const uploadedImage = await uploadFile(files);
            uploadedImages.push(uploadedImage);
        }
        return uploadedImages;
    } catch (error) {
        next(error)
    }
}