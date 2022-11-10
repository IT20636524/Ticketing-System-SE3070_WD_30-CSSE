import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const localPassengerSchema = new mongoose.Schema(
    {
        nic: {
            type: String,
            minlength: 8,
        },
        address: {
            type: String,
            minlength: 8,
        },
    },
    {
        versionKey: false,
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
    },
);

localPassengerSchema.plugin(mongoosePaginate);

const LocalPassenger = mongoose.model("LocalPassenger", localPassengerSchema);

export default LocalPassenger;
