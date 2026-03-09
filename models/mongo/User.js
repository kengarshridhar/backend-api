import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, lowercase: true },
  phone: { type: String},
  username: {type: String, required: true },
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
});

export default mongoose.model("User", userSchema);