import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const PublicTransportProviderSchema = new mongoose.Schema(
  {
    ptpId: { type: String, uninque: true },
    license: {
      type: String,
    },
    inspector: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inspector",
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
    transportRoute: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransportRoute",
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

PublicTransportProviderSchema.plugin(mongoosePaginate);

PublicTransportProviderSchema.index({ createdAt: 1 });

const PublicTransportProvider = mongoose.model(
  "PublicTransportProvider",
  PublicTransportProviderSchema
);

PublicTransportProvider.syncIndexes();

export default PublicTransportProvider;
