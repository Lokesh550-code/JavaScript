import "dotenv/config";
import express from "express";
import app from "./src/app.js";
import connetDb from "./src/db/db.js";
import noteModel from "./src/model/note.model.js";

const PORT = process.env.PORT;
const dbURL = process.env.DATABASE_URL;

connetDb(dbURL);

app.use(express.json());

app.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;
    await noteModel.create({
      title,
      description,
    });
    res.status(201).json({ message: "Note created sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Could not create note" });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res
      .status(200)
      .json({ message: "Notes fetched sucessfully", notes: [...notes] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Could not fetch notes", error });
  }
});

app.get("/notes/:q", async (req, res) => {
  const id = req.params.q;
  try {
    const note = await noteModel.findOne({ _id: id });
    res.status(200).json({ message: "Note fetched sucessfully", note: [note] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Could not fetch notes", error });
  }
});

app.patch("/notes/:q", async (req, res) => {
  try {
    const id = req.params.q;
    const { title, description } = req.body;
    if (title !== undefined && description !== undefined) {
      await noteModel.findOneAndUpdate(
        {
          _id: id,
        },
        {
          title: title,
          description: description,
        },
      );
      res.status(200).json({ message: "Note updated sucessfully" });
    } else if (title !== undefined) {
      await noteModel.findOneAndUpdate(
        { _id: id },
        {
          title: title,
        },
      );
      res.status(200).json({ message: "Note updated sucessfully" });
    } else if (description !== undefined) {
      await noteModel.findOneAndUpdate(
        { _id: id },
        {
          description: description,
        },
      );
      res.status(200).json({ message: "Note updated sucessfully" });
    } else {
      res.status(401).json({ message: "Bad request" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "could not update note", error: err });
  }
});

app.delete("/notes/:q", async (req, res) => {
  const id = req.params.q;
  try {
    await noteModel.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Note deleted sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Could not delete the note" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
