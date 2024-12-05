var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const createUser = (values, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new User(values);
        const response = yield newUser.save();
        return response;
    }
    catch (error) {
        next(error);
        console.log("error", error);
    }
});
export const getUserDetails = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User.findById(id).select("-password");
        return response;
    }
    catch (error) {
        next(error);
        console.log("error", error);
    }
});
export const getUserDetailsByEmail = (email, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User.findOne({ email });
        return response;
    }
    catch (error) {
        next(error);
        console.log("error", error);
    }
});
