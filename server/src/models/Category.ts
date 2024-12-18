import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    categoryCode: {
        type: String,
        required: true,
        unique: true
    },
    categoryIcon: {
        type: String,
        required: true,
        default: ""
    },

}, { timestamps: true });

const Category = mongoose.model("category", categorySchema);
export default Category;
