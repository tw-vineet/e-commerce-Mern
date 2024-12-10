import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { ValidationError } from '../middleware/errorHandler.js';
import { arrayObject, dynamicObject, UploadedImage } from '../DataTypes/dataTypes.js';
import { checkValidImage } from '../helper/utils/validImage.js';
import { messages } from '../helper/utils/messages.js';

const { IS_REQUIRED, DIGITS_ONLY, PASSWORD_CRITERIA, INVALID_URL_FORMATE, PHONE_CODE_CRITERIA, ONE_IMAGE_ALLOWED, INVALID_IMAGE_FORMATE } = messages;

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
                    "string.pattern.base": PASSWORD_CRITERIA,
                }),
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} ${IS_REQUIRED}`,
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
            'string.empty': `{{#label}} ${IS_REQUIRED}`,
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
                    'string.empty': `{{#label}} ${IS_REQUIRED}`,
                    'string.pattern.base': `{{#label}} ${DIGITS_ONLY}`,
                    "string.max": `{{#label}} ${PHONE_CODE_CRITERIA}`,
                    "string.min": `{{#label}} ${PHONE_CODE_CRITERIA}`
                }),
            mobileNumber: joi.string()
                .required()
                .pattern(/^\d+$/)
                .min(8)
                .max(12)
                .label("Mobile number")
                .messages({
                    'string.empty': `{{#label}} ${IS_REQUIRED}`,
                    'string.pattern.base': `{{#label}} ${DIGITS_ONLY}`,
                    "string.max": `{{#label}} ${PHONE_CODE_CRITERIA}`,
                    "string.min": `{{#label}} ${PHONE_CODE_CRITERIA}`
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
                        "string.pattern.base": `${PASSWORD_CRITERIA}`,
                    }),
                otherwise: joi.optional()
            }),
            address: joi.string().required().label("Address"),
            profileImage: joi.alternatives().try(
                joi.any().required().label('Profile image').custom((value, helpers) => {
                    if (!value) {
                        return helpers.error('any.required', { message: `{{#label}} ${IS_REQUIRED}` });
                    } else if (typeof value !== 'string') {
                        if (Array.isArray(value)) {
                            return helpers.error('any.invalid', { message: ONE_IMAGE_ALLOWED });
                        } else if (!validImageFormats.includes(value.mimetype)) {
                            return helpers.error('any.invalid', { message: INVALID_IMAGE_FORMATE });
                        }
                        return value;
                    } else {
                        checkValidImage(value).then((status) => {
                            if (status) {
                                return value;
                            } else {
                                return helpers.error('any.invalid', { message: INVALID_URL_FORMATE });
                            }
                        })
                    }
                }),

            ).required().messages({
                'any.empty': `{{#label}} ${messages.IS_REQUIRED}`,
                'string.empty': `{{#label}} ${messages.IS_REQUIRED}`,
                'number.base': `{{#label}} ${messages.IS_REQUIRED}`,
                'any.invalid': `{{#message}}`,
                'string.uri': INVALID_URL_FORMATE
            })
        }).options({ abortEarly: false, allowUnknown: true }).messages({
            'string.empty': `{{#label}} ${messages.IS_REQUIRED}`,
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
            'string.empty': `{{#label}} ${messages.IS_REQUIRED}`,
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
