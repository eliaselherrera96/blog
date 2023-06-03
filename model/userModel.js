import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  code: { type: String, required: true },
});

// const User = () => {
//   try {
//     const userModel = mongoose.model("Users");
//     console.log(userModel);
//   } catch {
//     const userModel = mongoose.model("Users", UserSchema);
//     console.log(userModel);
//   }
// };

// export default User;

const userModel = mongoose.models.Users || mongoose.model("Users", UserSchema);
// ? mongoose.model("Users")
// : mongoose.model("Users", UserSchema);

export default userModel;
