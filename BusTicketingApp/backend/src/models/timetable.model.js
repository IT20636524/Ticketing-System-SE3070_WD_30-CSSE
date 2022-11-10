import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const TimeTableSchema = new mongoose.Schema(
  {
    timeTableId: { type: String, unique: true, required: true },
    tableRows: [
      {
        startLocation: { type: String },
        startTime: { type: String },
        endLocation: { type: String },
        endTime: { type: String },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

TimeTableSchema.plugin(mongoosePaginate);

TimeTableSchema.index({ createdAt: 1 });

const TimeTable = mongoose.model("TimeTable", TimeTableSchema);

TimeTable.syncIndexes();

export default TimeTable;
