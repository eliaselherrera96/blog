import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../../database/connectDB.js";
import { getAllBeitragsController,
    createBeitragController,
    updateBeitragController,
    deleteBeitragController,
    deleteAllBeitragsController
} from "../../controllers/beitragController.js";

dotenv.config();
const app = express();

app.use(cors());

app.get("/api/beitrag", getAllBeitragsController);
app.post("/api/beitrag", createBeitragController);
app.put("/api/beitrag/:beitragId", updateBeitragController);
app.delete("/api/beitrag/:beitragId", deleteBeitragController);
app.delete("/api/beitrag/", deleteAllBeitragsController);


(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
})();

export default app;

