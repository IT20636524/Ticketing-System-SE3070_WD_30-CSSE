import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const PTManagerSchema = new mongoose.Schema(
  {
    nic: {
      type: String,
      minlength: 8,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

PTManagerSchema.plugin(mongoosePaginate);

const PTManager = mongoose.model("PTManager", PTManagerSchema);

export default PTManager;
