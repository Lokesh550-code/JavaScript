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
  res.status(200).json({ message: "The request was successful", notes: notes });
});

app.delete("/notes/:q", (req, res) => {
  const index = req.params.q;
  notes.splice(index, 1);
  res.status(200).json({ message: "Note deleted sucessfully" });
});

app.patch("/notes/:q", (req, res) => {
  const index = req.params.q;

  if (req.body.message !== undefined && req.body.title !== undefined) {
    notes[index].message = req.body.message;
    notes[index].title = req.body.title;
    res.status(200).json({ message: "Note updated sucessfully" });
  }
  if (req.body.title !== undefined) {
    notes[index].title = req.body.title;
    res.status(200).json({ message: "Note updated sucessfully" });
  }
  if (req.body.message !== undefined) {
    notes[index].message = req.body.message;
    res.status(200).json({ message: "Note updated sucessfully" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port:`, PORT);
});
