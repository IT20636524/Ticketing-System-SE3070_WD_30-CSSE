import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["LOCALPASSENGER", "FORIEGNPASSENGER", "INSPECTOR","PTMANAGER"],
      default: "LOCALPASSENGER",
    },
    LocalPassenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LocalPassenger",
    },
    ForeignPassenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ForeignPassenger",
    },
    Inspector: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inspector",
    },
    PTManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PTManager",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    contactNumber: {
      type: Number,
      required: true,
      minlength: 8,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

UserSchema.plugin(mongoosePaginate);

UserSchema.index({createdAt: 1});

const User = mongoose.model('User', UserSchema);

User.syncIndexes();

export default User;
