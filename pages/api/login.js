import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../../database/connectDB";
import authMiddleware from "../../middlewares/authMiddleware.js";
import notFoundMiddleware from "../../middlewares/notFoundMiddleware";
import errorHandlerMiddleware from "../../middlewares/errorHandlerMiddleware";
import { loginUserController } from "../../controllers/userController";

dotenv.config();
const app = express();
app.use(cors());

app.post("/api/register", authMiddleware, loginUserController);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
})();

export default app;
