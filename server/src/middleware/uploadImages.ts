import { Request, Response, NextFunction } from "express";
import { fileWithTempPath } from "../DataTypes/dataTypes";
import cloudinary from "../helper/services/cloudnary.js";


export const uploadImages = async (req: Request, res: Response, next: NextFunction) => {
    const folder = "uploads"               //folder name in cloudnary
    try {
        if (req.files && Object.keys(req.files).length > 0) {
            const key: string = Object.keys(req.files)[0];
            const files: fileWithTempPath | fileWithTempPath[] = req.files[key]

            let uploadedImages: string | string[] = []
            const uploadFile = async (file: fileWithTempPath) => {
                const tempFilePath = file.tempFilePath
                const result = await cloudinary.uploader.upload(tempFilePath, { folder });
                return result;
            };

            if (Array.isArray(files)) {
                for (let file of files) {
                    const uploadedImage = await uploadFile(file);
                    uploadedImages.push(uploadedImage.secure_url);
                }

            } else {
                const uploadedImage = await uploadFile(files);
                uploadedImages = uploadedImage.secure_url
            };

            req.body[key] = uploadedImages;
            next()
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}