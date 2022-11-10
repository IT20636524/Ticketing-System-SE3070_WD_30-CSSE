import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const JourneySchema = new mongoose.Schema(
  {
    journeyId: { type: String, unique: true, required: true },
    startFrom: {
      type: String,
    },
    endsAt: {
      type: String,
    },
    cities: [{
      type: Object,
    }],
    journeyType: {
      type: String,
      default: "one-way",
    },
    fee: { type: Number },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

JourneySchema.plugin(mongoosePaginate);

JourneySchema.index({ createdAt: 1 });

const Journey = mongoose.model("Journey", JourneySchema);

Journey.syncIndexes();

export default Journey;
