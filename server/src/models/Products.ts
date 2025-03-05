import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: null,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
        required: true,
    },
    tags: [{
        type: String
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    }
    ],
    isDigital: {
        type: Boolean,
        default: false
    },
    weight: {
        type: String,
    },
    country: {
        type: String,
    },
    images: [{
        type: String
    }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    isDeActivated: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

const Product = mongoose.model("product", productSchema);
export default Product;