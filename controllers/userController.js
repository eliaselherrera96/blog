import User from "../model/user";

export async function createUserController(req, res) {
  try {
    const newUser = User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
}
