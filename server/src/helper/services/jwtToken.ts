import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { jwtCredential } from '../../DataTypes/dataTypes.js';

export const generateJwtToken = async (credential: jwtCredential, next: NextFunction) => {
    try {
        if (process.env.JWT_TOKEN_SECRET_KEY) {
            const accessToken = jwt.sign(
                credential,
                process.env.JWT_TOKEN_SECRET_KEY,
                {
                    expiresIn: '10s'
                }
            );
            return accessToken;
        }
    } catch (error) {
        next(error)
    }
}