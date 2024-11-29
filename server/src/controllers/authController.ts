import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../Errors/errors.js";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstName, lastName } = req.body;
        // const errors = [];

        // if (!firstName) errors.push({ firstName: "Firsat ame is required" })
        // if (!lastName) errors.push({ lastName: "Last name is required" })

        // const errors: any = {};
        // if (!firstName) {
        //     errors["firstName"] = "First name is required"
        // }
        // if (!lastName) {
        //     errors["lastName"] = "Last name is required"
        // }

        // if (errors) return next(new ValidationError(errors))

        res.status(201).json({
            status: true,
            statusCode: 200,
            message: "Signup successfully",
            // data: err.errorData
        })

    } catch (error) {
        // console.log(error);
        next(error)
    }
};

export const authController = {
    signup
}