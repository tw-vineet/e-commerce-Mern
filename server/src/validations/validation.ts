import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { ValidationError } from '../Errors/errors.js';

type arrayObject = {
    [key: string]: any
}

type signupObject = {
    firstName: string,
    lastName: string
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
            mobileNumber: joi.string()
                .required()
                .pattern(/^\d+$/)
                .min(8)
                .max(12)
                .label("Mobile number")
                .messages({
                    'string.empty': `{{#label}} is required`,
                    'string.pattern.base': "{{#label}} digits only",
                    "string.max": "{{#label}} should contains 8 to 12 digits only",
                    "string.min": "{{#label}} should contains 8 to 12 digits only"
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

    } catch (error) {
        console.log(error);
    }
}