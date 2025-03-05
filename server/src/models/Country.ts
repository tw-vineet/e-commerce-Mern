import mongoose from "mongoose";
const countrySchema = new mongoose.Schema({
    countryId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    phoneCode: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    currencyName: {
        type: String,
        required: true,
    },
    currencySymbol: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Country = mongoose.model("country", countrySchema);
export default Country;
