var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
dotenv.config();
export const getEncryptedPassword = (password, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.PASSWORD_SECRET_KEY) {
            const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString();
            return encryptedPassword;
        }
    }
    catch (error) {
        next(error);
    }
});
export const getDecryptedPassword = (password, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.PASSWORD_SECRET_KEY) {
            const decryptdPassword = CryptoJS.AES.decrypt(password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
            return decryptdPassword;
        }
    }
    catch (error) {
        next(error);
    }
});
