import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { ValidationError } from '../middleware/errorHandler.js';
import { arrayObject, dynamicObject, UploadedImage } from '../DataTypes/dataTypes.js';
import { checkValidImage } from '../helper/utils/validImage.js';

const validImageFormats = ['image/jpeg', 'image/png', 'image/jpg'];
export const validateFormData = (validatingData: dynamicObject, validationSchema: joi.ObjectSchema) => {
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
            email: joi.string().email().required().label("Email"),
            password: joi.string().required().label("Password")
                .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$")).messages({
                    "string.pattern.base":
                        'Password must be of 8-16 character with uppercase, lowercase, number, and special characters(@$!%*?&)',
                }),
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} is required`,
        });

        const validatingData: dynamicObject = req.body;

        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        next(error);
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

        const validatingData: dynamicObject = req.body
        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        next(error);
    }
}

export const updateUserValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validationSchema: joi.ObjectSchema = joi.object({
            firstName: joi.string().required().label("First name"),
            lastName: joi.string().required().label("Last name"),
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
            currentPassword: joi.string().when('isPasswordChange', {
                is: "true",
                then: joi.string().required().label("Current Password"),
                otherwise: joi.optional()
            }),
            newPassword: joi.string().when('isPasswordChange', {
                is: "true",
                then: joi.string().required()
                    .label("Password")
                    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$"))
                    .messages({
                        "string.pattern.base": 'Password must be of 8-16 character with uppercase, lowercase, number, and special characters(@$!%*?&)',
                    }),
                otherwise: joi.optional()
            }),
            // currentPassword: joi.string().required().label("Current Password"),
            // newPassword: joi.string().required().label("Password")
            //     .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$")).messages({
            //         "string.pattern.base":
            //             'Password must be of 8-16 character with uppercase, lowercase, number, and special characters(@$!%*?&)',
            //     }),
            address: joi.string().required().label("Address"),
            profileImage: joi.alternatives().try(
                joi.any().required().label('Profile image').custom((value, helpers) => {
                    if (!value) {
                        return helpers.error('any.required', { message: "Profile image is required" });
                    } else if (typeof value !== 'string') {
                        if (Array.isArray(value)) {
                            return helpers.error('any.invalid', { message: "Only 1 image file is allowed" });
                        } else if (!validImageFormats.includes(value.mimetype)) {
                            return helpers.error('any.invalid', { message: "Invalid image formate: Only jpg,jpeg and png formate allowed." });
                        }
                        return value;
                    } else {
                        checkValidImage(value).then((status) => {
                            if (status) {
                                return value;
                            } else {
                                return helpers.error('any.invalid', { message: "Invalid image url." });
                            }
                        })
                    }
                }),

            ).required().messages({
                'any.empty': ' {{#label}} is required',
                'string.empty': '{{#label}} is required',
                'number.base': '{{#label}} is required',
                'any.invalid': '{{#message}}',
                'string.uri': 'Invalid image URL format.'
            })
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} is required`,
        });

        const validatingData: dynamicObject = {
            ...req.body,
            profileImage: req.files?.profileImage
        };

        const errors = validateFormData(validatingData, validationSchema);

        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        next(error)
    }
}

export const categoryValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validationSchema: joi.ObjectSchema = joi.object({
            categoryName: joi.string().required().label("Category name"),
            categoryCode: joi.string().required().label("Category code"),
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} is required`,
        });

        const validatingData: dynamicObject = req.body
        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors))
        }
        next();
    } catch (error) {
        next(error);
    }
}
