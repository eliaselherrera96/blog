import mongoose from "mongoose";

const BeitragItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }
});
  

const beitragModel = mongoose.model("beitragList", BeitragItemSchema);

export default beitragModel;