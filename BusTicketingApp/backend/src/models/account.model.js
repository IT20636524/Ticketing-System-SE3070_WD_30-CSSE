import mongoose, {Schema} from "mongoose";

const AccountSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        accountNumber: {
            type: Number,
            required: true
        },
        totalBalance: {
            type: Number,
            required: true
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Account", AccountSchema);
