import { NextFunction } from "express";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneCode: {
        type: Number,
    },
    mobileNumber: {
        type: Number,
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
    isAdmin: {
        type: Boolean,
        default: false
    },
    profileImage: {
        type: String,
        default: ""
    },
    address: {
        type: String,
    },

}, { timestamps: true });

const User = mongoose.model("user", userSchema);
export default User;

//services
export const createUser = async (data: Record<string, string>, next: NextFunction) => {
    try {
        const newUser = new User(data)
        const response = await newUser.save();
        return response;
    } catch (error) {
        next(error);
    }
}

export const getUserDetails = async (id: ObjectId, next: NextFunction) => {
    try {
        const response = await User.findById(id);
        return response;
    } catch (error) {
        next(error);
    }
}

export const getUserDetailsByEmail = async (email: string, next: NextFunction) => {
    try {
        const response = await User.findOne({ email });
        return response;
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (userId: ObjectId, data: Record<string, string>, next: NextFunction) => {
    try {
        const response = await User.findByIdAndUpdate(userId, { $set: data }, { new: true }).select("-password");
        return response;
    } catch (error) {
        next(error);
    }
}