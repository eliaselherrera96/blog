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
beitragRouter.get("/", getAllBeitragsController);

// create / post
beitragRouter.post("/", createBeitragController);

//update
beitragRouter.put("/:beitragId",   updateBeitragController);

// Delete one
beitragRouter.delete("/:beitragId", deleteBeitragController);

// delete all
beitragRouter.delete("/", deleteAllBeitragsController);

export default beitragRouter;