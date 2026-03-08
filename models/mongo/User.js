import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  phone: String,
  username: String,
  otp: String,
  oauthProvider: String,
});

export default mongoose.model("User", userSchema);