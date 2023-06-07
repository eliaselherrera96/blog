import beitragModel from "../model/beitragModel.js";

// POST / CREATE

async function createBeitragController(req, res, next) {
const { title, content } = req.body;

if (!title || !content ) {
  return res
    .status(400)
    .json("Es wurden nicht alle erforderlichen Felder übmittelt!");
}

  try {
    const newBeitrag = new beitragModel({
      title,
      content
  });

    await newBeitrag.save();
    res.status(201).json({message: "Beitrag saved"});
  } catch (error) {
    res.status(500).json({message: "Beitrag wurde nicht gespeichert"});
  }
}

// GET ALL Beitrags
async function getAllBeitragsController(req, res) {
  try {
    const allBeitragItems = await beitragModel.find({});
    res.status(200).json(allBeitragItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
// DELETE Beitrag
async function deleteBeitragController(req, res) {
  const deleteId = req.body._id; 
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