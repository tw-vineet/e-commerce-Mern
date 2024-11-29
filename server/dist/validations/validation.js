var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import joi from 'joi';
import { ValidationError } from '../Errors/errors.js';
export const validateFormData = (validatingData, validationSchema) => {
    // validationSchema = validationSchema.keys({
    //     access_token: Joi.string(), // Add 'token' field to the schema
    // });
    const { error } = validationSchema.validate(validatingData);
    if (error) {
        const allErrors = {};
        error.details.forEach((err) => {
            let keyIndex = err.path.length - 1;
            allErrors[err.path[keyIndex]] = err.message.replace(/"/g, '');
        });
        return allErrors;
    }
    else {
        return null;
    }
    ;
};
export const signupValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationSchema = joi.object({
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
        const validatingData = Object.assign({}, req.body);
        const errors = validateFormData(validatingData, validationSchema);
        if (errors) {
            return next(new ValidationError(errors));
        }
    }
    catch (error) {
        console.log(error);
    }
});
