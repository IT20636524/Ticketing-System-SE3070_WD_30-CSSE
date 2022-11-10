import mongoose, {Schema} from "mongoose";

const CardSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        cardType: {
            type: String,
            required: true
        },
        cardNumber: {
            type: Number,
            required: true
        },
        cvc: {
            type: Number,
            required: true
        },
        expirationDate: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Card", CardSchema);
