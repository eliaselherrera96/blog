import { validateToken } from "../lib/auth.js";

const authMiddleware = async (req, res, next) => {
  const headers = req.headers;
  const authorization = headers.authorization;

  if (!authorization) {
    return res.status(403).json({ message: "Authentifizierung erforderlich!" });
  }

  try {
    const token = authorization.split(" ")[1];
    console.log(token);

    if (!token) {
      return res
        .status(403)
        .json({ message: "Authentifizierungstoken erforderlich!" });
    }

    const decoded = await validateToken(token);

    console.log({ decoded });
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Ungültiges oder abgelaufenes Token" });
  }
};

export default authMiddleware;
