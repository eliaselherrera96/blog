import mongoose from "mongoose";

const BeitragItemSchema = new mongoose.Schema({
    beitrag: { type: String, required: true },
});

const beitragModel = mongoose.model("beitragList", BeitragItemSchema);

export default beitragModel;