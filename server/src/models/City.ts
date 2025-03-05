import mongoose from "mongoose";
const citySchema = new mongoose.Schema({
    stateId: {
        type: Number,
        required: true,
        unique: true
    },
    stateCode: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    countryId: {
        type: Number,
        required: true,
        unique: true
    },
    countryCode: {
        type: Number,
        required: true,
    },
    countryName: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const City = mongoose.model("city", citySchema);
export default City;
