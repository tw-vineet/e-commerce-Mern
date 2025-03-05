import mongoose from "mongoose";
import { UploadedFile } from "../../DataTypes/dataTypes";
import { FileArray } from "express-fileupload";

export const getObjectIds = (idArray: string[]) => {
    return idArray.map((id: string) => new mongoose.Types.ObjectId(id))
};

export const getImageUrlArray = (files: UploadedFile[] | FileArray | null | undefined) => {
    if (Array.isArray(files)) {
        return files.map(file => file.path)
    };
    return [];
}
