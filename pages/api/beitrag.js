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

// import multer from 'multer';

dotenv.config();
const app = express();

app.use(cors());

app.get("/api/beitrag", getAllBeitragsController);
app.post("/api/beitrag", createBeitragController);
app.put("/api/beitrag/:beitragId", updateBeitragController);
app.delete("/api/beitrag/:beitragId", deleteBeitragController);
app.delete("/api/beitrag/", deleteAllBeitragsController);

// Multer-Konfiguration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/public/uploads/'); // Ordner, in dem die Bilder gespeichert werden sollen
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Verwendung des Originalnamens der Datei
//   },
// });

// const uploads = multer({ storage: storage });

// // Endpunkt zum Hochladen des Bildes
// app.post('/public/uploads/', uploads.single('image'), (req, res) => {
//   if (!req.file) {
//     res.status(400).send('Es wurde keine Datei hochgeladen');
//   } else {
//     const imageURL = `/uploads/${req.file.filename}`;
//     res.json({ imageURL: imageURL });
//   }
// });


(async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
})();

export default app;

