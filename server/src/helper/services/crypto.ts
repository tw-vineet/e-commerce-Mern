import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import { NextFunction } from 'express';

dotenv.config();

export const getEncryptedPassword = async (password: string, next: NextFunction) => {
    try {
        if (process.env.PASSWORD_SECRET_KEY) {
            const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString();
            return encryptedPassword;
        }
    } catch (error) {
        next(error)
    }
}

export const getDecryptedPassword = async (password: string, next: NextFunction) => {
    try {
        if (process.env.PASSWORD_SECRET_KEY) {
            const decryptdPassword = CryptoJS.AES.decrypt(password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
            return decryptdPassword;
        }
    } catch (error) {
        next(error)
    }
}