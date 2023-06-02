import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = () => {
  try {
    userModel = mongoose.model("Users");
  } catch {
    userModel = mongoose.model("Users", UserSchema);
  }
};

export default User;
