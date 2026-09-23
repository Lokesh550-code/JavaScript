import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Why no title"] },
    description: { type: String, required: [true, "Why no description"] },
  },
  { timestamps: true },
);

const noteModel = mongoose.model("noteModel", noteSchema);

export default noteModel;