import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const DriverSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      minlength: 8,
    },
    address: {
      type: String,
      minlength: 8,
    },
    age: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

DriverSchema.plugin(mongoosePaginate);

const Driver = mongoose.model("Driver", DriverSchema);

export default Driver;
