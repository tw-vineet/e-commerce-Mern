import { Request, Response, NextFunction } from "express";
import { getUserDetails } from "../models/Users.js";

const userDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {


        // const userDetails = await getUserDetails(userId, next)
        // res.send(userDetails)
    } catch (error) {
        console.log("errorrrr", error);
    }
};

export const userController = {
    userDetails
}