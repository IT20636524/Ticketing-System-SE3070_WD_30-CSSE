import mongoose, {Schema} from "mongoose";

const paymentSchema = new Schema(
    {
        methodType: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        activeStatus: {
            type: Boolean,
            default: true,
            required: true
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Payment", paymentSchema);
