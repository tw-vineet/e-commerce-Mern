import mongoose from "mongoose";
const stateSchema = new mongoose.Schema({
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

const State = mongoose.model("state", stateSchema);
export default State;
