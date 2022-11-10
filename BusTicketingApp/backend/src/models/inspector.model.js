import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const InspectorSchema = new mongoose.Schema(
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
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

InspectorSchema.plugin(mongoosePaginate);

const Inspector = mongoose.model("Inspector", InspectorSchema);

export default Inspector;
