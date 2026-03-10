import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  phone: { type: String, trim: true},
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6, select: false },
  otp: { type: String },
  oauthProvider: { type: String },
  role: { 
    type: String, 
    enum: [
      "super_admin",
      "admin",
      "sales",
      "editor",
      "seo_editor",
      "analytics",
      "subscriber"
    ],
    default: "subscriber"
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);