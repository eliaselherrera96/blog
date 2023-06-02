import User from "../model/userModel";
import { hashPassword, comparePassword } from "../lib/encrypt.js";

async function registerUserController(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .send("Es wurden nicht alle erforderlichen Felder übmittelt!");
  }

  try {
    const hashedPasswort = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPasswort,
    });
    await newUser.save();
    res.status(201).json({
      data: newUser,
      message: "Benutzer erfolgreich registriert",
    });
  } catch (error) {
    res
      .status(500)
      .json("irgendwas ist bei der Registierung in server schiefgelaufen");
  }
}

async function loginUserController(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Es wurden nicht alle erforderlichen Felder übmittelt!");
  }
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json("Benutzer nicht gefunden");
    }

    const matched = await comparePassword(password, user.password);

    if (!matched) {
      return res.status(401).json("Falsches Passwort!");
    }

    res.status(200).json({ message: "Erfolgreich eingeloggt!" });
  } catch (error) {
    res.status(500).json("irgendwas ist in server schiefgelaufen");
  }
}
export { registerUserController, loginUserController };
