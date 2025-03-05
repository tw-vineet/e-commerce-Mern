import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudnary.js";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "uploads", // Cloudinary folder name
            format: "png", // Or keep original format using file.mimetype.split("/")[1]
            public_id: file.originalname.split(".")[0] + "-" + Date.now(),
        };
    },
});

// Initialize Multer
const upload = multer({ storage });
export default upload;
