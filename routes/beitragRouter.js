import express from "express";

import {
  getAllBeitragsController,
  createBeitragController,
  updateBeitragController,
  deleteBeitragController,
  deleteAllBeitragsController,
} from "../controllers/beitragControllers.js";

const beitragRouter = express.Router();

// get / read
beitragkRouter.get("/", getAllBeitragsController);

// create / post
beitragRouter.post("/", createBeitragController);

//update
beitragRouter.put("/:taskId",   updateBeitragController);

// Delete one
beitragRouter.delete("/:taskId", deleteBeitragController);

// delete all
beitragRouter.delete("/", deleteAllBeitragsController);

export default beitragRouter;