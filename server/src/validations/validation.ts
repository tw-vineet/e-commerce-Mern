import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { ValidationError } from '../middleware/errorHandler.js';

type arrayObject = {
    [key: string]: string
}

type signupObject = {
    firstName: string,
    lastName: string,
    email: string,
    phoneCose: number
    mobileNumber: number
    password: string,
}


export const validateFormData = (validatingData: signupObject, validationSchema: joi.ObjectSchema) => {
    // validationSchema = validationSchema.keys({
    //     access_token: Joi.string(), // Add 'token' field to the schema
    // });

    const { error } = validationSchema.validate(validatingData);
    if (error) {
        const allErrors: arrayObject = {};
        error.details.forEach((err) => {
            let keyIndex: number = err.path.length - 1;
            allErrors[err.path[keyIndex]] = err.message.replace(/"/g, '');
        });
        return allErrors
    } else {
        return null
    };
}

export const signupValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validationSchema: joi.ObjectSchema = joi.object({
            firstName: joi.string().required().label("First name"),
            lastName: joi.string().required().label("Last name"),
            email: joi.string().email().required().label("Email"),
            phoneCode: joi.string()
                .required()
                .pattern(/^\d+$/)
                .min(2)
                .max(3)
                .label("Phone code")
                .messages({
                    'string.empty': `{{#label}} is required`,
                    'string.pattern.base': "{{#label}} must be in digits only",
                    "string.max": "{{#label}} must contain between 1 and 3 digits only.",
                    "string.min": "{{#label}} must contain between 1 and 3 digits only."
                }),
            mobileNumber: joi.string()
                .required()
                .pattern(/^\d+$/)
                .min(8)
                .max(12)
                .label("Mobile number")
                .messages({
                    'string.empty': `{{#label}} is required`,
                    'string.pattern.base': "{{#label}} must be in digits only",
                    "string.max": "{{#label}} must contain between 8 to 12 digits only",
                    "string.min": "{{#label}} must contain between 8 to 12 digits only"
                }),
            password: joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$")).messages({
                "string.pattern.base":
                    'Password must be of 8-16 character with uppercase, lowercase, number, and special characters(@$!%*?&)',
            }),

        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} is required`,
        });



        const validatingData: signupObject = {
            ...req.body,
            // profileImage: req.files
        };

        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export const loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validationSchema: joi.ObjectSchema = joi.object({
            email: joi.string().email().required().label("Email"),
            password: joi.string().required().label("Password"),
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} is required`,
        });

        const validatingData: signupObject = req.body
        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        console.log(error);
    }
}