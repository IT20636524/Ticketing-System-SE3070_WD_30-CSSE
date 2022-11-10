import mongoose, {Schema, SchemaType} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const foreignPassengerSchema = new mongoose.Schema(
    {
        passportNumber: {
            type: Number,
            minlength: 8,
            // required: true
        },
    }
);

foreignPassengerSchema.plugin(mongoosePaginate);

const ForeignPassenger = mongoose.model('ForeignPassenger', foreignPassengerSchema);

export default ForeignPassenger;
