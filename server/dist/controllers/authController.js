var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        });
    }
    catch (error) {
        // console.log(error);
        next(error);
    }
});
export const authController = {
    signup
};
