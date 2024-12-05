var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createUser, getUserDetailsByEmail } from "../models/Users.js";
import { getDecryptedPassword, getEncryptedPassword } from "../helper/services/crypto.js";
import { NotFoundError, UnAuthorizedError } from "../middleware/errorHandler.js";
import { generateJwtToken } from "../helper/services/jwtToken.js";
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const encryptedPassword = yield getEncryptedPassword(password, next);
        const values = Object.assign(Object.assign({}, req.body), { password: encryptedPassword });
        yield createUser(values, next);
        res.status(201).json({
            status: true,
            statusCode: 200,
            message: "User registered successfully",
        });
    }
    catch (error) {
        next(error);
    }
});
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userDetails = yield getUserDetailsByEmail(email, next);
        if (!userDetails) {
            return next(new NotFoundError("User with provided email not found"));
        }
        ;
        const decriptedPassword = yield getDecryptedPassword(userDetails.password, next);
        if (decriptedPassword !== password) {
            return next(new UnAuthorizedError("Incorrect password"));
        }
        ;
        const credential = {
            userId: userDetails._id,
            isAdmin: false
        };
        const accessToken = yield generateJwtToken(credential, next);
        res.status(201).json({
            status: true,
            statusCode: 200,
            message: "You have been loggedin successfully",
            data: { accessToken }
        });
    }
    catch (error) {
        next(error);
    }
});
export const authController = {
    signup,
    login
};
