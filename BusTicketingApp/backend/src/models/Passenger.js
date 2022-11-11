import mongoose, {Schema} from "mongoose";

const PassengerSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        nic: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Passenger", PassengerSchema);
