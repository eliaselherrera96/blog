import userModel from "../model/userModel";
import { hashPassword, comparePassword } from "../lib/encrypt.js";

export async function registerUserController(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .send("Es wurden nicht alle erforderlichen Felder übmittelt!");
  }

  try {
    const hashedPasswort = await hashPassword(password);

    const newUser = new userModel({
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

export async function loginUserController(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send("Es wurden nicht alle erforderlichen Felder übmittelt!");
  }
  try {
    const user = await userModel.findOne({ username });

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

export async function deleteUserController(req, res, next) {
  const { username, email, password } = req.query;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Es wurden nicht alle erforderlichen Felder übermittelt!",
    });
  }

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Benutzer nicht gefunden" });
    }

    const matched = await comparePassword(password, user.password);

    if (!matched) {
      return res.status(401).json({ message: "Falsches Passwort!" });
    }

    await userModel.findOneAndDelete({ username });

    res.status(200).json({ message: "Benutzer erfolgreich gelöscht" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Etwas ist beim Löschen des Benutzers schiefgelaufen" });
  }
}

export async function changePasswordController(req, res, next) {
  const { username, email, password, code } = req.body;

  if (!username || !email || !password || !code) {
    return res.status(400).json({
      message: "Es wurden nicht alle erforderlichen Felder übermittelt!",
    });
  }

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Benutzer nicht gefunden" });
    }

    if (user.email !== email) {
      return res.status(400).json({ message: "Ungültige Email-Adresse" });
    }

    if (user.code !== code) {
      return res.status(400).json({ message: "Ungültiger Verifizierungscode" });
    }

    const hashedPassword = await hashPassword(password);

    user.password = hashedPassword;
    user.code = null;
    await user.save();

    res.status(200).json({ message: "Passwort erfolgreich geändert" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Etwas ist beim Ändern des Passworts schiefgelaufen" });
  }
}
