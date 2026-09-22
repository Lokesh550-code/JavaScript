import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("Yo!");
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({ message: "The request was successful" });
});

app.get("/notes", (req, res) => {
  res.status(200).json({ message: "The request was successful", notes : notes });
});

app.delete("/notes/:q", (req, res) => {
  const index = req.params.q;
  console.log(index);
  notes.splice(index, 1);
  res.status(200).json({ message: "Note deleted sucessfully" });
  console.log(notes);
});

app.listen(PORT, () => {
  console.log(`The server is running on port:`, PORT);
});
