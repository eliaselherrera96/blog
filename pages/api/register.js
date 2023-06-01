import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../../database/connectDB";
import { createUserController } from "../../controllers/userController";

dotenv.config();
const app = express();
app.use(cors());

(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.post("/api/register", createUserController);
  } catch (error) {
    console.log(error);
  }
})();

export default app;
