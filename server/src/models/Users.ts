import { NextFunction } from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    phoneCode: {
        type: Number,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', "admin"],
        default: "user"
    },
    profileImage: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const User = mongoose.model("user", userSchema);
export default User;

//services

export const createUser = async (values: Record<string, string>, next: NextFunction) => {
    try {
        const newUser = new User(values)
        const response = await newUser.save();
        return response;
    } catch (error) {
        next(error);
        console.log("error", error);
    }
}

export const getUserDetails = async (id: string, next: NextFunction) => {
    try {
        const response = await User.findById(id).select("-password");
        return response;
    } catch (error) {
        next(error);
        console.log("error", error);
    }
}
export const getUserDetailsByEmail = async (email: string, next: NextFunction) => {
    try {
        const response = await User.findOne({ email });
        return response;
    } catch (error) {
        next(error);
        console.log("error", error);
    }
}
