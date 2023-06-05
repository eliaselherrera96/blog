import beitragModel from "../model/beitragModel.js";

// POST / CREATE

async function createBeitragController(req, res) {
  try {
    const newBeitrag = beitragModel({
        beitrag: req.body.beitrag,
    });

    const savedBeitrag = await newBeitrag.save();
    res.status(200).json(savedBeitrag);
  } catch (error) {
    res.json(error);
  }
}

// GET ALL Beitrags
async function getAllBeitragsController(req, res) {
  try {
    const allBeitragItems = await beitragModel.find({});
    res.status(200).json(allBeitragItems);
  } catch (error) {
    res.json(error);
  }
}

// UPDATE A Beitrags
async function updateBeitragController(req, res) {
  const updateId = req.params.beitragId;
  try {
    const updatedItem = await beitragModel.findByIdAndUpdate(
      updateId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.json(error);
  }
}

// DELETE Beitrag
async function deleteBeitragController(req, res) {
  const deleteId = req.params.beitragId;
  try {
    await beitragModel.findByIdAndDelete(deleteId);
    res.status(200).json("Beitrag GELÖSCHT!");
  } catch (error) {
    res.json(error);
  }
}

// DELETE ALL Beitrags

async function deleteAllBeitragsController(req, res) {
  try {
    await beitragModel.deleteMany({});
    res.status(200).json("ALLE Beitrags wurde GELÖSCHT!");
  } catch (error) {
    res.json(error);
  }
}

export {
  getAllBeitragsController,
  createBeitragController,
  updateBeitragController,
  deleteBeitragController,
  deleteAllBeitragsController,
};