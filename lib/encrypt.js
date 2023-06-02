import bcrypt from "bcrypt";

export const hashPassword = async (passwort, saltRounds = 10) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const passwortHash = await bcrypt.hash(passwort, salt);
  return passwortHash;
};

export const comparePassword = async (passwort, hashedPassword) => {
  const match = await bcrypt.compare(passwort, hashedPassword);
  return match;
};
